import assert from "node:assert/strict";
import { once } from "node:events";
import { spawn } from "node:child_process";
import http from "node:http";
import net from "node:net";
import path from "node:path";
import test, { after, before } from "node:test";
import { buildHttpsDestination } from "../src/lib/https-destination.ts";

const root = path.resolve(import.meta.dirname, "..");
let server;
let origin;

async function availablePort() {
  const socket = net.createServer();
  socket.listen(0, "127.0.0.1");
  await once(socket, "listening");
  const address = socket.address();
  assert.equal(typeof address, "object");
  const port = address.port;
  await new Promise((resolve, reject) => socket.close((error) => error ? reject(error) : resolve()));
  return port;
}

async function waitUntilReady(url) {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before becoming ready (${server.exitCode})`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The listener may not be ready yet.
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error("Timed out waiting for the temporary Next.js server");
}

before(async () => {
  const port = await availablePort();
  origin = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, [
    "node_modules/next/dist/bin/next",
    "start",
    "-H",
    "127.0.0.1",
    "-p",
    String(port),
  ], {
    cwd: root,
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  await waitUntilReady(`${origin}/en`);
});

after(async () => {
  if (!server || server.exitCode !== null) return;
  server.kill("SIGTERM");
  await once(server, "exit");
});

for (const [route, text] of [
  ["/en", "Contextor"],
  ["/ko", "Contextor"],
  ["/en/services", "Personal AI"],
  ["/ko/services", "개인 AI 활용 컨설팅"],
]) {
  test(`${route} renders through the production server`, async () => {
    const response = await fetch(`${origin}${route}`);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(text));
  });
}

test("production responses carry the security header contract", async () => {
  const response = await fetch(`${origin}/en`);

  assert.equal(response.headers.get("x-powered-by"), null);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(response.headers.get("permissions-policy"), "camera=(), microphone=(), geolocation=()");
  assert.equal(response.headers.get("strict-transport-security"), null);

  const csp = response.headers.get("content-security-policy");
  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /script-src 'self' 'unsafe-inline'/);
  assert.match(csp, /style-src 'self' 'unsafe-inline'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /frame-ancestors 'none'/);
});

test("rendered pages reference only same-origin scripts that are available", async () => {
  const response = await fetch(`${origin}/en`);
  const html = await response.text();
  const sources = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((match) => match[1]);

  assert.ok(sources.length > 0);
  for (const source of sources) {
    assert.match(source, /^\/_next\//);
    const asset = await fetch(`${origin}${source}`);
    assert.equal(asset.status, 200);
    assert.match(asset.headers.get("content-type"), /javascript/);
  }
});

function publicHeaders(host, scheme) {
  return {
    host,
    "cf-visitor": JSON.stringify({ scheme }),
    "x-forwarded-proto": scheme,
  };
}

function rawRequest(pathname, { headers = {}, method = "GET" } = {}) {
  return new Promise((resolve, reject) => {
    const target = new URL(origin);
    const request = http.request({
      headers,
      hostname: target.hostname,
      method,
      path: pathname,
      port: target.port,
    }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => { body += chunk; });
      response.on("end", () => resolve({
        body,
        headers: response.headers,
        status: response.statusCode,
      }));
    });
    request.on("error", reject);
    request.end();
  });
}

test("HTTPS destination setters cannot replace the allowlisted origin", () => {
  for (const pathname of [
    "//attacker.example/path",
    "/\\attacker.example/path",
    "/%2f%2fattacker.example/path",
  ]) {
    const destination = buildHttpsDestination(
      "contextor.cc",
      pathname,
      "?next=https://attacker.example",
    );
    assert.equal(destination.origin, "https://contextor.cc");
    assert.equal(destination.search, "?next=https://attacker.example");
  }
});

test("Next path normalization and the proxy never redirect path variants off-origin", async () => {
  for (const pathname of [
    "//attacker.example/path?case=slash",
    "/\\attacker.example/path?case=backslash",
    "/%2f%2fattacker.example/path?case=encoded",
  ]) {
    const response = await rawRequest(pathname, {
      headers: publicHeaders("contextor.cc", "http"),
    });
    assert.equal(response.status, 308);
    const destination = new URL(response.headers.location, "https://contextor.cc");
    assert.equal(destination.origin, "https://contextor.cc");
  }
});

test("public HTTP redirects canonical and www hosts without an open redirect", async () => {
  for (const host of ["contextor.cc", "www.contextor.cc"]) {
    const response = await rawRequest("/en/services?source=transport", {
      headers: publicHeaders(host, "http"),
    });
    assert.equal(response.status, 308);
    assert.equal(
      response.headers.location,
      `https://${host}/en/services?source=transport`,
    );
    assert.equal(response.headers["strict-transport-security"], undefined);
  }
});

test("verified public HTTPS continues without a loop and receives bounded HSTS", async () => {
  const response = await rawRequest("/en", {
    headers: publicHeaders("contextor.cc", "https"),
  });
  assert.equal(response.status, 200);
  assert.equal(response.headers.location, undefined);
  assert.equal(response.headers["strict-transport-security"], "max-age=86400");
});

test("localhost ignores proxy scheme headers and remains usable without HSTS", async () => {
  const response = await fetch(`${origin}/en`, {
    headers: {
      "cf-visitor": "malformed",
      "x-forwarded-proto": "http",
    },
  });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("location"), null);
  assert.equal(response.headers.get("strict-transport-security"), null);
});

test("unsafe public HTTP methods cannot reach application routes", async () => {
  const response = await rawRequest("/en", {
    method: "POST",
    headers: publicHeaders("contextor.cc", "http"),
  });
  assert.equal(response.status, 400);
  assert.equal(response.body, "HTTPS Required");
  assert.equal(response.headers.location, undefined);
});

test("malformed or ambiguous public schemes fail closed", async () => {
  for (const headers of [
    { host: "contextor.cc", "x-forwarded-proto": "ftp" },
    {
      host: "contextor.cc",
      "x-forwarded-proto": "https",
      "cf-visitor": JSON.stringify({ scheme: "http" }),
    },
    {
      host: "contextor.cc",
      "x-forwarded-proto": "https",
      "cf-visitor": "not-json",
    },
  ]) {
    const response = await rawRequest("/en", { headers });
    assert.equal(response.status, 400);
    assert.equal(response.headers.location, undefined);
    assert.equal(response.headers["strict-transport-security"], undefined);
  }
});

test("unknown and malformed hosts cannot influence a redirect", async () => {
  for (const host of ["attacker.example", "contextor.cc:443", "contextor.cc.evil.example"]) {
    const response = await rawRequest("/en", {
      headers: publicHeaders(host, "http"),
    });
    assert.equal(response.status, 421);
    assert.equal(response.headers.location, undefined);
  }
});

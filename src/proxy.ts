import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { buildHttpsDestination } from "./lib/https-destination";

const PUBLIC_HOSTS = new Set(["contextor.cc", "www.contextor.cc"]);
const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
const HSTS = "max-age=86400";

function isLocalHost(host: string): boolean {
  const match = host.match(/^(?:localhost|127\.0\.0\.1|\[::1\])(?::(\d{1,5}))?$/i);
  if (!match) return false;
  return match[1] === undefined || Number(match[1]) <= 65535;
}

function cloudflareScheme(request: NextRequest): "http" | "https" | null {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (forwardedProto !== "http" && forwardedProto !== "https") return null;

  const visitor = request.headers.get("cf-visitor");
  if (visitor === null) return forwardedProto;

  try {
    const parsed: unknown = JSON.parse(visitor);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      Array.isArray(parsed) ||
      Object.keys(parsed).length !== 1 ||
      !("scheme" in parsed) ||
      (parsed.scheme !== "http" && parsed.scheme !== "https") ||
      parsed.scheme !== forwardedProto
    ) {
      return null;
    }
  } catch {
    return null;
  }

  return forwardedProto;
}

export function proxy(request: NextRequest) {
  const rawHost = request.headers.get("host");
  if (!rawHost) return new NextResponse("Bad Request", { status: 400 });

  const host = rawHost.toLowerCase();
  if (isLocalHost(host)) return NextResponse.next();
  if (!PUBLIC_HOSTS.has(host)) {
    return new NextResponse("Misdirected Request", { status: 421 });
  }

  const scheme = cloudflareScheme(request);
  if (scheme === null) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  if (scheme === "http") {
    if (!SAFE_METHODS.has(request.method)) {
      return new NextResponse("HTTPS Required", { status: 400 });
    }

    const destination = buildHttpsDestination(
      host,
      request.nextUrl.pathname,
      request.nextUrl.search,
    );
    return NextResponse.redirect(destination, 308);
  }

  const response = NextResponse.next();
  response.headers.set("Strict-Transport-Security", HSTS);
  return response;
}

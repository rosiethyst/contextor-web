export function buildHttpsDestination(
  host: string,
  pathname: string,
  search: string,
): URL {
  const destination = new URL(`https://${host}`);
  destination.pathname = pathname;
  destination.search = search;
  return destination;
}

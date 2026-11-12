// robots.txt: preview copies on *.pages.dev are closed to search engines (staging rule, 23 Oct 2026); mrstar.fit is open.
export function onRequest({ request }) {
  const preview = new URL(request.url).hostname.endsWith(".pages.dev");
  const body = preview ? "User-agent: *\nDisallow: /\n" : "User-agent: *\nAllow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

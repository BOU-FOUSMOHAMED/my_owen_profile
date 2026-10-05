/**
 * Smoke tests for the SEO work: URL helpers, hreflang, and the static
 * output that crawlers read. Run with: node scripts/test-seo.mjs
 */
import { createServer } from "vite";
import { createServer as createHttpServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const DIST = join(ROOT, "dist");

let failures = 0;
const check = (label, actual, expected) => {
  const ok = actual === expected;
  if (!ok) failures += 1;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${ok ? "" : `\n        expected: ${expected}\n        actual:   ${actual}`}`);
};

const vite = await createServer({
  root: ROOT,
  logLevel: "error",
  server: { middlewareMode: true },
  appType: "custom",
});

const seo = await vite.ssrLoadModule("/src/lib/seo.ts");
const ctx = await vite.ssrLoadModule("/src/context/LanguageContext.tsx");
const section = await vite.ssrLoadModule("/src/lib/section.ts");

console.log("--- URL helpers ---");
check("absoluteUrl home", seo.absoluteUrl("fr"), "https://boufousmohamed.vercel.app/fr");
check("absoluteUrl blog", seo.absoluteUrl("en", "/blog"), "https://boufousmohamed.vercel.app/en/blog");
check("absoluteUrl trailing slash trimmed", seo.absoluteUrl("fr", "/"), "https://boufousmohamed.vercel.app/fr");
check("deep path keeps no trailing slash", seo.absoluteUrl("fr", "/blog/x/"), "https://boufousmohamed.vercel.app/fr/blog/x");
check("no double slash", seo.absoluteUrl("ar", "blog/rest-api-secure"), "https://boufousmohamed.vercel.app/ar/blog/rest-api-secure");

console.log("\n--- hreflang cluster ---");
const alts = seo.languageAlternates("/blog/spring-microservices");
check("5 languages + x-default", alts.length, 6);
check("x-default points to fr", alts.at(-1).href, "https://boufousmohamed.vercel.app/fr/blog/spring-microservices");
check("tam uses zgh code", alts.find((a) => a.lang === "tam").hreflang, "zgh");
check("all alternates share one page", new Set(alts.map((a) => a.href.split("/").slice(4).join("/"))).size, 1);
check("no alternate has a trailing slash", alts.some((a) => a.href.endsWith("/")), false);

console.log("\n--- language from path ---");
check("reads lang segment", ctx.langFromPathname("/es/blog/rest-api-secure"), "es");
check("rejects unknown segment", ctx.langFromPathname("/xx/blog"), null);
check("bare root is null", ctx.langFromPathname("/"), null);
check("blog is not a lang", ctx.langFromPathname("/blog/x"), null);

console.log("\n--- switching language keeps the page ---");
check("home -> en", ctx.swapLangInPathname("/fr", "es"), "/es");
check("post fr -> en", ctx.swapLangInPathname("/fr/blog/pentest-web", "en"), "/en/blog/pentest-web");
check("post ar -> tam", ctx.swapLangInPathname("/ar/blog/cicd-actions", "tam"), "/tam/blog/cicd-actions");
check("langless -> ar", ctx.swapLangInPathname("/blog/x", "ar"), "/ar/blog/x");
check("is idempotent on same lang", ctx.swapLangInPathname("/fr/blog/x", "fr"), "/fr/blog/x");

console.log("\n--- home path detection ---");
check("root is home", section.isHomePath("/"), true);
check("/fr is home", section.isHomePath("/fr"), true);
check("/fr/blog is not home", section.isHomePath("/fr/blog"), false);
check("404 path is not home", section.isHomePath("/xx/blog/y"), false);

console.log("\n--- blog data integrity ---");
const slugs = seo.BLOG_SLUGS;
check("6 posts discovered", slugs.length, 6);
check("slugs are unique", new Set(slugs).size, slugs.length);
for (const lang of seo.SUPPORTED_LANGS) {
  const post = seo.findPost("pentest-web", lang);
  check(`${lang}: post has ISO date`, /^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt ?? ""), true);
  check(`${lang}: post has content`, post.content.length > 0, true);
}

console.log("\n--- structured data ---");
const post = seo.findPost("rest-api-secure", "fr");
const posting = seo.blogPostingSchema(post, "fr");
check("BlogPosting type", posting["@type"], "BlogPosting");
check("has datePublished", posting.datePublished, post.publishedAt);
check("url is absolute", posting.url.startsWith("https://boufousmohamed.vercel.app/fr/blog/"), true);
check("JSON serialisable", typeof JSON.stringify(posting), "string");
for (const builder of [() => seo.personSchema("fr"), () => seo.webSiteSchema("ar"), () => seo.blogIndexSchema("es")]) {
  const data = builder();
  check(`${data["@type"]} JSON serialisable`, typeof JSON.stringify(data), "string");
}

console.log("\n--- meta copy ---");
const home = seo.homeMeta("fr");
check("home title has name", home.title.includes("MOHAMED BOU-FOUS"), true);
check("home description <=160 chars", home.description.length <= 160, true);
check("404 marked noindex", seo.notFoundMeta("fr").noindex, true);
check("post meta type article", seo.postMeta(post, "fr").type, "article");

await vite.close();

console.log("\n--- static output served to crawlers ---");
check("robots.txt exists", existsSync(join(DIST, "robots.txt")), true);
check("sitemap.xml exists", existsSync(join(DIST, "sitemap.xml")), true);
check("og-image.png exists", existsSync(join(DIST, "og-image.png")), true);
check("manifest exists", existsSync(join(DIST, "manifest.webmanifest")), true);

const TYPES = {
  ".html": "text/html",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".png": "image/png",
  ".js": "text/javascript",
  ".webmanifest": "application/manifest+json",
};

/** Mirrors the vercel.json rewrite: serve static files, else index.html. */
const server = createHttpServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  let file = join(DIST, decodeURIComponent(url.pathname));
  if (!existsSync(file) || url.pathname.endsWith("/")) file = join(DIST, "index.html");
  const body = await readFile(file);
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
  res.end(body);
});
await new Promise((r) => server.listen(0, r));
const { port } = server.address();

for (const route of ["/", "/fr", "/en", "/fr/blog", "/fr/blog/rest-api-secure", "/ar/blog/pentest-web"]) {
  const res = await fetch(`http://localhost:${port}${route}`);
  check(`GET ${route}`, res.status, 200);
}
for (const [route, type] of [["/robots.txt", TYPES[".txt"]], ["/sitemap.xml", TYPES[".xml"]], ["/og-image.png", TYPES[".png"]]]) {
  const res = await fetch(`http://localhost:${port}${route}`);
  check(`GET ${route} -> ${type}`, `${res.status} ${res.headers.get("content-type")}`, `200 ${type}`);
}

const robots = await (await fetch(`http://localhost:${port}/robots.txt`)).text();
check("robots points at real sitemap", robots.includes("Sitemap: https://boufousmohamed.vercel.app/sitemap.xml"), true);
check("robots has no legacy domain", /my-portfolio|my_owen_profile/.test(robots), false);

const sitemap = await (await fetch(`http://localhost:${port}/sitemap.xml`)).text();
check("sitemap has 40 urls", (sitemap.match(/<loc>/g) ?? []).length, 40);
check("sitemap has hreflang", sitemap.includes('xmlns:xhtml'), true);
check("sitemap has no legacy domain", /my-portfolio|my_owen_profile/.test(sitemap), false);

const html = await (await fetch(`http://localhost:${port}/fr/blog/rest-api-secure`)).text();
check("deep page keeps absolute favicon", html.includes('href="/favicon.svg"'), true);
check("deep page has noscript content", html.includes("Spring Boot"), true);
check("html has no legacy domain", /my-portfolio|my_owen_profile/.test(html), false);

server.close();

console.log(failures === 0 ? "\nAll checks passed." : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
import { useEffect } from "react";
import {
  absoluteUrl,
  HREFLANG,
  languageAlternates,
  OG_LOCALE,
  SITE,
  type PageMeta,
} from "./seo";

const JSON_LD_ATTR = "data-seo-jsonld";

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = `link[rel="${rel}"]${extra?.hreflang ? `[hreflang="${extra.hreflang}"]` : ""}`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (extra) {
    for (const [key, value] of Object.entries(extra)) el.setAttribute(key, value);
  }
}

function removeLinks(rel: string) {
  document.head
    .querySelectorAll<HTMLLinkElement>(`link[rel="${rel}"]`)
    .forEach((el) => el.remove());
}

/**
 * Applies title, description, canonical, robots, hreflang, Open Graph,
 * Twitter card and JSON-LD to <head> for the current route.
 *
 * Runs client-side because the app is a SPA. `public/sitemap.xml` and the
 * per-route `<title>` in index.html cover the crawlers that do not execute JS.
 */
export function useSeo(meta: PageMeta, jsonLd?: unknown) {
  const { lang, path, title, description, type, publishedAt, tags, noindex } = meta;
  const canonical = absoluteUrl(lang, path);

  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);

    setLink("canonical", canonical);
    removeLinks("alternate");
    for (const alt of languageAlternates(path)) {
      setLink("alternate", alt.href, { hreflang: alt.hreflang });
    }

    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMeta('meta[name="googlebot"]', "name", "googlebot", noindex ? "noindex, follow" : "index, follow");

    const isArticle = type === "article";
    setMeta('meta[property="og:type"]', "property", "og:type", isArticle ? "article" : "website");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE.name);
    setMeta('meta[property="og:locale"]', "property", "og:locale", OG_LOCALE[lang]);
    setMeta('meta[property="og:image"]', "property", "og:image", SITE.ogImage);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", SITE.ogImageAlt);

    document.head
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((el) => el.remove());
    for (const alt of languageAlternates(path)) {
      const metaEl = document.createElement("meta");
      metaEl.setAttribute("property", "og:locale:alternate");
      metaEl.setAttribute("content", OG_LOCALE[alt.lang as keyof typeof OG_LOCALE]);
      document.head.appendChild(metaEl);
    }

    if (isArticle && publishedAt) {
      setMeta('meta[property="article:published_time"]', "property", "article:published_time", publishedAt);
    } else {
      setMeta('meta[property="article:published_time"]', "property", "article:published_time", "");
    }

    document.head.querySelectorAll('meta[name="keywords"]').forEach((el) => el.remove());
    if (tags?.length) {
      const keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      keywords.setAttribute("content", tags.join(", "));
      document.head.appendChild(keywords);
    }

    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", SITE.ogImage);
    setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", SITE.ogImageAlt);

    document.documentElement.setAttribute("lang", HREFLANG[lang]);
  }, [lang, path, title, description, type, publishedAt, tags, noindex, canonical]);

  useEffect(() => {
    document.head.querySelectorAll(`script[${JSON_LD_ATTR}]`).forEach((el) => el.remove());
    if (!jsonLd) return;
    const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    for (const item of payload) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute(JSON_LD_ATTR, "");
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    }
  }, [jsonLd]);
}
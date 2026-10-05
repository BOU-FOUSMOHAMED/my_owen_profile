import { dictionaries, type Lang, type Translation } from "../i18n";
import { blog } from "../data/blog";
import type { BlogPost } from "../data/types";

/* ------------------------------------------------------------------ *
 *  ⚠️  EDIT ONLY THIS LINE to point SEO at your real production domain.
 *     Canonical tags, sitemap.xml, robots.txt, hreflang and Open Graph
 *     are all derived from it, so one edit propagates everywhere.
 * ------------------------------------------------------------------ */
export const SITE_URL = "https://boufousmohamed.vercel.app";

export const SUPPORTED_LANGS: Lang[] = ["fr", "en", "es", "ar", "tam"];
export const DEFAULT_LANG: Lang = "fr";

const OG_LOCALE: Record<Lang, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  ar: "ar_MA",
  tam: "zgh_TM",
};

/** BCP-47 tags used for hreflang annotations. */
const HREFLANG: Record<Lang, string> = {
  fr: "fr",
  en: "en",
  es: "es",
  ar: "ar",
  tam: "zgh",
};

export const SITE = {
  name: "MOHAMED BOU-FOUS",
  shortName: "Mohamed Bou-Fous",
  jobTitle: "Développeur Backend Java Spring Boot & Full Stack",
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageAlt:
    "MOHAMED BOU-FOUS — Développeur backend Java Spring Boot et full stack, portfolio et articles techniques",
  email: "boufousmohamed2005@gmail.com",
  location: "Agadir, Maroc",
  sameAs: [
    "https://github.com/BOU-FOUSMOHAMED",
    "https://www.linkedin.com/in/mohamed-bou-fous-00a554330/",
  ],
  knowsAbout: [
    "Backend Java",
    "Spring Boot",
    "Spring Security",
    "Développement Full Stack",
    "React",
    "API REST",
    "Microservices",
    "DevOps",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Tests d'intrusion",
    "OWASP",
    "Intelligence Artificielle",
  ],
};

/* ----------------------------- URLs ----------------------------- */

/** Normalises an internal path to always start with a single slash. */
const withLeadingSlash = (path: string) => (path.startsWith("/") ? path : `/${path}`);

/**
 * Absolute, canonical URL for a given language + internal path.
 * Never emits a trailing slash, so it stays byte-identical to the canonical
 * tags written into index.html (Google treats `/fr` and `/fr/` as two URLs).
 */
export function absoluteUrl(lang: Lang, path = "/"): string {
  const clean = withLeadingSlash(path).replace(/\/+$/, "");
  return `${SITE_URL}/${lang}${clean}`;
}

/** Every language variant of the same page, for hreflang + x-default. */
export function languageAlternates(path: string) {
  const list = SUPPORTED_LANGS.map((lang) => ({
    hreflang: HREFLANG[lang],
    href: absoluteUrl(lang, path),
    lang,
  }));
  return [...list, { hreflang: "x-default", href: absoluteUrl(DEFAULT_LANG, path), lang: DEFAULT_LANG }];
}

/** All blog slugs, language-independent (slugs are shared across languages). */
export const BLOG_SLUGS: string[] = blog[DEFAULT_LANG].items.map((post) => post.slug);

/** Post lookup that tolerates a missing/short language dictionary. */
export function findPost(slug: string | undefined, lang: Lang): BlogPost | undefined {
  if (!slug) return undefined;
  return (blog[lang] ?? blog[DEFAULT_LANG]).items.find((post) => post.slug === slug);
}

/* --------------------------- Meta copy --------------------------- */

const truncate = (text: string, max = 158) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}\u2026`;

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  lang: Lang;
  type?: "website" | "article";
  publishedAt?: string;
  tags?: string[];
  noindex?: boolean;
}

/** Title/description for the portfolio home page, per language. */
export function homeMeta(lang: Lang, t: Translation = dictionaries[lang]): PageMeta {
  return {
    lang,
    path: "/",
    title: `${SITE.name} — ${t.hero.subtitle}`,
    description: truncate(t.hero.description || t.about.paragraph1),
  };
}

/** Title/description for the blog index, per language. */
export function blogIndexMeta(lang: Lang, t: Translation = dictionaries[lang]): PageMeta {
  return {
    lang,
    path: "/blog",
    title: `${t.blog.title} — ${SITE.name}`,
    description: truncate(`${t.blog.intro} ${SITE.name} — ${SITE.jobTitle}.`),
  };
}

/** Title/description for a single article, per language. */
export function postMeta(post: BlogPost, lang: Lang): PageMeta {
  return {
    lang,
    path: `/blog/${post.slug}`,
    title: `${post.title} — ${SITE.shortName}`,
    description: truncate(post.excerpt),
    type: "article",
    publishedAt: post.publishedAt,
    tags: post.tags,
  };
}

/** 404 pages must never be indexed, otherwise they dilute the sitemap. */
export function notFoundMeta(lang: Lang, t: Translation = dictionaries[lang]): PageMeta {
  return {
    lang,
    path: "/404",
    title: `${t.notFound.title} — ${SITE.name}`,
    description: truncate(t.notFound.message),
    noindex: true,
  };
}

/* ------------------------- Structured data ------------------------- */

export function personSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE.name,
    url: absoluteUrl(lang, "/"),
    image: SITE.ogImage,
    email: `mailto:${SITE.email}`,
    jobTitle: SITE.jobTitle,
    description: dictionaries[lang].hero.description,
    knowsLanguage: SUPPORTED_LANGS,
    knowsAbout: SITE.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agadir",
      addressCountry: "MA",
    },
    worksFor: { "@type": "Organization", name: "FirstFinTech" },
    sameAs: SITE.sameAs,
  };
}

export function webSiteSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${SITE.name} — ${SITE.jobTitle}`,
    url: absoluteUrl(lang, "/"),
    inLanguage: SUPPORTED_LANGS.map((code) => HREFLANG[code]),
    description: dictionaries[lang].hero.description,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

export function blogIndexSchema(lang: Lang) {
  const items = blog[lang].items;
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl(lang, "/blog")}#blog`,
    name: dictionaries[lang].blog.title,
    description: dictionaries[lang].blog.intro,
    url: absoluteUrl(lang, "/blog"),
    inLanguage: HREFLANG[lang],
    isPartOf: { "@id": `${SITE_URL}/#website` },
    author: { "@id": `${SITE_URL}/#person` },
    blogPost: items.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(lang, `/blog/${post.slug}`)}#post`,
      url: absoluteUrl(lang, `/blog/${post.slug}`),
      headline: post.title,
      description: truncate(post.excerpt),
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      inLanguage: HREFLANG[lang],
      keywords: post.tags.join(", "),
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
    })),
  };
}

export function blogPostingSchema(post: BlogPost, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(lang, `/blog/${post.slug}`)}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(lang, `/blog/${post.slug}`) },
    url: absoluteUrl(lang, `/blog/${post.slug}`),
    headline: truncate(post.title, 110),
    description: truncate(post.excerpt),
    image: SITE.ogImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: HREFLANG[lang],
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.join(" ").split(/\s+/).length,
    timeRequired: `PT${parseInt(post.readTime, 10) || 5}M`,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${absoluteUrl(lang, "/blog")}#blog` },
  };
}

export { HREFLANG, OG_LOCALE };
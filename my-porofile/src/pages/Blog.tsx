import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { blog } from "../data/blog";
import { useLanguage } from "../context/LanguageContext";
import type { BlogCategory } from "../data/types";

type Filter = "all" | BlogCategory;

const ACCENT = {
  light: "#7a5c3c",
  lightHover: "#6b5033",
  dark: "#a9c0de",
  darkStrong: "#3a4f6d",
  lightBg: "#efe8dc",
  lightBorder: "#d9cbb4",
  darkBg: "#16223a",
  darkBorder: "#2c3d57",
};

const THEME_CLASSES = {
  section: "bg-[#f7f5f0] dark:bg-[#080c15]",
  label: "text-[#8a6d4a] dark:text-[#a9c0de]",
  card: "border-[#e3dbcc] bg-white dark:border-[#1f2c42] dark:bg-[#0c1220]",
  cardHover: "hover:border-[#c5b293] dark:hover:border-[#3a4f6d]",
  accentText: "text-[#7a5c3c] dark:text-[#a9c0de]",
  accentHover: "hover:text-[#6b5033] dark:hover:text-[#c4d4e8]",
  chipIdle: "border-[#ddd2c0] bg-white text-[#6f6352] dark:border-[#283850] dark:bg-[#0c1220] dark:text-[#aab7c8]",
  chipActive:
    "border-transparent bg-[#7a5c3c] text-white dark:bg-[#3a4f6d] dark:text-[#e7eef8]",
  shadowActive: "shadow-[0_10px_24px_rgba(122,92,60,0.25)] dark:shadow-[0_10px_24px_rgba(58,79,109,0.35)]",
  pageActive:
    "border-transparent bg-[#7a5c3c] text-white dark:bg-[#3a4f6d] dark:text-[#e7eef8]",
  pageIdle:
    "border-[#ddd2c0] bg-white text-[#6f6352] hover:border-[#c5b293] hover:text-[#6b5033] dark:border-[#283850] dark:bg-[#0c1220] dark:text-[#aab7c8] dark:hover:border-[#3a4f6d] dark:hover:text-[#c4d4e8]",
};

const CATEGORY_META: Record<
  BlogCategory,
  { labelKey: "dev" | "devops" | "security"; icon: typeof Code2; chipClass: string; dotClass: string }
> = {
  dev: {
    labelKey: "dev",
    icon: Code2,
    chipClass: "border-[#d9cbae] bg-[#f2ebdd] text-[#7a5c3c] dark:border-[#3a4f6d] dark:bg-[#16223a] dark:text-[#cbbfa0]",
    dotClass: "bg-[#8a6d4a] dark:bg-[#cbbfa0]",
  },
  devops: {
    labelKey: "devops",
    icon: Workflow,
    chipClass: "border-[#d5d2b8] bg-[#f1f0e3] text-[#6f6a3d] dark:border-[#3f4a3c] dark:bg-[#161f1a] dark:text-[#c3cba0]",
    dotClass: "bg-[#868033] dark:bg-[#b9c48a]",
  },
  security: {
    labelKey: "security",
    icon: ShieldCheck,
    chipClass: "border-[#d5d2cc] bg-[#eeeae3] text-[#5b5f66] dark:border-[#37424f] dark:bg-[#131a24] dark:text-[#9fb0c2]",
    dotClass: "bg-[#6b6f76] dark:bg-[#9fb0c2]",
  },
};

const FILTERS: Filter[] = ["all", "dev", "devops", "security"];
const PAGE_SIZE = 3;

export default function Blog() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const posts = blog[lang].items;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (filter !== "all" && p.category !== filter) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [posts, filter, query]);

  useEffect(() => {
    setPage(1);
  }, [filter, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const pagePosts = useMemo(
    () => filtered.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE),
    [filtered, clampedPage]
  );

  return (
    <section className={`ui-section ${THEME_CLASSES.section}`}>
      <div className="ui-shell">
        <div className="ui-header">
          <p className={`ui-label ${THEME_CLASSES.label}`}>{t.blog.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.blog.title}</h2>
          <p className="ui-intro">{t.blog.intro}</p>
        </div>

        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-[300px]">
            <Search
              size={16}
              className="pointer-events-none absolute start-3.5 top-1/2 -translate-y-1/2 text-[#a39a88] dark:text-[#5f7089]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.blog.searchPlaceholder}
              aria-label={t.blog.search}
              className="w-full rounded-full border border-[#ddd2c0] bg-white py-2.5 pe-10 ps-10 text-[0.92rem] text-ink outline-none transition placeholder:text-soft hover:border-[#c5b293] focus:border-[#8a6d4a] dark:border-[#283850] dark:bg-[#0c1220] dark:placeholder:text-[#5f7089] dark:hover:border-[#3a4f6d] dark:focus:border-[#a9c0de]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t.blog.search}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-[#a39a88] transition hover:text-[#6b5033] dark:text-[#5f7089] dark:hover:text-[#c4d4e8]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              const label = f === "all" ? t.blog.all : t.blog[f];
              const count = f === "all" ? posts.length : posts.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f === filter ? "all" : f)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.84rem] font-semibold transition ${
                    isActive ? `${THEME_CLASSES.chipActive} ${THEME_CLASSES.shadowActive}` : THEME_CLASSES.chipIdle
                  }`}
                >
                  {!isActive && (
                    <span
                      className={`size-2 rounded-full ${f !== "all" ? CATEGORY_META[f].dotClass : "bg-[#c3b8a2] dark:bg-[#49607c]"}`}
                      aria-hidden="true"
                    />
                  )}
                  {label}
                  <span className={`text-[0.7rem] font-bold ${isActive ? "text-white/80" : "text-[#a39a88] dark:text-[#5f7089]"}`}>
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {pagePosts.length === 0 ? (
          <div className="rounded-[16px] border border-dashed border-[#d3c7ae] bg-white/60 px-6 py-16 text-center dark:border-[#2c3d57] dark:bg-[#0c1220]/60">
            <p className="text-[0.96rem] font-medium text-muted">{t.blog.noResults}</p>
          </div>
        ) : (
          <div className="grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post, index) => {
              const meta = CATEGORY_META[post.category];
              const Icon = meta.icon;
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`reveal group flex flex-col gap-4 rounded-[16px] border p-[24px] shadow-[0_2px_10px_rgba(120,105,80,0.06)] transition hover:-translate-y-1 ${THEME_CLASSES.card} ${THEME_CLASSES.cardHover}`}
                  style={{ transitionDelay: `${(index % 3) * 60}ms` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${meta.chipClass}`}
                    >
                      <Icon size={13} />
                      {t.blog[meta.labelKey]}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.76rem] font-medium text-[#9b917f] dark:text-[#5f7089]">
                      <CalendarDays size={13} />
                      {post.date}
                    </span>
                  </div>

                  <h3 className={`text-[1.14rem] leading-snug text-ink transition ${THEME_CLASSES.accentText} ${THEME_CLASSES.accentHover}`}>
                    {post.title}
                  </h3>

                  <p className="text-[0.92rem] leading-relaxed text-muted">{post.excerpt}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="ui-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-dashed border-[#e3dbcc] pt-4 dark:border-[#1f2c42]">
                    <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#9b917f] dark:text-[#5f7089]">
                      <Clock3 size={13} />
                      {post.readTime}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold opacity-70 transition group-hover:gap-2.5 group-hover:opacity-100"
                      style={{ color: ACCENT.light }}
                    >
                      <span className="hidden sm:inline">{t.blog.readMore}</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label={t.blog.title}>
            <button
              type="button"
              onClick={() => setPage(Math.max(1, clampedPage - 1))}
              disabled={clampedPage <= 1}
              aria-label={t.blog.prev}
              className={`inline-flex size-10 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-35 ${THEME_CLASSES.pageIdle}`}
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
              <button
                key={pg}
                type="button"
                onClick={() => setPage(pg)}
                aria-current={pg === clampedPage ? "page" : undefined}
                className={`inline-flex size-10 items-center justify-center rounded-full border text-[0.86rem] font-bold transition ${
                  pg === clampedPage ? THEME_CLASSES.pageActive : THEME_CLASSES.pageIdle
                }`}
              >
                {pg}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, clampedPage + 1))}
              disabled={clampedPage >= totalPages}
              aria-label={t.blog.next}
              className={`inline-flex size-10 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-35 ${THEME_CLASSES.pageIdle}`}
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </nav>
        )}

        <div className="mt-14 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#ddd2c0] bg-white px-6 py-3 text-[0.94rem] font-semibold text-ink transition hover:border-[#c5b293] hover:text-[#6b5033] dark:border-[#283850] dark:bg-[#0c1220] dark:hover:border-[#3a4f6d] dark:hover:text-[#c4d4e8]"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            {t.blog.back}
          </Link>
        </div>
      </div>
    </section>
  );
}
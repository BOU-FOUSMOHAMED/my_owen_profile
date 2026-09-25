import { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, Code2, Copy, ShieldCheck, Workflow } from "lucide-react";
import { blog } from "../data/blog";
import { useLanguage } from "../context/LanguageContext";
import type { BlogBlock, BlogCategory } from "../data/types";

const SECTION_BG = "bg-[#f7f5f0] dark:bg-[#080c15]";

const CATEGORY_CHIP: Record<BlogCategory, string> = {
  dev: "border-[#d9cbae] bg-[#f2ebdd] text-[#7a5c3c] dark:border-[#3a4f6d] dark:bg-[#16223a] dark:text-[#cbbfa0]",
  devops:
    "border-[#d5d2b8] bg-[#f1f0e3] text-[#6f6a3d] dark:border-[#3f4a3c] dark:bg-[#161f1a] dark:text-[#c3cba0]",
  security:
    "border-[#d5d2cc] bg-[#eeeae3] text-[#5b5f66] dark:border-[#37424f] dark:bg-[#131a24] dark:text-[#9fb0c2]",
};

const CATEGORY_ICON = {
  dev: Code2,
  devops: Workflow,
  security: ShieldCheck,
} as const;

function CopyButton({ lines }: { lines: string[] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "copié" : "copier"}
      className="grid size-6 place-items-center rounded-md text-[#e6e2d8]/60 ring-offset-0 transition hover:bg-white/10 hover:text-[#e6e2d8] dark:text-[#9fb0c4] dark:hover:text-[#c6d6ea]"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  return (
    <div className="grid gap-5">
      {block.flow && block.flow.length > 0 && (
        <div className="rounded-[16px] border border-[#ddd2c0] bg-white p-5 shadow-[0_2px_10px_rgba(120,105,80,0.05)] dark:border-[#283850] dark:bg-[#0c1220]">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#8a6d4a] dark:text-[#a9c0de]">
            schéma
          </p>
          <ol className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            {block.flow.map((step, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <ArrowRight
                    size={15}
                    className="mx-1 hidden shrink-0 rotate-90 self-center text-[#b3a68a] sm:block sm:rotate-0 dark:text-[#5f7089]"
                    aria-hidden="true"
                  />
                )}
                <li className="flex w-full items-center gap-3 rounded-xl border border-[#e3dbcc] bg-[#f7f5f0] px-3.5 py-2.5 sm:w-auto dark:border-[#1f2c42] dark:bg-[#101a2a]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-grad text-[0.72rem] font-bold text-white shadow-[var(--btn-glow-sm)]">
                    {i + 1}
                  </span>
                  <span className="text-[0.85rem] font-semibold text-ink">{step.label}</span>
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      )}

      {block.code && block.code.length > 0 && (
        <div className="overflow-hidden rounded-[16px] border border-[#e3dbcc] shadow-[0_2px_10px_rgba(120,105,80,0.05)] dark:border-[#1f2c42]">
          <div className="flex items-center justify-between gap-3 bg-[#241f17] px-4 py-2.5 dark:bg-[#0a1020]">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </span>
              {block.codeLang && (
                <span className="ms-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#e6e2d8]/70 dark:text-[#9fb0c4]">
                  {block.codeLang}
                </span>
              )}
            </div>
            <CopyButton lines={block.code} />
          </div>
          <pre className="overflow-x-auto bg-white px-5 py-4 font-mono text-[0.82rem] leading-[1.7] dark:bg-[#0c1220]">
            {block.code.map((line, i) => (
              <div
                key={i}
                className={
                  line.trim().startsWith("#") || line.trim().startsWith("//")
                    ? "text-[#9b917f] dark:text-[#6b7a92]"
                    : "text-ink"
                }
              >
                {line || "\u00A0"}
              </div>
            ))}
          </pre>
        </div>
      )}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();

  const posts = blog[lang].items;
  const index = posts.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? posts[index] : null;

  if (!post) {
    return (
      <section className={`ui-section ${SECTION_BG}`}>
        <div className="ui-shell">
          <div className="mx-auto max-w-2xl rounded-[16px] border border-dashed border-[#d3c7ae] bg-white/60 px-6 py-20 text-center dark:border-[#2c3d57] dark:bg-[#0c1220]/60">
            <p className="text-[1.05rem] font-semibold text-ink">{t.blog.noResults}</p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#ddd2c0] bg-white px-6 py-3 text-[0.94rem] font-semibold text-ink transition hover:border-[#c5b293] hover:text-[#6b5033] dark:border-[#283850] dark:bg-[#0c1220] dark:hover:border-[#3a4f6d] dark:hover:text-[#c4d4e8]"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              {t.blog.label}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const Icon = CATEGORY_ICON[post.category];
  const next = index + 1 < posts.length ? posts[index + 1] : null;
  const prev = index > 0 ? posts[index - 1] : null;

  return (
    <section className={`ui-section ${SECTION_BG}`}>
      <div className="ui-shell">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[#7a5c3c] transition hover:text-[#6b5033] dark:text-[#a9c0de] dark:hover:text-[#c4d4e8]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t.blog.label}
          </Link>

          <header className="mt-8 border-b border-dashed border-[#d9cdb4] pb-8 dark:border-[#26364d]">
            <div className="flex flex-wrap items-center gap-3 text-[0.78rem] font-medium text-[#9b917f] dark:text-[#5f7089]">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${CATEGORY_CHIP[post.category]}`}>
                <Icon size={13} />
                {t.blog[post.category]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} />
                {t.blog.publishedOn} {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={13} />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(1.75rem,4.2vw,2.7rem)] leading-tight text-ink">{post.title}</h1>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{post.excerpt}</p>
          </header>

          <div className="mt-9 flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <Fragment key={i}>
                <p className="text-[0.99rem] leading-[1.85] text-ink/85 dark:text-[#c3cdda]">
                  {paragraph}
                </p>
                {post.blocks && post.blocks[i] && <BlogBlockView block={post.blocks[i]} />}
              </Fragment>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="ui-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-dashed border-[#d9cdb4] pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-[#26364d]">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="group flex max-w-[45%] flex-col gap-1"
              >
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#9b917f] dark:text-[#5f7089]">
                  ← {t.blog.prev}
                </span>
                <span className="truncate text-[0.92rem] font-semibold text-ink transition group-hover:text-[#6b5033] dark:group-hover:text-[#c4d4e8]">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="group flex max-w-[45%] flex-col items-end gap-1 text-end"
              >
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#9b917f] dark:text-[#5f7089]">
                  {t.blog.next} →
                </span>
                <span className="truncate text-[0.92rem] font-semibold text-ink transition group-hover:text-[#6b5033] dark:group-hover:text-[#c4d4e8]">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
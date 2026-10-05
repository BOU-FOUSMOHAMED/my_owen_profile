import { useLanguage } from "../context/LanguageContext";
import { specialites } from "../data/specialites";
import { Server, Monitor, Database, Container, Brain, Network } from "lucide-react";

const CATEGORY_ICONS = [Server, Monitor, Database, Container, Brain, Network];

/**
 * Bento layout: two wide cards, a row of three compact ones, then a full-width
 * strip. Each category keeps its own hue so the section is scannable at a glance.
 */
const CATEGORY_STYLE = [
  {
    span: "lg:col-span-3",
    grad: "from-[#6366f1] to-[#8b5cf6]",
    lift: "hover:shadow-[0_0_0_1px_rgba(99,102,241,0.3),0_20px_50px_-18px_rgba(99,102,241,0.55)]",
    number: "text-[#6366f1] dark:text-[#818cf8]",
    pill: "hover:border-[#6366f1]/50 hover:text-[#4338ca] dark:hover:border-[#818cf8]/50 dark:hover:text-[#c7d2fe]",
  },
  {
    span: "lg:col-span-3",
    grad: "from-[#0ea5e9] to-[#22d3ee]",
    lift: "hover:shadow-[0_0_0_1px_rgba(14,165,233,0.3),0_20px_50px_-18px_rgba(14,165,233,0.55)]",
    number: "text-[#0284c7] dark:text-[#38bdf8]",
    pill: "hover:border-[#0ea5e9]/50 hover:text-[#0369a1] dark:hover:border-[#38bdf8]/50 dark:hover:text-[#bae6fd]",
  },
  {
    span: "lg:col-span-2",
    grad: "from-[#10b981] to-[#34d399]",
    lift: "hover:shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_20px_50px_-18px_rgba(16,185,129,0.55)]",
    number: "text-[#059669] dark:text-[#34d399]",
    pill: "hover:border-[#10b981]/50 hover:text-[#065f46] dark:hover:border-[#34d399]/50 dark:hover:text-[#a7f3d0]",
  },
  {
    span: "lg:col-span-2",
    grad: "from-[#f59e0b] to-[#fbbf24]",
    lift: "hover:shadow-[0_0_0_1px_rgba(245,158,11,0.3),0_20px_50px_-18px_rgba(245,158,11,0.55)]",
    number: "text-[#b45309] dark:text-[#fbbf24]",
    pill: "hover:border-[#f59e0b]/50 hover:text-[#92400e] dark:hover:border-[#fbbf24]/50 dark:hover:text-[#fde68a]",
  },
  {
    span: "lg:col-span-2",
    grad: "from-[#ec4899] to-[#f472b6]",
    lift: "hover:shadow-[0_0_0_1px_rgba(236,72,153,0.3),0_20px_50px_-18px_rgba(236,72,153,0.55)]",
    number: "text-[#be185d] dark:text-[#f472b6]",
    pill: "hover:border-[#ec4899]/50 hover:text-[#9d174d] dark:hover:border-[#f472b6]/50 dark:hover:text-[#fbcfe8]",
  },
  {
    // Full-width strip: description on one side, stack on the other.
    span: "lg:col-span-6",
    grad: "from-[#0f766e] to-[#14b8a6]",
    lift: "hover:shadow-[0_0_0_1px_rgba(20,184,166,0.3),0_20px_50px_-18px_rgba(20,184,166,0.55)]",
    number: "text-[#0f766e] dark:text-[#2dd4bf]",
    pill: "hover:border-[#14b8a6]/50 hover:text-[#115e59] dark:hover:border-[#2dd4bf]/50 dark:hover:text-[#99f6e4]",
  },
] as const;

export default function Skills() {
  const { t, lang } = useLanguage();
  const categories = specialites[lang].categories;

  return (
    <section className="ui-section" id="skills">
      <div className="ui-shell">
        <div className="ui-heading">
          <p className="ui-label ui-label--dot">{t.skills.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.skills.title}</h2>
          <p className="ui-intro">{t.skills.intro}</p>
        </div>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
            const style = CATEGORY_STYLE[index % CATEGORY_STYLE.length];
            const isStrip = style.span === "lg:col-span-6";

            return (
              <article
                key={category.title}
                className={`reveal group relative flex flex-col overflow-hidden rounded-[20px] border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 ${style.span} ${style.lift}`}
              >
                {/* Accent hairline, revealed on hover. */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right ${style.grad}`}
                />

                <div
                  className={
                    isStrip
                      ? "flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10"
                      : "flex flex-col"
                  }
                >
                  <div className={isStrip ? "lg:w-[38%] lg:shrink-0" : ""}>
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid size-12 shrink-0 place-items-center rounded-[14px] bg-gradient-to-br text-white shadow-[0_10px_24px_-10px_rgba(15,23,42,0.55)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${style.grad}`}
                      >
                        <Icon size={22} strokeWidth={2} aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-display text-[1.15rem] font-bold leading-tight tracking-[-0.01em] text-ink">
                          {category.title}
                        </h3>
                        <span
                          className={`font-mono text-[0.72rem] font-bold tracking-[0.08em] ${style.number}`}
                        >
                          {String(category.skills.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-[0.92rem] leading-[1.7] text-muted">
                      {category.description}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-2 ${
                      isStrip ? "lg:flex-1 lg:justify-end" : "mt-5"
                    }`}
                  >
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className={`rounded-[10px] border border-line bg-surface-soft px-3 py-[7px] font-mono text-[0.78rem] font-medium leading-none text-ink transition duration-200 hover:-translate-y-0.5 hover:shadow-card ${style.pill}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
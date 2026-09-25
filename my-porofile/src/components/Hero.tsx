import { useLanguage } from "../context/LanguageContext";
import type { ComponentType, CSSProperties } from "react";
import {
  Bug,
  ChevronDown,
  ShieldCheck,
  Terminal,
  Server,
  LayoutDashboard,
  Container,
  Database,
  Brain,
} from "lucide-react";
import {
  SiOpenjdk,
  SiReact,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiGithub,
  SiJenkins,
} from "react-icons/si";

const FOCUS_ICONS: ComponentType<{ size?: number | string; strokeWidth?: number }>[] = [
  ShieldCheck,
  Server,
  LayoutDashboard,
  Container,
  Database,
  Brain,
  Bug,
];

type TechIconType = ComponentType<{ size?: number | string; style?: CSSProperties; className?: string }>;

interface FloatChip {
  Icon: TechIconType;
  color: string;
  position: string;
  iconSize: number;
  delay: number;
  duration: number;
  tilt: number;
}

const FLOAT_CHIPS: FloatChip[] = [
  { Icon: SiSpringboot, color: "#6DB33F", position: "right-[4%] top-[15%]", iconSize: 26, delay: 0, duration: 4.6, tilt: 8 },
  { Icon: SiReact, color: "#61DAFB", position: "right-[8%] bottom-[14%]", iconSize: 26, delay: -1.3, duration: 4.9, tilt: -8 },
  { Icon: SiOpenjdk, color: "#ED8B00", position: "left-[4%] top-[18%] hidden sm:grid", iconSize: 27, delay: -0.7, duration: 5.2, tilt: 6 },
  { Icon: SiDocker, color: "#2496ED", position: "left-[8%] bottom-[24%] hidden md:grid", iconSize: 25, delay: -2, duration: 5.5, tilt: -6 },
  { Icon: SiKubernetes, color: "#326CE5", position: "right-[5%] bottom-[42%] hidden lg:grid", iconSize: 24, delay: -2.8, duration: 4.2, tilt: 10 },
  { Icon: SiTypescript, color: "#3178C6", position: "right-[10%] top-[46%] hidden xl:grid", iconSize: 24, delay: -1.6, duration: 4.4, tilt: -10 },
  { Icon: SiGithub, color: "#181717", position: "left-[12%] top-[46%] hidden xl:grid", iconSize: 24, delay: -3.1, duration: 5.8, tilt: 5 },
  { Icon: SiJenkins, color: "#D24939", position: "left-[16%] bottom-[12%] hidden 2xl:grid", iconSize: 23, delay: -0.4, duration: 5.1, tilt: -5 },
];

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t.hero.stats.years, label: t.hero.stats.yearsLabel },
    { value: t.hero.stats.projects, label: t.hero.stats.projectsLabel },
    { value: t.hero.stats.certs, label: t.hero.stats.certsLabel },
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden" id="home">
      <div className="absolute inset-0 bg-grad opacity-[0.05]" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-fusion bg-[radial-gradient(60%_60%_at_12%_10%,rgba(122,92,60,0.14),transparent_60%),radial-gradient(50%_50%_at_90%_88%,rgba(161,132,92,0.1),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="hero-code-grid absolute inset-0 opacity-20" aria-hidden="true" />

      <span
        className="pointer-events-none absolute left-5 top-6 hidden select-none font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none text-[var(--border-strong)] opacity-25 lg:block"
        aria-hidden="true"
      >
        [
      </span>
      <span
        className="pointer-events-none absolute right-5 top-6 hidden select-none font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none text-[var(--border-strong)] opacity-25 lg:block"
        aria-hidden="true"
      >
        ]
      </span>
      <span
        className="pointer-events-none absolute bottom-6 left-5 hidden select-none font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none text-[var(--border-strong)] opacity-25 lg:block"
        aria-hidden="true"
      >
        ]
      </span>
      <span
        className="pointer-events-none absolute bottom-6 right-5 hidden select-none font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none text-[var(--border-strong)] opacity-25 lg:block"
        aria-hidden="true"
      >
        [
      </span>

      <div
        className="pointer-events-none absolute right-10 top-7 hidden items-center gap-2.5 rounded-lg border border-line bg-card/60 px-3 py-2 font-mono text-[11px] text-soft shadow-sm backdrop-blur-[4px] lg:flex"
        aria-hidden="true"
      >
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
        </span>
        <span className="ms-2">~/secure-deploy</span>
        <span className="animate-pulse text-accent">▍</span>
      </div>

      <div
        className="pointer-events-none absolute left-9 top-1/2 hidden -translate-y-1/2 flex-col gap-3 font-mono text-[10.5px] leading-relaxed text-soft/60 lg:flex"
        aria-hidden="true"
      >
        <span>const secure = true;</span>
        <span>
          api.get(<em className="italic text-accent">"/health"</em>) // 200
        </span>
        <span>deploy --prod · verify</span>
      </div>

      <p
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted/40 [writing-mode:vertical-rl] xl:block"
        aria-hidden="true"
      >
        secure · scalable · ai-ready
      </p>

      <div
        className="pointer-events-none absolute bottom-24 left-9 hidden items-center gap-2 font-mono text-[11px] text-muted/50 md:flex"
        aria-hidden="true"
      >
        <ShieldCheck size={13} className="text-accent/70" />
        all checks passed
      </div>
      <div
        className="pointer-events-none absolute bottom-24 right-9 hidden items-center gap-2 font-mono text-[11px] text-muted/50 md:flex"
        aria-hidden="true"
      >
        <Terminal size={13} className="text-accent/70" />
        uptime 99.9%
      </div>

      <div className="absolute inset-0" aria-hidden="true">
        {FLOAT_CHIPS.map(({ Icon, color, position, iconSize, delay, duration, tilt }) => (
          <div key={position} className={`pointer-events-none absolute z-[1] opacity-[0.3] md:opacity-35 ${position}`}>
            <span className="block" style={{ transform: `rotate(${tilt}deg)` }}>
              <span
                className="grid size-[46px] animate-float-up place-items-center rounded-2xl border border-line bg-card/75 shadow-card backdrop-blur-sm md:size-[52px]"
                style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
              >
                <Icon size={iconSize} style={{ color }} />
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-7 max-sm:px-[18px]">
        <div className="flex items-center justify-center gap-5 pt-14 max-sm:pt-10">
          <span
            className="hidden h-px flex-1 bg-[linear-gradient(to_right,transparent,var(--border-strong))] sm:block"
            aria-hidden="true"
          />
          <p className="ui-label justify-center rounded-full border border-badge-line bg-grad px-[20px] py-2.5 text-center text-white shadow-[var(--btn-glow)]">
            {t.hero.eyebrow}
          </p>
          <span
            className="hidden h-px flex-1 bg-[linear-gradient(to_left,transparent,var(--border-strong))] sm:block"
            aria-hidden="true"
          />
        </div>

        <div className="grid items-center gap-[46px] py-[80px] max-sm:py-[56px] lg:grid-cols-[1fr_0.95fr]">
          <div className="grid justify-items-center gap-[26px] text-center lg:justify-items-start lg:text-start">
            <h1 className="font-display font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-[clamp(2.9rem,9.5vw,6.5rem)]">
            <span className="block">{t.hero.titleStart}</span>
            <em className="not-italic">
              <span className="text-grad block">{t.hero.titleHighlight}</span>
            </em>
          </h1>

          <p className="font-mono text-[clamp(0.8rem,2vw,1.05rem)] tracking-[0.08em] text-muted">
            {t.hero.subtitle}
          </p>

          <p className="mt-1 max-w-[600px] text-[1.08rem] leading-relaxed text-ink/90">
            {t.hero.description}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3.5 lg:justify-start">
            <a className="ui-btn ui-btn--primary" href="#projects">
              {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
            </a>
            <a className="ui-btn ui-btn--quiet" href="#contact">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-6 flex w-full max-w-[560px] flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-line pt-7 lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="grid justify-items-center gap-1.5">
                <strong className="text-grad font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.03em]">
                  {stat.value}
                </strong>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside
          className="rounded-card border border-line bg-card p-7 shadow-card transition hover:-translate-y-1.5 hover:shadow-glow"
          aria-label={t.hero.cardEyebrow}
        >
          <p className="ui-label">{t.hero.cardEyebrow}</p>
          <dl className="mt-4 grid gap-3.5">
            {t.hero.focus.map((item, index) => {
              const Icon = FOCUS_ICONS[index % FOCUS_ICONS.length];
              return (
                <div key={item.term} className="flex items-start gap-3">
                  <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-badge text-accent">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <div className="grid gap-0.5">
                    <dt className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent">
                      {item.term}
                    </dt>
                    <dd className="text-[0.94rem] leading-snug text-muted">{item.detail}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
          <p className="mt-5 border-t border-dashed border-line pt-4 font-mono text-[0.8rem] leading-relaxed text-muted">
            <span className="font-semibold text-accent">React</span> — {t.hero.cardNote}
          </p>
        </aside>
        </div>
      </div>

      <a
        className="absolute bottom-9 left-1/2 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:border-accent hover:text-accent max-sm:bottom-7"
        href="#about"
        aria-label={t.nav.about}
      >
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
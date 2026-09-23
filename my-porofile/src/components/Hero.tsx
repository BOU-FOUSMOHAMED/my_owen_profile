import { useLanguage } from "../context/LanguageContext";
import type { ComponentType, CSSProperties } from "react";
import {
  ShieldCheck,
  Server,
  LayoutDashboard,
  Container,
  Database,
  Brain,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  SiApachekafka,
  SiRabbitmq,
  SiDocker,
  SiKubernetes,
  SiOpenjdk,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiJira,
  SiPython,
} from "react-icons/si";

const FOCUS_ICONS = [ShieldCheck, Server, LayoutDashboard, Container, Database, Brain];

type FloatIconComponent = ComponentType<{
  size?: number | string;
  style?: CSSProperties;
  className?: string;
}>;

interface FloatTech {
  Icon: FloatIconComponent;
  color: string;
  left: number;
  dur: number;
  delay: number;
  size: number;
  alpha: number;
}

const FLOAT_TECHS: FloatTech[] = [
  { Icon: SiDocker, color: "#2496ED", left: 6, dur: 22, delay: 0, size: 26, alpha: 0.55 },
  { Icon: SiKubernetes, color: "#326CE5", left: 16, dur: 26, delay: 6, size: 30, alpha: 0.5 },
  { Icon: SiRabbitmq, color: "#FF6600", left: 26, dur: 28, delay: 11, size: 26, alpha: 0.5 },
  { Icon: SiApachekafka, color: "#B3B3B3", left: 35, dur: 20, delay: 3, size: 28, alpha: 0.5 },
  { Icon: Sparkles, color: "#60a5fa", left: 44, dur: 17, delay: 20, size: 28, alpha: 0.55 },
  { Icon: SiOpenjdk, color: "#ED8B00", left: 53, dur: 24, delay: 9, size: 28, alpha: 0.5 },
  { Icon: SiSpringboot, color: "#6DB33F", left: 61, dur: 19, delay: 14, size: 26, alpha: 0.55 },
  { Icon: SiGit, color: "#F05032", left: 70, dur: 23, delay: 5, size: 26, alpha: 0.5 },
  { Icon: SiGithub, color: "#94a3b8", left: 77, dur: 25, delay: 17, size: 28, alpha: 0.5 },
  { Icon: SiJira, color: "#0052CC", left: 84, dur: 18, delay: 12, size: 26, alpha: 0.5 },
  { Icon: SiPython, color: "#FFD43B", left: 91, dur: 21, delay: 2, size: 28, alpha: 0.5 },
];

const CODE_TONES = [
  "text-transparent [-webkit-text-stroke:1px_var(--border-strong)]",
  "text-transparent [-webkit-text-stroke:1px_var(--accent)]",
  "text-soft",
];

const CODE_MOTIFS = [
  { label: "</>", left: 3, dur: 16, delay: 0, size: 2.4, rot: -8, alpha: 0.5, tone: 1 },
  { label: "{ }", left: 12, dur: 21, delay: 5, size: 1.8, rot: 6, alpha: 0.45, tone: 0 },
  { label: "import", left: 21, dur: 18, delay: 9, size: 1.5, rot: 0, alpha: 0.4, tone: 2 },
  { label: "0/1", left: 33, dur: 24, delay: 2, size: 1.9, rot: -12, alpha: 0.4, tone: 0 },
  { label: "const", left: 45, dur: 15, delay: 12, size: 1.7, rot: 4, alpha: 0.5, tone: 0 },
  { label: "=>", left: 55, dur: 19, delay: 6, size: 2.1, rot: -6, alpha: 0.5, tone: 1 },
  { label: "fn(", left: 64, dur: 22, delay: 14, size: 1.8, rot: 0, alpha: 0.45, tone: 0 },
  { label: "API", left: 88, dur: 14, delay: 10, size: 1.7, rot: 5, alpha: 0.5, tone: 0 },
  { label: "<div>", left: 40, dur: 20, delay: 20, size: 1.5, rot: -6, alpha: 0.35, tone: 0 },
  { label: "JWT", left: 6, dur: 25, delay: 16, size: 1.5, rot: -4, alpha: 0.35, tone: 0 },
  { label: "</>", left: 58, dur: 26, delay: 18, size: 1.5, rot: 0, alpha: 0.35, tone: 1 },
  { label: "#", left: 92, dur: 18, delay: 22, size: 1.9, rot: 10, alpha: 0.4, tone: 2 },
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
      <div className="absolute inset-0 bg-grad opacity-[0.06]" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-fusion bg-[radial-gradient(60%_60%_at_12%_10%,rgba(37,99,235,0.16),transparent_60%),radial-gradient(50%_50%_at_90%_88%,rgba(96,165,250,0.12),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="hero-code-grid absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {CODE_MOTIFS.map(({ label, left, dur, delay, size, rot, alpha, tone }, index) => (
          <span
            key={index}
            className={`animate-code-float absolute top-full select-none whitespace-nowrap font-display font-extrabold leading-none ${CODE_TONES[tone]}`}
            style={
              {
                left: `${left}%`,
                fontSize: `${size}rem`,
                "--rot": `${rot}deg`,
                "--alpha": alpha,
                animationDuration: `${dur}s`,
                animationDelay: `-${delay}s`,
              } as CSSProperties
            }
          >
            {label}
          </span>
        ))}
        {FLOAT_TECHS.map(({ Icon, color, left, dur, delay, size, alpha }, index) => (
          <span
            key={`tech-${index}`}
            className="animate-code-float absolute top-full grid size-14 select-none place-items-center rounded-2xl border border-line bg-card/70 shadow-card backdrop-blur-[4px]"
            style={
              {
                left: `${left}%`,
                "--rot": `${(index % 2 === 0 ? -6 : 6) + index * 2}deg`,
                "--alpha": alpha,
                animationDuration: `${dur}s`,
                animationDelay: `-${delay}s`,
              } as CSSProperties
            }
          >
            <Icon size={size} style={{ color }} />
          </span>
        ))}
      </div>

      <div className="ui-shell relative z-[2] grid items-center gap-16 py-[92px] md:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal max-w-[640px]">
          <p className="ui-label w-fit rounded-full border border-badge-line bg-grad px-[18px] py-2.5 text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)]">
            {t.hero.eyebrow}
          </p>
          <h1 className="mb-5 mt-[18px] text-[clamp(2.5rem,6.4vw,4.4rem)]">
            {t.hero.titleStart} <em className="text-grad not-italic">{t.hero.titleHighlight}</em>
            {t.hero.titleEnd}
          </h1>
          <p className="ui-lede mt-1.5">{t.hero.description}</p>
          <div className="mt-[38px] flex flex-wrap gap-3.5">
            <a className="ui-btn ui-btn--primary" href="#projects">
              {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
            </a>
            <a className="ui-btn ui-btn--quiet" href="#contact">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-12 flex max-w-[560px] flex-wrap gap-x-10 gap-y-7 border-t border-dashed border-line pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="grid gap-1.5">
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
          className="reveal rounded-card border border-line bg-card p-9 shadow-card transition hover:-translate-y-1.5 hover:shadow-glow md:min-h-[560px]"
          aria-label={t.hero.cardEyebrow}
        >
          <p className="ui-label">{t.hero.cardEyebrow}</p>
          <dl className="mt-4 grid gap-4">
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
                    <dd className="text-[0.94rem] text-muted">{item.detail}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </aside>
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
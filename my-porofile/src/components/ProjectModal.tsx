import { Fragment, useEffect, useState, type ComponentType } from "react";
import type { ProjectItem, ProjectPhaseIcon } from "../data/types";
import {
  Monitor,
  ShieldCheck,
  Brain,
  Database,
  Cloud,
  Bot,
  CreditCard,
  Layers,
  Zap,
  BookOpen,
  Server,
  X,
  Check,
  Crosshair,
  Wrench,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  GitBranch,
  ExternalLink,
  Map as MapIcon,
} from "lucide-react";

type IconType = ComponentType<{ size?: number | string; strokeWidth?: number | string }>;

const PHASE_ICONS: Record<ProjectPhaseIcon, IconType> = {
  monitor: Monitor,
  api: Server,
  shield: ShieldCheck,
  brain: Brain,
  database: Database,
  cloud: Cloud,
  bot: Bot,
  card: CreditCard,
  layers: Layers,
  zap: Zap,
  book: BookOpen,
};

type PhaseShape = {
  icon: ProjectPhaseIcon;
  tag: string;
  title: string;
  how: string;
  problems: string[];
  solutions: string[];
  tech: string[];
};

interface ProjectModalProps {
  project: ProjectItem;
  index: number;
  phases: PhaseShape[];
  t: {
    stepLabel: string;
    mapHead: string;
    detailHead: string;
    howHead: string;
    problemsHead: string;
    solutionsHead: string;
    prev: string;
    next: string;
    close: string;
    links: { code: string; demo: string };
  };
  onClose: () => void;
}

export default function ProjectModal({ project, index, phases, t, onClose }: ProjectModalProps) {
  const [current, setCurrent] = useState(0);
  const currentPhase = phases[current];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrent((c) => Math.min(c + 1, phases.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrent((c) => Math.max(c - 1, 0));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, phases.length]);

  useEffect(() => {
    setCurrent((c) => Math.min(c, phases.length - 1));
  }, [phases.length]);

  const chipClass = (done: boolean, active: boolean) =>
    [
      "inline-flex items-center gap-2 rounded-full border-2 px-3 py-1.5 transition-all duration-300",
      done
        ? "border-transparent bg-grad text-white opacity-70 shadow-[var(--btn-glow-sm)]"
        : active
          ? "scale-[1.04] border-accent bg-grad text-white shadow-[var(--btn-glow)]"
          : "border-line-strong bg-card text-soft hover:border-accent hover:text-accent",
    ].join(" ");

  const PhaseIcon: IconType | null = currentPhase
    ? (PHASE_ICONS[currentPhase.icon] ?? Layers)
    : null;

  return (
    <div
      className="fixed inset-0 z-[1100] grid place-items-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — ${t.mapHead}`}
    >
      <div
        className="animate-backdrop-in absolute inset-0 bg-[rgba(8,10,16,0.62)] backdrop-blur-[6px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="animate-modal-in relative flex max-h-[94vh] w-full max-w-[980px] flex-col overflow-hidden rounded-card border border-line-strong bg-card shadow-[var(--shadow)]">
        <header className="border-b border-line p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span
              className="grid size-[52px] shrink-0 place-items-center rounded-[14px] bg-badge font-display text-[1rem] font-extrabold text-accent"
              aria-hidden="true"
            >
              {project.featured ? "★" : String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-accent">
                {project.subtitle}
              </p>
              <h3 className="mt-0.5 text-[1.3rem]">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              title={t.close}
              autoFocus
              className="grid size-10 shrink-0 place-items-center rounded-[10px] border border-line text-soft transition hover:border-accent hover:text-accent"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="ui-chip">
                {tech}
              </span>
            ))}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={t.links.code}
                title={t.links.code}
                className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 py-2 text-[0.8rem] font-bold text-accent transition hover:border-transparent hover:bg-grad hover:text-white"
              >
                <GitBranch size={15} aria-hidden="true" />
                <span>{t.links.code}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={t.links.demo}
                title={t.links.demo}
                className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 py-2 text-[0.8rem] font-bold text-accent transition hover:border-transparent hover:bg-grad hover:text-white"
              >
                <ExternalLink size={15} aria-hidden="true" />
                <span>{t.links.demo}</span>
              </a>
            )}
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="p-5 sm:p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p className="ui-label">
                <MapIcon size={14} aria-hidden="true" />
                {t.mapHead}
              </p>
              <span className="font-display text-[0.78rem] font-bold text-soft">
                {t.stepLabel} {current + 1} / {phases.length}
              </span>
            </div>

            <div
              className="mb-5 h-1.5 overflow-hidden rounded-full bg-line"
              role="progressbar"
              aria-valuenow={current + 1}
              aria-valuemin={1}
              aria-valuemax={phases.length}
              aria-label={`${current + 1}/${phases.length}`}
            >
              <div
                className="h-full rounded-full bg-grad transition-all duration-500"
                style={{ width: `${((current + 1) / phases.length) * 100}%` }}
              />
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-y-2.5 gap-x-1">
              {phases.map((phase, i) => {
                const Icon = PHASE_ICONS[phase.icon] ?? Layers;
                const done = i < current;
                const active = i === current;
                return (
                  <Fragment key={`${phase.title}-${i}`}>
                    {i > 0 && (
                      <ChevronRight
                        size={14}
                        className="mx-0.5 shrink-0 text-soft rtl:-scale-x-100"
                        aria-hidden="true"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-current={active ? "step" : undefined}
                      className={chipClass(done, active)}
                    >
                      <span className="pointer-events-none grid size-5 shrink-0 place-items-center">
                        {done ? (
                          <Check size={12} aria-hidden="true" />
                        ) : (
                          <Icon size={13} aria-hidden="true" />
                        )}
                      </span>
                      <span className="pointer-events-none whitespace-nowrap text-[0.78rem] font-bold">
                        {String(i + 1).padStart(2, "0")} · {phase.tag}
                      </span>
                    </button>
                  </Fragment>
                );
              })}
            </div>

            {PhaseIcon && (
              <div
                key={current}
                className="animate-modal-in rounded-[18px] border border-line bg-card-hover p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-4">
                  <div className="flex items-center gap-3.5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-[13px] bg-grad text-white shadow-[var(--btn-glow-sm)]">
                      <PhaseIcon size={22} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent">
                        {currentPhase.tag}
                      </p>
                      <h4 className="mt-0.5 text-[1.12rem] leading-snug">{currentPhase.title}</h4>
                    </div>
                  </div>
                  {currentPhase.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {currentPhase.tech.map((tech) => (
                        <span key={tech} className="ui-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 grid gap-4">
                  <section className="rounded-[14px] border border-line bg-card p-4 sm:p-5">
                    <p className="mb-2 flex items-center gap-1.5 text-[0.74rem] font-bold uppercase tracking-[0.1em] text-accent">
                      <Wrench size={13} aria-hidden="true" />
                      {t.howHead}
                    </p>
                    <p className="text-[0.93rem] leading-[1.75] text-muted">{currentPhase.how}</p>
                  </section>

                  <div className="grid gap-4 md:grid-cols-2">
                    <section className="rounded-[14px] border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-4 sm:p-5">
                      <p className="mb-2.5 flex items-center gap-1.5 text-[0.74rem] font-bold uppercase tracking-[0.1em] text-[#dc2626]">
                        <Crosshair size={13} aria-hidden="true" />
                        {t.problemsHead}
                      </p>
                      <ul className="grid gap-2.5">
                        {currentPhase.problems.map((problem) => (
                          <li
                            key={problem}
                            className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-ink"
                          >
                            <Crosshair
                              size={14}
                              className="mt-0.5 shrink-0 text-[#dc2626]"
                              aria-hidden="true"
                            />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="rounded-[14px] border border-[rgba(16,185,129,0.35)] bg-[rgba(16,185,129,0.07)] p-4 sm:p-5">
                      <p className="mb-2.5 flex items-center gap-1.5 text-[0.74rem] font-bold uppercase tracking-[0.1em] text-[#059669]">
                        <Check size={13} aria-hidden="true" />
                        {t.solutionsHead}
                      </p>
                      <ul className="grid gap-2.5">
                        {currentPhase.solutions.map((solution) => (
                          <li
                            key={solution}
                            className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-ink"
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0 text-[#059669]"
                              aria-hidden="true"
                            />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-line p-4 sm:px-6">
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
            disabled={current === 0}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 py-2 text-[0.8rem] font-bold text-accent transition hover:border-transparent hover:bg-grad hover:text-white hover:shadow-[var(--btn-glow-sm)] disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft size={15} className="rtl:-scale-x-100" aria-hidden="true" />
            {t.prev}
          </button>

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {phases.map((_, i) => (
              <span
                key={i}
                className={
                  i === current
                    ? "h-1.5 w-5 rounded-full bg-grad transition-all"
                    : i < current
                      ? "h-1.5 w-2 rounded-full bg-grad opacity-40 transition-all"
                      : "h-1.5 w-2 rounded-full bg-line-strong transition-all"
                }
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrent((c) => Math.min(c + 1, phases.length - 1))}
            disabled={current === phases.length - 1}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 py-2 text-[0.8rem] font-bold text-accent transition hover:border-transparent hover:bg-grad hover:text-white hover:shadow-[var(--btn-glow-sm)] disabled:pointer-events-none disabled:opacity-40"
          >
            {t.next}
            <ArrowRight size={15} className="rtl:-scale-x-100" aria-hidden="true" />
          </button>
        </footer>
      </div>
    </div>
  );
}
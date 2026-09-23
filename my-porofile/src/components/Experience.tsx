import { Briefcase, MapPin, Calendar, Building2, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { experience } from "../data/experience";

export default function Experience() {
  const { t, lang } = useLanguage();
  const items = experience[lang].items;

  return (
    <section className="ui-section" id="experience">
      <div className="ui-shell">
        <div className="ui-header">
          <p className="ui-label ui-label--dot">{t.experience.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.experience.title}</h2>
          <div className="ui-line" />
        </div>

        <div className="timeline relative grid gap-7 before:absolute before:bottom-2.5 before:left-[23px] before:top-2.5 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-accent-light before:via-accent before:to-accent-light before:opacity-45 max-sm:before:left-4 rtl:before:left-auto rtl:before:right-[23px] max-sm:rtl:before:right-4">
          {items.map((exp, i) => (
            <article
              key={exp.role}
              className="group grid grid-cols-[46px_1fr] items-start gap-[18px] pl-3.5 max-sm:grid-cols-[36px_1fr] max-sm:gap-3 max-sm:pl-2 rtl:pl-0 max-sm:rtl:pr-2"
            >
              <div className="z-[2] grid size-[42px] place-items-center rounded-[14px] border-2 border-accent bg-card font-display text-[0.82rem] font-extrabold text-accent shadow-[0_0_0_6px_var(--badge-bg)] transition group-hover:-rotate-[4deg] group-hover:scale-[1.08] group-hover:bg-grad group-hover:text-white group-hover:shadow-glow max-sm:size-[34px] max-sm:rounded-[11px] max-sm:text-[0.74rem]">
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <div className="reveal rounded-[14px] border border-line bg-card p-[26px_28px] transition hover:-translate-y-1 hover:border-accent hover:shadow-glow max-sm:p-[18px_16px]">
                <div className="mb-3 flex items-start justify-between gap-3.5 max-sm:flex-col">
                  <div className="grid gap-2">
                    <p className="ui-chip w-fit">
                      <Calendar size={12} /> {exp.period}
                    </p>
                    <p className="flex flex-wrap items-center gap-2.5 text-[0.9rem] font-semibold text-ink">
                      <span
                        className="grid size-[34px] place-items-center rounded-[10px] bg-grad font-display text-[0.78rem] font-extrabold tracking-[0.02em] text-white"
                        aria-hidden="true"
                      >
                        {exp.company
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                      <span className="inline-flex items-center gap-1.5 [&_svg]:text-soft">
                        <Building2 size={14} /> {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-muted">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </p>
                  </div>
                  <Briefcase
                    size={20}
                    className="ms-auto shrink-0 text-accent opacity-75 transition group-hover:scale-[1.12] group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mb-2 text-[1.14rem]">{exp.role}</h4>

                <p className="text-[0.93rem] leading-relaxed text-muted">{exp.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-dashed border-line pt-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[0.76rem] font-bold uppercase tracking-[0.06em] text-soft [&_svg]:text-accent">
                    <Cpu size={13} /> {t.experience.technologiesLabel}
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="ui-chip hover:-translate-y-0.5 hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useLanguage } from "../context/LanguageContext";
import { formation } from "../data/formation";
import { certifications } from "../data/certifications";
import {
  GraduationCap,
  Calendar,
  BadgeCheck,
  Globe,
  Award,
  Sparkles,
  BookOpen,
  MapPin,
} from "lucide-react";

const COLUMN_TITLE =
  "mb-3 flex items-center gap-3 border-b-2 border-line pb-4 text-[1.06rem] font-bold";

export default function Formation() {
  const { t, lang } = useLanguage();
  const { items: education } = formation[lang];
  const { certifications: certs, languages, personalSkills } = certifications[lang];

  return (
    <section
      className="ui-section ui-section--soft relative overflow-hidden"
      id="formation"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(480px_300px_at_90%_8%,rgba(122,92,60,0.08),transparent_65%),radial-gradient(420px_260px_at_5%_95%,rgba(161,132,92,0.07),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="ui-shell relative">
        <div className="ui-heading">
          <p className="ui-label">{t.formation.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.formation.title}</h2>
        </div>

        <div className="grid gap-14">
          <div>
            <h3 className={COLUMN_TITLE}>
              <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[var(--btn-glow-sm)]">
                <GraduationCap size={18} />
              </span>
              {t.formation.educationColumn}
              <span className="h-0.5 flex-1 rounded-full bg-grad" aria-hidden="true" />
            </h3>

            <div className="relative grid gap-8 ps-11 pt-4">
              <span
                className="absolute inset-y-0 start-[13px] w-[2px] rounded-full bg-grad"
                aria-hidden="true"
              />

              {education.map((edu, i) => (
                <article key={edu.degree} className="group relative">
                  <span
                    className="absolute start-0 top-1.5 grid size-[27px] place-items-center rounded-full border border-badge-line bg-grad text-white shadow-[var(--btn-glow-sm)] transition group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <GraduationCap size={14} />
                  </span>

                  <div className="relative overflow-hidden rounded-[16px] border border-line bg-card p-[24px_26px] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:bg-grad hover:-translate-y-1 hover:border-accent hover:shadow-glow">
                    <span
                      className="absolute top-4 end-[18px] text-[1.7rem] font-display font-extrabold leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--border-strong)] transition group-hover:[-webkit-text-stroke:1px_var(--accent)]"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="ui-chip mb-3">
                      <Calendar size={12} /> {edu.period}
                    </p>
                    <h4 className="mb-2 pe-[50px] text-[1.06rem] leading-snug">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.86rem] text-muted [&_svg]:text-accent">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
                        <BookOpen size={14} />
                        {edu.school}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} />
                        {edu.location}
                      </span>
                    </div>

                    {edu.distinction && (
                      <p
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(251,191,36,0.6)] px-3 py-1.5 text-[0.78rem] font-bold text-[#1f2937] shadow-[0_4px_14px_rgba(251,191,36,0.28)]"
                        style={{ backgroundImage: "linear-gradient(135deg,#fde68a,#fbbf24)" }}
                      >
                        <Sparkles size={13} />
                        {edu.distinction}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className={COLUMN_TITLE}>
                <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[var(--btn-glow-sm)]">
                  <Award size={18} />
                </span>
                {t.formation.certsTitle}
                <span className="h-0.5 flex-1 rounded-full bg-grad" aria-hidden="true" />
              </h3>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {certs.map((cert) => (
                  <article
                    key={cert.name}
                    className="group grid grid-cols-[auto_1fr] items-center gap-3 rounded-[14px] border border-line bg-card p-4 transition hover:-translate-y-1 hover:border-accent hover:shadow-glow"
                  >
                    <span
                      className="grid size-[38px] place-items-center rounded-[11px] border border-badge-line bg-badge text-accent"
                      aria-hidden="true"
                    >
                      <BadgeCheck size={19} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-[0.92rem] leading-snug">{cert.name}</h4>
                      <p className="mt-1 inline-flex items-center gap-1 text-[0.76rem] text-muted">
                        <Award size={12} className="text-soft" aria-hidden="true" />
                        {cert.issuer}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-[18px]">
              <h3 className={COLUMN_TITLE}>
                <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[var(--btn-glow-sm)]">
                  <Globe size={18} />
                </span>
                {t.formation.languagesTitle}
                <span className="h-0.5 flex-1 rounded-full bg-grad" aria-hidden="true" />
              </h3>

              <div className="grid gap-5">
                {languages.map((language) => (
                  <article
                    key={language.name}
                    className="reveal grid grid-cols-[1fr_auto] items-center gap-x-3.5 gap-y-1.5"
                  >
                    <div className="min-w-0">
                      <h4 className="text-[0.94rem]">{language.name}</h4>
                      <span className="block text-[0.78rem] text-muted">{language.level}</span>
                    </div>
                    <p className="col-start-2 row-start-1 font-display text-[0.78rem] font-bold text-accent">
                      {language.percentage}%
                    </p>
                    <div
                      className="col-span-full h-2 overflow-hidden rounded-full border border-line bg-input"
                      role="progressbar"
                      aria-valuenow={language.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={language.name}
                    >
                      <span
                        style={{ width: `${language.percentage}%` }}
                        className="block h-full origin-left rounded-full bg-grad shadow-[0_0_10px_var(--accent-light)] animate-bar-grow rtl:origin-right"
                      />
                    </div>
                  </article>
                ))}
              </div>

              <h3 className={`${COLUMN_TITLE} mt-3`}>
                <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[var(--btn-glow-sm)]">
                  <Sparkles size={18} />
                </span>
                {t.formation.personalSkillsTitle}
                <span className="h-0.5 flex-1 rounded-full bg-grad" aria-hidden="true" />
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {personalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3.5 py-2 text-[0.82rem] font-semibold text-ink transition hover:-translate-y-[3px] hover:border-accent hover:text-accent hover:shadow-glow [&_svg]:text-accent"
                  >
                    <BadgeCheck size={13} aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
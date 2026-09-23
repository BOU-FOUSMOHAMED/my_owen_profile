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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(480px_300px_at_90%_8%,rgba(37,99,235,0.08),transparent_65%),radial-gradient(420px_260px_at_5%_95%,rgba(96,165,250,0.07),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="ui-shell relative">
        <div className="ui-heading">
          <p className="ui-label">{t.formation.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.formation.title}</h2>
        </div>

        <div className="relative grid gap-12 md:grid-cols-2">
          <div className="grid gap-[18px]">
            <h3 className={COLUMN_TITLE}>
              <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]">
                <GraduationCap size={18} />
              </span>
              {t.formation.educationColumn}
              <span className="h-0.5 flex-1 rounded-full bg-grad" aria-hidden="true" />
            </h3>

            <div className="grid gap-[18px]">
              {education.map((edu, i) => (
                <article
                  key={edu.degree}
                  className="edu-card group relative overflow-hidden rounded-[14px] border border-line bg-card p-[22px_24px_20px] transition before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-grad before:transition-transform hover:-translate-y-1 hover:border-accent hover:shadow-glow hover:before:scale-x-100 rtl:before:origin-right"
                >
                  <span
                    className="absolute top-4 end-[18px] text-[1.7rem] font-display font-extrabold leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--border-strong)] transition group-hover:-translate-y-0.5 group-hover:[-webkit-text-stroke:1px_var(--accent)]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="ui-chip mb-2.5">
                    <Calendar size={12} /> {edu.period}
                  </p>
                  <h4 className="mb-1.5 pe-[42px] text-[1.04rem]">{edu.degree}</h4>
                  <p className="flex items-center gap-2 text-[0.86rem] text-muted [&_svg]:text-soft">
                    <BookOpen size={14} />
                    <span>
                      {edu.school} — {edu.location}
                    </span>
                  </p>
                  {edu.distinction && (
                    <p
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(251,191,36,0.6)] px-3 py-1.5 text-[0.78rem] font-bold text-[#1f2937] shadow-[0_4px_14px_rgba(251,191,36,0.28)]"
                      style={{ backgroundImage: "linear-gradient(135deg,#fde68a,#fbbf24)" }}
                    >
                      <Sparkles size={13} />
                      {edu.distinction}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-[18px]">
            <h3 className={COLUMN_TITLE}>
              <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]">
                <Award size={18} />
              </span>
              {t.formation.certsTitle}
              <span className="h-0.5 flex-1 rounded-full bg-grad" aria-hidden="true" />
            </h3>

            <div className="grid gap-3.5">
              {certs.map((cert, i) => (
                <article
                  key={cert.name}
                  className="group grid grid-cols-[42px_1fr_auto] items-center gap-3.5 rounded-[14px] border border-line border-l-[3px] border-l-accent bg-card p-[18px_20px] transition hover:translate-x-1 hover:border-accent hover:shadow-glow max-sm:grid-cols-[42px_1fr] rtl:border-l rtl:border-r-[3px] rtl:border-r-accent rtl:hover:-translate-x-1"
                >
                  <span
                    className="grid size-[42px] place-items-center rounded-[12px] border border-badge-line bg-badge text-accent"
                    aria-hidden="true"
                  >
                    <BadgeCheck size={20} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[0.96rem] leading-snug">{cert.name}</h4>
                    <p className="mt-0.5 text-[0.76rem] text-muted">{cert.issuer}</p>
                  </div>
                  <span
                    className="font-display text-[0.9rem] font-extrabold text-soft opacity-70 transition group-hover:text-accent group-hover:opacity-100 max-sm:hidden"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>

            <h3 className={`${COLUMN_TITLE} mt-3`}>
              <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]">
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
              <span className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-grad text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]">
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
    </section>
  );
}
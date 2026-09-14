import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="section experience" id="experience">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.experience.label}</p>
          <h2>{t.experience.title}</h2>
          <div className="section__line" />
        </div>

        <h3 className="experience__title">
          <Briefcase size={20} /> {t.experience.columnTitle}
        </h3>
        <div className="timeline">
          {t.experience.items.map((exp) => (
            <article key={exp.role} className="timeline__item">
              <div className="timeline__point" />
              <div className="timeline__card">
                <p className="timeline__period">{exp.period}</p>
                <h4>{exp.role}</h4>
                <h5>{exp.company} — {exp.location}</h5>
                <p className="timeline__description">{exp.description}</p>
                <p className="timeline__tech">
                  <strong>{t.experience.technologiesLabel} :</strong> {exp.technologies.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
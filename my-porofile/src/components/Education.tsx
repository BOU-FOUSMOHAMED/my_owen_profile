import { GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="section education" id="formation">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.formation.label}</p>
          <h2>{t.formation.title}</h2>
          <div className="section__line" />
        </div>

        <h3 className="experience__title">
          <GraduationCap size={20} /> {t.formation.columnTitle}
        </h3>
        <div className="timeline">
          {t.formation.items.map((edu) => (
            <article key={edu.degree} className="timeline__item">
              <div className="timeline__point" />
              <div className="timeline__card">
                <p className="timeline__period">{edu.period}</p>
                <h4>{edu.degree}</h4>
                <h5>{edu.school} — {edu.location}</h5>
                {edu.distinction && (
                  <span className="timeline__distinction">{edu.distinction}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
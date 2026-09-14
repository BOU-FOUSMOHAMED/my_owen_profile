import { experiences } from "../data/experience";
import { education } from "../data/education";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Mon évolution professionnelle</p>
          <h2>Expériences et formation</h2>
          <div className="section__line" />
        </div>

        <div className="experience__grid">
          <div className="experience__column">
            <h3 className="experience__title">💼 Expériences professionnelles</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <article key={exp.role} className="timeline__item">
                  <div className="timeline__point" />
                  <div className="timeline__card">
                    <p className="timeline__period">{exp.period}</p>
                    <h4>{exp.role}</h4>
                    <h5>{exp.company} — {exp.location}</h5>
                    <p className="timeline__description">{exp.description}</p>
                    <p className="timeline__tech">
                      <strong>Technologies :</strong> {exp.technologies.join(", ")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="experience__column">
            <h3 className="experience__title">🎓 Formation</h3>
            <div className="timeline">
              {education.map((edu) => (
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
        </div>
      </div>
    </section>
  );
}

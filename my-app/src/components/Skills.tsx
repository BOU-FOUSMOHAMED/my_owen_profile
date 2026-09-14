import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Technologies et savoir-faire</p>
          <h2>Mes compétences techniques</h2>
          <div className="section__line" />
        </div>

        <div className="skills__grid">
          {skills.map((category) => (
            <article key={category.title} className="skill-card">
              <div className="skill-card__header">
                <h3>{category.title}</h3>
              </div>
              <p className="skill-card__description">{category.description}</p>
              <div className="skill-card__list">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

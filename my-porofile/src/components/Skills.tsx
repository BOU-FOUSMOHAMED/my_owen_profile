import { Server, Layout, Database, Cloud, Brain, Boxes, type LucideIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const categoryIcons: LucideIcon[] = [Server, Layout, Database, Cloud, Brain, Boxes];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section skills" id="skills">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.skills.label}</p>
          <h2>{t.skills.title}</h2>
          <div className="section__line" />
        </div>

        <div className="skills__grid">
          {t.skills.categories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <article key={category.title} className="skill-card">
                <div className="skill-card__header">
                  <span className="skill-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{category.title}</h3>
                </div>
                <p className="skill-card__description">{category.description}</p>
                <div className="skill-card__list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
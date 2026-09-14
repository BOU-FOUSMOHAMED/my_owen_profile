import { Code2, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section projects" id="projects">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.projects.label}</p>
          <h2>{t.projects.title}</h2>
          <div className="section__line" />
        </div>

        <div className="projects__grid">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className={`project-card ${project.featured ? "project-card--featured" : ""}`}
            >
              {project.featured && (
                <span className="project-card__badge">
                  <Star size={12} /> {t.projects.featuredBadge}
                </span>
              )}
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Code2 size={16} /> {t.projects.github}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> {t.projects.demo}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
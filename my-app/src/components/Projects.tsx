import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Mes réalisations</p>
          <h2>Projets principaux</h2>
          <div className="section__line" />
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${project.featured ? "project-card--featured" : ""}`}
            >
              {project.featured && <span className="project-card__badge">Projet principal</span>}
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                <div className="project-card__tech">
                  {project.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Démo live
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

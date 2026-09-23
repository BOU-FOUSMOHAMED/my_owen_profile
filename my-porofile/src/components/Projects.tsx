import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { GitBranch, ExternalLink } from "lucide-react";

export default function Projects() {
  const { t, lang } = useLanguage();
  const { label, title, intro, featuredBadge, links } = t.projects;
  const items = projects[lang].items;

  return (
    <section className="ui-section ui-section--soft" id="projects">
      <div className="ui-shell">
        <div className="ui-heading">
          <p className="ui-label">{label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{title}</h2>
          <p className="ui-intro">{intro}</p>
        </div>

        <div className="grid gap-6">
          {items.map((project, index) => {
            const visibleTech = project.technologies.slice(0, 3);
            const extra = project.technologies.length - visibleTech.length;
            const isFeatured = project.featured;
            return (
              <article
                key={project.title}
                className={`group relative flex gap-4 rounded-card border bg-card p-[26px] transition hover:translate-x-[6px] hover:border-accent hover:shadow-glow max-sm:flex-col rtl:hover:-translate-x-[6px] ${
                  isFeatured ? "border-accent" : "border-line"
                }`}
              >
                <span
                  className="grid size-[58px] shrink-0 self-start place-items-center rounded-[14px] bg-badge font-display text-[1.05rem] font-extrabold text-accent transition group-hover:bg-grad group-hover:text-white"
                  aria-hidden="true"
                >
                  {isFeatured ? "★" : String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex min-w-0 flex-1 flex-col">
                  {isFeatured && (
                    <span className="mb-2 w-fit rounded-full bg-grad px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white">
                      {featuredBadge}
                    </span>
                  )}
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-accent">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-1 text-[1.2rem]">{project.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {visibleTech.map((tech) => (
                      <span key={tech} className="ui-chip">
                        {tech}
                      </span>
                    ))}
                    {extra > 0 && <span className="ui-chip font-display">+{extra}</span>}
                  </div>
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={links.code}
                          title={links.code}
                          className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 py-2 text-[0.8rem] font-bold text-accent transition hover:border-transparent hover:bg-grad hover:text-white"
                        >
                          <GitBranch size={15} aria-hidden="true" />
                          <span>{links.code}</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={links.demo}
                          title={links.demo}
                          className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 py-2 text-[0.8rem] font-bold text-accent transition hover:border-transparent hover:bg-grad hover:text-white"
                        >
                          <ExternalLink size={15} aria-hidden="true" />
                          <span>{links.demo}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a className="ui-btn ui-btn--quiet" href="#contact">
            {t.contact.title} →
          </a>
        </div>
      </div>
    </section>
  );
}
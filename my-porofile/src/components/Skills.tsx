import { useLanguage } from "../context/LanguageContext";
import { specialites } from "../data/specialites";
import { Server, Monitor, Database, Container, Brain, Network } from "lucide-react";

const CATEGORY_ICONS = [Server, Monitor, Database, Container, Brain, Network];

export default function Skills() {
  const { t, lang } = useLanguage();
  const categories = specialites[lang].categories;

  return (
    <section className="ui-section" id="skills">
      <div className="ui-shell">
        <div className="ui-heading">
          <p className="ui-label">{t.skills.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.skills.title}</h2>
          <p className="ui-intro">{t.skills.intro}</p>
        </div>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
            return (
              <article
                key={category.title}
                className="reveal relative rounded-[16px] border border-line bg-card p-[22px] transition hover:-translate-y-1 hover:border-accent hover:shadow-glow"
              >
                <div className="mb-2.5 flex items-center gap-3">
                  <span className="grid size-[42px] shrink-0 place-items-center rounded-[12px] bg-grad text-white">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <div className="flex min-w-0 flex-1 items-baseline gap-2">
                    <h3 className="text-[1.02rem]">{category.title}</h3>
                    <span className="ms-auto font-display text-[0.82rem] font-bold tracking-wider text-line-strong">
                      {String(category.skills.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <p className="mb-3.5 text-[0.85rem] leading-relaxed text-muted">
                  {category.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="ui-chip">
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
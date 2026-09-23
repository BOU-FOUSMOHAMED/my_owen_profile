import { useLanguage } from "../context/LanguageContext";
import { Lightbulb, Rocket, Wand } from "lucide-react";

const PRINCIPLE_ICONS = [Lightbulb, Rocket, Wand];

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="ui-section" id="about">
      <div className="ui-shell relative grid items-start gap-y-6 md:grid-cols-[1.05fr_0.95fr] md:gap-x-14">
        <p className="ui-label md:col-span-full">{t.about.label}</p>
        <h2 className="reveal max-w-[12ch] text-[clamp(2rem,4.6vw,3.05rem)]">{t.about.heading}</h2>
        <div className="prose reveal md:col-start-2 md:row-start-2">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
        </div>

        <div className="reveal mt-[26px] grid gap-[18px] md:col-span-full md:grid-cols-3">
          {t.about.principles.map((principle, index) => {
            const Icon = PRINCIPLE_ICONS[index % PRINCIPLE_ICONS.length];
            return (
              <article
                key={principle.num}
                className="group relative overflow-hidden rounded-card border border-line bg-card p-6 transition before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-grad before:transition-transform hover:-translate-y-1 hover:border-accent hover:shadow-glow hover:before:scale-x-100 rtl:before:origin-right"
              >
                <span
                  className="block mb-3.5 font-display text-[2.4rem] font-extrabold leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--border-strong)] transition group-hover:[-webkit-text-stroke:1px_var(--accent)]"
                  aria-hidden="true"
                >
                  {principle.num}
                </span>
                <span className="absolute top-[22px] end-[22px] grid size-[38px] place-items-center rounded-[11px] bg-badge text-accent">
                  <Icon size={17} strokeWidth={2} />
                </span>
                <h3 className="mb-1.5 text-[1.05rem]">{principle.title}</h3>
                <p className="text-[0.9rem] leading-relaxed text-muted">{principle.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
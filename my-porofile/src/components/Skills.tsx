import type { CSSProperties } from "react";
import {
  Server,
  Monitor,
  Database,
  Container,
  Brain,
  Network,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { specialites } from "../data/specialites";
import { useEnterOnScroll, useParallax, useTilt } from "../lib/tilt3d";
import type { SkillCategoryItem } from "../data/types";

const CATEGORY_ICONS = [Server, Monitor, Database, Container, Brain, Network];

/**
 * Bento layout. The depth sign is the only thing that varies per card: it makes
 * neighbouring pedestals drift at different rates while scrolling, which reads
 * as depth. The colour comes from --accent / --accent-light (see `.t3d-iso` in
 * index.css), so it follows the active theme with nothing to duplicate here.
 */
const CATEGORY_STYLE = [
  { span: "lg:col-span-3", depth: 1 },
  { span: "lg:col-span-3", depth: -0.72 },
  { span: "lg:col-span-2", depth: 0.85 },
  { span: "lg:col-span-2", depth: -0.6 },
  { span: "lg:col-span-2", depth: 0.7 },
  // Full-width strip: text on one side, stack on the other.
  { span: "lg:col-span-6", depth: -0.34 },
] as const;

interface ToolCardProps {
  category: SkillCategoryItem;
  index: number;
}

function ToolCard({ category, index }: ToolCardProps) {
  const style = CATEGORY_STYLE[index % CATEGORY_STYLE.length];
  const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
  const isStrip = style.span === "lg:col-span-6";

  // Each card owns its own hooks: parallaxe, rotation au pointeur, entrée 3D.
  const parRef = useParallax<HTMLDivElement>(style.depth);
  const tiltRef = useTilt<HTMLDivElement>();
  const [enterRef, entered] = useEnterOnScroll<HTMLDivElement>();

  const cardVars = {
    "--t3d-a": style.a,
    "--t3d-b": style.b,
  } as CSSProperties;

  const entranceVars = { "--d": `${index * 85}ms` } as CSSProperties;

  return (
    <article className={`t3d-iso ${style.span}`} style={cardVars}>
      <div ref={parRef} className="t3d-iso-par">
        <div
          ref={enterRef}
          style={entranceVars}
          className={`t3d-iso-gate ${entered ? "is-in" : ""}`}
        >
          <div ref={tiltRef} className="t3d-iso-tilt">
            <div className="t3d-iso-plinth">
              {/* Tige, dalle et lèvre : les trois pièces du socle. */}
              <span className="t3d-iso-stem" aria-hidden="true" />
              <span className="t3d-iso-floor" aria-hidden="true" />
              <span className="t3d-iso-lip" aria-hidden="true" />

              <div
                className={`t3d-iso-card flex flex-col p-6 ${
                  isStrip ? "gap-6 lg:flex-row lg:items-center lg:gap-10" : ""
                }`}
              >
                <div className={isStrip ? "lg:w-[38%] lg:shrink-0" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="t3d-badge t3d-z-badge grid size-12 shrink-0 place-items-center rounded-[14px] text-white">
                      <Icon size={22} strokeWidth={2} aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <h3 className="t3d-z-title font-display text-[1.15rem] font-bold leading-tight tracking-[-0.01em] text-ink">
                        {category.title}
                      </h3>
                      <span className="t3d-count font-mono text-[0.72rem] font-bold tracking-[0.08em]">
                        {String(category.skills.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <p className="t3d-z-text mt-4 text-[0.92rem] leading-[1.7] text-muted">
                    {category.description}
                  </p>
                </div>

                <ul
                  className={`t3d-z-pills flex flex-wrap gap-2 ${
                    isStrip ? "lg:flex-1 lg:justify-end" : "mt-5"
                  }`}
                >
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="t3d-pill rounded-[10px] px-3 py-[7px] font-mono text-[0.78rem] font-medium leading-none text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Skills() {
  const { t, lang } = useLanguage();
  const categories = specialites[lang].categories;

  return (
    <section className="ui-section" id="skills">
      <div className="ui-shell">
        <div className="ui-heading">
          <p className="ui-label ui-label--dot">{t.skills.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.skills.title}</h2>
          <p className="ui-intro">{t.skills.intro}</p>
        </div>

        <div className="t3d-iso-stage grid gap-x-[22px] gap-y-[104px] sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => (
            <ToolCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

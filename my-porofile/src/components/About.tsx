import { GraduationCap, Wrench, Bot, Target } from "lucide-react";
import { personal } from "../data/personal";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const cards = [
    { Icon: GraduationCap, info: t.about.cards.formation },
    { Icon: Wrench, info: t.about.cards.specialty },
    { Icon: Bot, info: t.about.cards.ai },
    { Icon: Target, info: t.about.cards.goal },
  ];

  return (
    <section className="section about" id="about">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.about.label}</p>
          <h2>{t.nav.about}</h2>
          <div className="section__line" />
        </div>

        <div className="about__content">
          <div className="about__text">
            <h3>{t.about.heading}</h3>
            <p className="about__intro">
              <strong>{personal.firstName}</strong> — {t.about.intro}
            </p>
            {t.about.summary.map((s) => (
              <p key={s}>{s}</p>
            ))}
            <ul className="about__highlights">
              {t.about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="about__cards">
            {cards.map(({ Icon, info }) => (
              <article key={info.title} className="info-card">
                <span className="info-card__icon">
                  <Icon size={26} />
                </span>
                <div>
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
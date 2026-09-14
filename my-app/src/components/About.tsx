import { personal } from "../data/personal";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Découvrez mon profil</p>
          <h2>À propos de moi</h2>
          <div className="section__line" />
        </div>

        <div className="about__content">
          <div className="about__text">
            <h3>Développement Full Stack, architectures modernes et solutions performantes</h3>
            <p>
              Je suis <strong>{personal.firstName} {personal.lastName}</strong>, {personal.title.toLowerCase()}.
            </p>
            {personal.about.summary.split(". ").reduce<string[]>((acc, sentence, i) => {
              if (i % 2 === 0) acc.push(sentence);
              else acc[acc.length - 1] += ". " + sentence;
              return acc;
            }, []).map((s, i) => (
              <p key={i}>{s.endsWith(".") ? s : s + "."}</p>
            ))}
            <ul className="about__highlights">
              {personal.about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="about__cards">
            <article className="info-card">
              <span className="info-card__icon">🎓</span>
              <div>
                <h4>Formation</h4>
                <p>Diplôme National d'Ingénieur en Génie Logiciel</p>
              </div>
            </article>
            <article className="info-card">
              <span className="info-card__icon">⚙️</span>
              <div>
                <h4>Spécialité</h4>
                <p>Java, Spring Boot, React et architectures modernes</p>
              </div>
            </article>
            <article className="info-card">
              <span className="info-card__icon">🤖</span>
              <div>
                <h4>Intelligence artificielle</h4>
                <p>Machine Learning, XGBoost et AI générative</p>
              </div>
            </article>
            <article className="info-card">
              <span className="info-card__icon">🎯</span>
              <div>
                <h4>Objectif</h4>
                <p>CDI, missions freelance et collaborations</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

import { personal } from "../data/personal";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__welcome">Bienvenue sur mon portfolio</p>
          <h1>
            Bonjour, je suis <span>{personal.firstName} {personal.lastName}</span>
          </h1>
          <h2>{personal.title}</h2>
          <p className="hero__description">{personal.description}</p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">Voir mes projets</a>
            <a href="#contact" className="btn btn--secondary">Me contacter</a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-decoration" />
          <div className="hero__avatar">
            {personal.firstName[0]}{personal.lastName[0]}
          </div>
        </div>
      </div>
    </section>
  );
}

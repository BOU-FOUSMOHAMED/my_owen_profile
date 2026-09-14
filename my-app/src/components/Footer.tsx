import { personal } from "../data/personal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__profile">
            <a href="#home" className="footer__logo">
              {personal.firstName}<span>.</span>
            </a>
            <p>{personal.title}</p>
          </div>

          <div className="footer__nav">
            <h3>Navigation</h3>
            <div className="footer__links">
              <a href="#home">Accueil</a>
              <a href="#about">À propos</a>
              <a href="#skills">Compétences</a>
              <a href="#projects">Projets</a>
              <a href="#experience">Parcours</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer__contact">
            <h3>Retrouvez-moi</h3>
            <div className="footer__socials">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={`mailto:${personal.email}`}>E-mail</a>
            </div>
            <a href={`mailto:${personal.email}`} className="footer__email">
              {personal.email}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {personal.firstName} {personal.lastName}. Tous droits réservés.</p>
          <p>Portfolio développé avec React</p>
        </div>
      </div>
    </footer>
  );
}

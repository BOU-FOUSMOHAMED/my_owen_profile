import { personal } from "../data/personal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Travaillons ensemble</p>
          <h2>Contactez-moi</h2>
          <div className="section__line" />
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <h3>Parlons de votre projet</h3>
            <p>
              Vous avez une opportunité, une mission freelance ou un projet à
              réaliser ? N'hésitez pas à me contacter.
            </p>

            <div className="contact__details">
              <a href={`mailto:${personal.email}`} className="contact-detail">
                <span className="contact-detail__icon">✉️</span>
                <div>
                  <p>E-mail</p>
                  <strong>{personal.email}</strong>
                </div>
              </a>
              <a href={`tel:${personal.phone}`} className="contact-detail">
                <span className="contact-detail__icon">📞</span>
                <div>
                  <p>Téléphone</p>
                  <strong>{personal.phone}</strong>
                </div>
              </a>
              <div className="contact-detail">
                <span className="contact-detail__icon">📍</span>
                <div>
                  <p>Localisation</p>
                  <strong>{personal.location}</strong>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a href={`mailto:${personal.email}`} aria-label="E-mail">
                E-mail
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input id="name" placeholder="Votre nom" required type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Adresse e-mail</label>
                <input id="email" placeholder="votre@email.com" required type="email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                id="subject"
                placeholder="Proposition de collaboration"
                required
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Écrivez votre message..."
                required
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

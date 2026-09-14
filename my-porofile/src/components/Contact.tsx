import { Mail, Phone, MapPin, Link2, Code2 } from "lucide-react";
import { personal } from "../data/personal";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section contact" id="contact">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.contact.label}</p>
          <h2>{t.contact.title}</h2>
          <div className="section__line" />
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <h3>{t.contact.heading}</h3>
            <p>{t.contact.description}</p>

            <div className="contact__details">
              <a href={`mailto:${personal.email}`} className="contact-detail">
                <span className="contact-detail__icon">
                  <Mail size={20} />
                </span>
                <div>
                  <p>{t.contact.email}</p>
                  <strong>{personal.email}</strong>
                </div>
              </a>
              <a href={`tel:${personal.phone}`} className="contact-detail">
                <span className="contact-detail__icon">
                  <Phone size={20} />
                </span>
                <div>
                  <p>{t.contact.phone}</p>
                  <strong>{personal.phone}</strong>
                </div>
              </a>
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <MapPin size={20} />
                </span>
                <div>
                  <p>{t.contact.location}</p>
                  <strong>{personal.location}</strong>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedin}
              >
                <Link2 size={18} /> {t.contact.linkedin}
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
              >
                <Code2 size={18} /> {t.contact.github}
              </a>
              <a href={`mailto:${personal.email}`} aria-label={t.contact.email}>
                <Mail size={18} /> {t.contact.email}
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input id="name" placeholder={t.contact.form.namePlaceholder} required type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input id="email" placeholder={t.contact.form.emailPlaceholder} required type="email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.contact.form.subject}</label>
              <input
                id="subject"
                placeholder={t.contact.form.subjectPlaceholder}
                required
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                rows={6}
                placeholder={t.contact.form.messagePlaceholder}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
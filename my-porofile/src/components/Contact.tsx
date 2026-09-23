import { Mail, Phone, MapPin, Link2, Code2 } from "lucide-react";
import { personal } from "../data/personal";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="ui-section" id="contact">
      <div className="ui-shell">
        <div className="ui-header">
          <p className="ui-label ui-label--dot">{t.contact.label}</p>
          <h2 className="text-[clamp(2rem,4.6vw,3.05rem)]">{t.contact.title}</h2>
          <div className="ui-line" />
        </div>

        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal grid gap-6">
            <div>
              <h3 className="text-[1.18rem]">{t.contact.heading}</h3>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-muted">
                {t.contact.description}
              </p>
            </div>

            <div className="grid gap-3">
              <a href={`mailto:${personal.email}`} className="group grid grid-cols-[44px_1fr] items-center gap-4 rounded-[14px] border border-line bg-card p-[16px_18px] transition hover:border-accent hover:shadow-glow">
                <span className="grid size-[44px] place-items-center rounded-[13px] bg-badge text-accent transition group-hover:bg-grad group-hover:text-white">
                  <Mail size={19} />
                </span>
                <span className="grid gap-0.5">
                  <span className="text-[0.76rem] text-muted">{t.contact.email}</span>
                  <strong className="text-[0.92rem]">{personal.email}</strong>
                </span>
              </a>
              <a href={`tel:${personal.phone}`} className="group grid grid-cols-[44px_1fr] items-center gap-4 rounded-[14px] border border-line bg-card p-[16px_18px] transition hover:border-accent hover:shadow-glow">
                <span className="grid size-[44px] place-items-center rounded-[13px] bg-badge text-accent transition group-hover:bg-grad group-hover:text-white">
                  <Phone size={19} />
                </span>
                <span className="grid gap-0.5">
                  <span className="text-[0.76rem] text-muted">{t.contact.phone}</span>
                  <strong className="text-[0.92rem]">{personal.phone}</strong>
                </span>
              </a>
              <div className="group grid grid-cols-[44px_1fr] items-center gap-4 rounded-[14px] border border-line bg-card p-[16px_18px] transition hover:border-accent hover:shadow-glow">
                <span className="grid size-[44px] place-items-center rounded-[13px] bg-badge text-accent transition group-hover:bg-grad group-hover:text-white">
                  <MapPin size={19} />
                </span>
                <span className="grid gap-0.5">
                  <span className="text-[0.76rem] text-muted">{t.contact.location}</span>
                  <strong className="text-[0.92rem]">{personal.location}</strong>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedin}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[0.82rem] font-semibold text-ink transition hover:-translate-y-[3px] hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow [&_svg]:text-accent hover:[&_svg]:text-white"
              >
                <Link2 size={16} /> {t.contact.linkedin}
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[0.82rem] font-semibold text-ink transition hover:-translate-y-[3px] hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow [&_svg]:text-accent hover:[&_svg]:text-white"
              >
                <Code2 size={16} /> {t.contact.github}
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label={t.contact.email}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[0.82rem] font-semibold text-ink transition hover:-translate-y-[3px] hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow [&_svg]:text-accent hover:[&_svg]:text-white"
              >
                <Mail size={16} /> {t.contact.email}
              </a>
            </div>
          </div>

          <form
            className="reveal grid gap-[18px] rounded-card border border-line bg-card p-[30px] shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-[18px] sm:grid-cols-2">
              <div className="ui-field">
                <label className="ui-field-label" htmlFor="name">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  type="text"
                />
              </div>
              <div className="ui-field">
                <label className="ui-field-label" htmlFor="email">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="ui-field">
              <label className="ui-field-label" htmlFor="subject">
                {t.contact.form.subject}
              </label>
              <input
                id="subject"
                placeholder={t.contact.form.subjectPlaceholder}
                required
                type="text"
              />
            </div>
            <div className="ui-field">
              <label className="ui-field-label" htmlFor="message">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder={t.contact.form.messagePlaceholder}
                required
              />
            </div>
            <button type="submit" className="ui-btn ui-btn--primary justify-center">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
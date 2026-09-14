import { Link2, Code2, Mail } from "lucide-react";
import { personal } from "../data/personal";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.formation, href: "#formation" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__profile">
            <a href="#home" className="footer__logo">
              {personal.firstName}<span>.</span>
            </a>
            <p>{t.footer.tagline}</p>
          </div>

          <div className="footer__nav">
            <h3>{t.footer.navigation}</h3>
            <div className="footer__links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          <div className="footer__contact">
            <h3>{t.footer.followMe}</h3>
            <div className="footer__socials">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedin}
              >
                <Link2 size={18} />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
              >
                <Code2 size={18} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label={t.contact.email}>
                <Mail size={18} />
              </a>
            </div>
            <a href={`mailto:${personal.email}`} className="footer__email">
              {personal.email}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {personal.firstName} {personal.lastName}. All rights reserved.</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
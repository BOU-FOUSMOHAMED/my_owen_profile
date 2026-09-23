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
    { label: t.nav.contact, href: "#contact" },
  ].filter(Boolean);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-card">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-grad"
        aria-hidden="true"
      />
      <div className="ui-shell flex flex-col gap-10 py-14 max-md:gap-9">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="grid gap-3">
            <a href="#home" className="text-[1.6rem] font-display font-extrabold tracking-[-0.03em]">
              {personal.firstName}
              <span className="text-accent">.dev</span>
            </a>
            <p className="text-[0.9rem] leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>

          <div className="grid gap-3">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-accent">
              {t.footer.navigation}
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5" aria-label={t.footer.navigation}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-[0.9rem] text-muted transition hover:translate-x-0.5 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="grid gap-3">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-accent">
              {t.nav.contact}
            </h3>
            <div className="flex flex-wrap gap-2">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedin}
                className="grid size-11 place-items-center rounded-[12px] border border-line text-muted transition hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow"
              >
                <Link2 size={18} />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
                className="grid size-11 place-items-center rounded-[12px] border border-line text-muted transition hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow"
              >
                <Code2 size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label={t.contact.email}
                className="grid size-11 place-items-center rounded-[12px] border border-line text-muted transition hover:border-transparent hover:bg-grad hover:text-white hover:shadow-glow"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="w-fit text-[0.9rem] text-muted transition hover:text-ink"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-line pt-8 text-[0.82rem] text-muted max-sm:flex-col">
          <p>
            &copy; {year} {personal.firstName} {personal.lastName}. All rights reserved.
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
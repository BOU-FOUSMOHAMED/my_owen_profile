import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { personal } from "../data/personal";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.formation, href: "#formation" },
    { label: t.nav.certifications, href: "#certifications" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={handleNav}>
          {personal.firstName}<span>.</span>
        </a>

        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          <button
            className="navbar__close"
            onClick={handleNav}
            aria-label="Close menu"
            title="Close menu"
          >
            <X size={20} />
          </button>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNav}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__cta" onClick={handleNav}>
              {t.nav.hireMe}
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <LanguageSwitcher />
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.theme.toDark : t.theme.toLight}
            title={theme === "light" ? t.theme.toDark : t.theme.toLight}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className="navbar__toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
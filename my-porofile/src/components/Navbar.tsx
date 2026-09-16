import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
} from "lucide-react";
import { personal } from "../data/personal";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home", icon: Home },
    { label: t.nav.about, href: "#about", icon: User },
    { label: t.nav.skills, href: "#skills", icon: Code2 },
    { label: t.nav.projects, href: "#projects", icon: FolderGit2 },
    { label: t.nav.experience, href: "#experience", icon: Briefcase },
    { label: t.nav.formation, href: "#formation", icon: GraduationCap },
    { label: t.nav.certifications, href: "#certifications", icon: Award },
    { label: t.nav.hireMe, href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const pos = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = `#${id}`;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <nav className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={() => handleNav("#home")}>
          {personal.firstName}<span>.</span>
        </a>

        <div
          className={`navbar__backdrop ${open ? "navbar__backdrop--visible" : ""}`}
          onClick={() => setOpen(false)}
        />

        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          <button
            className="navbar__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            title="Close menu"
          >
            <X size={20} />
          </button>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[
                    "navbar__link",
                    link.href === "#contact" ? "navbar__cta" : "",
                    active === link.href ? "navbar__link--active" : "",
                  ].join(" ")}
                  onClick={() => handleNav(link.href)}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
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

      <nav className="dock" aria-label="Navigation">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`dock__item ${active === link.href ? "dock__item--active" : ""}`}
              onClick={() => handleNav(link.href)}
            >
              <span className="dock__tooltip">{link.label}</span>
              <Icon size={20} />
            </a>
          );
        })}
      </nav>
    </>
  );
}
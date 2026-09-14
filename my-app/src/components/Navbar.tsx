import { useState, useEffect } from "react";
import { personal } from "../data/personal";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNav}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__cta" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

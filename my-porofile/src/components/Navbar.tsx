import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import {
  Sun,
  Moon,
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";
import { personal } from "../data/personal";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_IDS = ["home", "about", "skills", "experience", "projects", "formation", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home", icon: Home },
    { label: t.nav.about, href: "#about", icon: User },
    { label: t.nav.skills, href: "#skills", icon: Code2 },
    { label: t.nav.experience, href: "#experience", icon: Briefcase },
    { label: t.nav.projects, href: "#projects", icon: FolderGit2 },
    { label: t.nav.formation, href: "#formation", icon: GraduationCap },
    { label: t.nav.contact, href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(1, scrollY / docHeight) : 0);

      const viewportH = window.innerHeight;
      let best = "#home";
      let bestVisible = -1;
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0);
        if (visible > bestVisible) {
          bestVisible = visible;
          best = `#${id}`;
        }
      }
      setActive((prev) => (prev === best ? prev : best));
    };

    const onHash = () => {
      const { hash } = window.location;
      if (hash && NAV_IDS.includes(hash.slice(1))) setActive(hash);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    onHash();
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setActive(href);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] border-b border-line bg-nav backdrop-blur-[16px] backdrop-saturate-150 transition ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <div
          className="absolute left-0 top-0 z-[1] h-[3px] bg-grad shadow-[0_0_12px_var(--accent-light)]"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden="true"
        />

        <nav className="ui-shell flex h-[72px] items-center justify-between gap-5">
          <a
            href="#home"
            className="inline-flex items-center gap-1 font-display text-[1.25rem] font-bold tracking-[-0.03em] transition hover:scale-[1.02]"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            {personal.firstName}
            <span className="text-accent">.dev</span>
          </a>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="grid size-[42px] place-items-center rounded-full border border-line bg-card text-muted transition hover:rotate-12 hover:border-accent hover:text-accent"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? t.theme.toDark : t.theme.toLight}
              title={theme === "light" ? t.theme.toDark : t.theme.toLight}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <nav
        className="fixed right-[22px] top-1/2 z-[900] flex max-sm:bottom-4 max-sm:left-1/2 max-sm:right-1/2 max-sm:top-auto max-sm:flex-row max-sm:px-3.5 max-sm:py-2 flex-col items-center justify-center gap-3 rounded-[999px] border border-line bg-nav px-2 py-3 shadow-glow backdrop-blur-[18px] backdrop-saturate-150 animate-dock-in max-sm:animate-dock-in-mobile"
        aria-label="Navigation"
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`group relative grid size-[42px] place-items-center rounded-[14px] text-muted transition duration-[280ms] hover:-translate-x-[3px] hover:scale-[1.08] hover:bg-badge hover:text-accent hover:shadow-glow max-sm:hover:translate-x-0 max-sm:hover:-translate-y-[3px] ${
                isActive
                  ? "bg-grad text-white shadow-[0_8px_22px_rgba(37,99,235,0.35)] hover:translate-x-0 hover:bg-grad hover:text-white max-sm:hover:translate-y-0"
                  : ""
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 z-[950] -translate-y-1/2 translate-x-[-4px] whitespace-nowrap rounded-lg border border-line bg-card px-2.5 py-1 text-[0.75rem] font-semibold text-ink opacity-0 shadow-card transition duration-[280ms] group-hover:translate-x-0 group-hover:opacity-100 max-sm:hidden">
                {link.label}
              </span>
              <Icon size={20} />
              {isActive && (
                <span
                  className="absolute -bottom-[3px] left-1/2 size-[5px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_#fff]"
                  aria-hidden="true"
                />
              )}
            </a>
          );
        })}
      </nav>
    </>
  );
}
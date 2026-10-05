import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
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
  Newspaper,
} from "lucide-react";
import { personal } from "../data/personal";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import FloatingNav from "./FloatingNav";
import { goToSection } from "../lib/section";

const NAV_IDS = ["home", "about", "skills", "experience", "projects", "formation", "contact"];

interface NavLinkItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isBlog = location.pathname === "/blog";
  

  const navLinks: NavLinkItem[] = [
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
    goToSection(navigate, location.pathname, href);
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <header
        className="sticky top-0 z-[1000] w-full"
      >
        <div
          className={`relative mx-auto mt-4 w-[calc(100%-0.5rem)] sm:w-[calc(100%-1rem)] lg:w-auto transition-all duration-500 ${
            scrolled ? "lg:w-[1000px] xl:w-[1100px] 2xl:w-[1180px]" : "lg:w-[1120px] xl:w-[1220px] 2xl:w-[1320px]"
          }`}
        >
          <div
            className="absolute inset-0 -z-10 rounded-full opacity-70 blur-[0.5px]"
            aria-hidden="true"
          >
            <div className="absolute inset-[1px] rounded-full bg-surface/90 backdrop-blur-[24px] backdrop-saturate-150" />
          </div>

          <div
            className="absolute inset-0 -z-20 animate-[border-spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,var(--accent)_40%,var(--warm)_55%,rgba(255,255,255,0)_70%)] opacity-75 transition-opacity duration-500 [will-change:transform]"
            style={{
              filter: "blur(0.2px)",
              animationDuration: scrolled ? "8s" : "5s",
            }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-[1.5px] -z-10 rounded-full bg-surface/98 shadow-[0_10px_80px_-30px_rgba(77,124,255,0.35)] backdrop-blur-[28px] backdrop-saturate-170 transition-shadow duration-500"
            aria-hidden="true"
          >
            <div className="absolute inset-0 animate-[nav-glow_3.2s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_top,rgba(77,124,255,0.12),transparent_70%)]" />
          </div>

          <div
            className="absolute left-0 top-0 z-10 h-[2px] rounded-l-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent shadow-[0_0_20px_var(--accent-light)] transition-all duration-500"
            style={{ width: `${scrollProgress * 100}%` }}
            aria-hidden="true"
          />

          <nav className="relative z-20 flex h-[72px] items-center justify-between gap-4 rounded-full px-4 sm:h-[78px] sm:px-6 lg:px-10">
            <a
              href="#home"
              className="group relative inline-flex items-center gap-1 overflow-hidden rounded-full px-3 py-2 font-display text-[1.15rem] font-bold tracking-[-0.03em] transition-transform duration-300 hover:scale-[1.03] sm:text-[1.25rem]"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <span className="relative z-10">
                {personal.firstName}
                <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--warm)] to-[var(--accent)] bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient-shift_3.8s_ease-in-out_infinite]">
                  .dev
                </span>
              </span>
              <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-accent/10 via-warm/5 to-accent/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/blog"
              aria-label={t.nav.blog}
              title={t.nav.blog}
              className={`group relative inline-flex h-[42px] w-[42px] items-center justify-center gap-2 overflow-hidden rounded-full border transition-all duration-300 sm:w-auto sm:px-3 sm:pr-4 ${
                isBlog
                  ? "border-transparent bg-gradient-to-r from-[var(--accent)] via-[var(--warm)] to-[var(--accent)] bg-[length:200%_200%] text-white shadow-[var(--btn-glow)] animate-[gradient-shift_3.6s_ease-in-out_infinite]"
                  : "border-white/10 bg-surface/95 text-muted hover:border-accent/50 hover:text-accent hover:shadow-card"
              }`}
            >
                <span
                  className={`grid size-[26px] shrink-0 place-items-center rounded-full transition-all duration-300 ${
                    isBlog
                      ? "bg-white/20 text-white shadow-[0_0_30px_-12px_#fff]"
                      : "bg-grad text-white shadow-[var(--btn-glow-sm)] group-hover:scale-110 group-hover:rotate-[8deg]"
                  }`}
                >
                  <Newspaper size={14} strokeWidth={2.1} aria-hidden="true" />
                </span>
                <span
                  className={`hidden text-[0.84rem] font-semibold sm:inline ${
                    isBlog ? "text-white" : "text-ink"
                  }`}
                >
                  {t.nav.blog}
                </span>
                <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-accent/10 via-warm/5 to-accent/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <span
                  className="absolute -end-0.5 -top-0.5 flex size-2.5 sm:end-1 sm:top-1"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inline-flex size-full animate-ping rounded-full opacity-60 ${
                      isBlog ? "bg-white/80" : "bg-warm"
                    }`}
                  />
                  <span
                    className={`relative inline-flex size-2.5 rounded-full ring-2 ring-card ${
                      isBlog ? "bg-white" : "bg-warm"
                    }`}
                  />
                </span>
              </Link>
              <LanguageSwitcher />
            <button
              className="group relative grid size-[42px] place-items-center overflow-hidden rounded-full border border-white/10 bg-surface/95 text-muted transition-all duration-300 hover:-translate-y-[1px] hover:rotate-12 hover:border-accent/60 hover:text-accent hover:shadow-[0_8px_60px_-30px_var(--accent)]"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? t.theme.toDark : t.theme.toLight}
              title={theme === "light" ? t.theme.toDark : t.theme.toLight}
            >
                <span className="relative z-10 grid size-full place-items-center transition-transform duration-300 group-hover:scale-110">
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </span>
                <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-warm/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <nav
        className="fixed right-[22px] top-1/2 z-[900] hidden animate-dock-in flex-col items-center justify-center gap-3 rounded-[999px] border border-line bg-nav px-2 py-3 shadow-glow backdrop-blur-[18px] backdrop-saturate-150 lg:flex"
        aria-label="Navigation"
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`group relative grid size-[42px] place-items-center rounded-[14px] text-muted transition duration-[280ms] hover:-translate-x-[3px] hover:scale-[1.08] hover:bg-badge hover:text-accent hover:shadow-glow ${
                isActive
                  ? "bg-grad text-white shadow-[var(--btn-glow)] hover:translate-x-0 hover:bg-grad hover:text-white"
                  : ""
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 z-[950] -translate-y-1/2 translate-x-[-4px] whitespace-nowrap rounded-lg border border-line bg-card px-2.5 py-1 text-[0.75rem] font-semibold text-ink opacity-0 shadow-card transition duration-[280ms] group-hover:translate-x-0 group-hover:opacity-100">
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

      <FloatingNav items={navLinks} active={active} onNavigate={scrollToSection} />
    </>
  );
}
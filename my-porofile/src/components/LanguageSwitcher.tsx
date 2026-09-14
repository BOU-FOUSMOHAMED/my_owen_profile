import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { LANGUAGE_OPTIONS } from "../i18n";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGE_OPTIONS.find((l) => l.code === lang)!;

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className={`lang-switcher__button ${open ? "lang-switcher__button--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={current.name}
        title={current.name}
      >
        <Globe size={18} />
        <span>{current.label}</span>
        <ChevronDown size={14} className={open ? "lang-switcher__chevron" : ""} />
      </button>
      {open && (
        <ul className="lang-switcher__menu">
          {LANGUAGE_OPTIONS.map((option) => (
            <li key={option.code}>
              <button
                className={`lang-switcher__option ${
                  option.code === lang ? "lang-switcher__option--active" : ""
                }`}
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
              >
                <span>{option.label}</span>
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
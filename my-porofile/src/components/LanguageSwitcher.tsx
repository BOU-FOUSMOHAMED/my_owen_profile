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
    <div className="relative" ref={ref}>
      <button
        className="inline-flex h-[42px] cursor-pointer items-center gap-1.5 rounded-full border border-line bg-card px-3.5 text-[0.85rem] font-semibold text-ink transition hover:border-accent hover:text-accent"
        onClick={() => setOpen((o) => !o)}
        aria-label={current.name}
        title={current.name}
      >
        <Globe size={18} />
        <span>{current.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-[280ms] ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="absolute end-0 top-[calc(100%+10px)] z-[960] grid min-w-[180px] gap-0.5 rounded-[14px] border border-line bg-card p-1.5 shadow-glow">
          {LANGUAGE_OPTIONS.map((option) => (
            <li key={option.code}>
              <button
                className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-[9px] px-3 py-2.5 text-[0.9rem] font-medium text-ink transition hover:bg-card-hover hover:text-accent ${
                  option.code === lang ? "bg-badge text-accent" : "bg-transparent"
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
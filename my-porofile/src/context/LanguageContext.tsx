import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { dictionaries, isRtl, isSupportedLang, type Lang, type Translation } from "../i18n";

interface LanguageContextValue {
  lang: Lang;
  /** Navigates to the same page in another language (URL-based, crawlable). */
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  setLang: () => {},
  t: dictionaries.fr,
});

const isLang = isSupportedLang;

export { isSupportedLang };

/** Reads the language from the first URL segment: `/en/blog` -> `en`. */
export function langFromPathname(pathname: string): Lang | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLang(segment) ? segment : null;
}

/** Replaces the language segment, keeping the rest of the path untouched. */
export function swapLangInPathname(pathname: string, next: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  if (isLang(segments[0])) segments[0] = next;
  else segments.unshift(next);
  return `/${segments.join("/")}`;
}

function detectPreferredLang(): Lang {
  if (typeof window === "undefined") return "fr";
  const stored: string | undefined = window.localStorage.getItem("lang") ?? undefined;
  if (isLang(stored)) return stored;
  const [browser] = window.navigator.language.split("-");
  return isLang(browser) ? browser : "fr";
}

export function LanguageProvider({ children }: { children?: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const urlLang = langFromPathname(location.pathname);
  const lang = urlLang ?? detectPreferredLang();

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.dir = isRtl(lang) ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      window.localStorage.setItem("lang", next);
      navigate(swapLangInPathname(location.pathname, next) + location.search);
    },
    [location.pathname, location.search, navigate],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children ?? <Outlet />}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
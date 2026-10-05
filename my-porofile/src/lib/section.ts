import type { NavigateFunction } from "react-router-dom";
import { isSupportedLang } from "../i18n";
import { DEFAULT_LANG } from "./seo";

/** The portfolio home page is `/` or `/:lang`. */
export function isHomePath(pathname: string): boolean {
  const segments = pathname.split("/").filter(Boolean);
  return segments.length === 0 || (segments.length === 1 && isSupportedLang(segments[0]));
}

/** The language of the current URL, defaulting to French. */
export function langOf(pathname: string): string {
  const [first] = pathname.split("/").filter(Boolean);
  return isSupportedLang(first) ? first : DEFAULT_LANG;
}

export function goToSection(navigate: NavigateFunction, pathname: string, href: string) {
  const id = href.startsWith("#") ? href.slice(1) : "";
  if (!isHomePath(pathname)) {
    navigate(`/${langOf(pathname)}`, { state: { scrollTo: id } });
    return;
  }
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}
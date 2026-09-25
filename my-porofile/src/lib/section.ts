import type { NavigateFunction } from "react-router-dom";

export function goToSection(navigate: NavigateFunction, pathname: string, href: string) {
  const id = href.startsWith("#") ? href.slice(1) : "";
  if (pathname !== "/") {
    navigate("/", { state: { scrollTo: id } });
    return;
  }
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}
import type { Translation } from "./types";
import { fr } from "./fr";
import { en } from "./en";
import { es } from "./es";
import { ar } from "./ar";
import { tam } from "./tam";

export type Lang = "fr" | "en" | "es" | "ar" | "tam";

export interface LanguageOption {
  code: Lang;
  label: string;
  name: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "tam", label: "TAM", name: "ⵜⴰⵎⴰⵣⵉⵖⵜ" },
];

export const dictionaries: Record<Lang, Translation> = {
  fr,
  en,
  es,
  ar,
  tam,
};

export const isRtl = (lang: Lang) => lang === "ar";

export type { Translation };
export { fr, en, es, ar, tam };
import type { Lang } from "../i18n";
import type { CertificationItem, LanguageItem } from "./types";

export interface CertificationsData {
  certifications: CertificationItem[];
  languages: LanguageItem[];
  personalSkills: string[];
}

export const certifications: Record<Lang, CertificationsData> = {
  fr: {
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript et SQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "Arabe", level: "Langue maternelle", percentage: 100 },
      { name: "Français", level: "Niveau professionnel", percentage: 85 },
      { name: "Anglais", level: "Niveau intermédiaire — B2", percentage: 70 },
    ],
    personalSkills: [
      "Esprit d'analyse",
      "Résolution de problèmes",
      "Travail en équipe",
      "Communication",
      "Adaptabilité",
      "Autonomie",
    ],
  },
  en: {
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript and SQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "Arabic", level: "Native language", percentage: 100 },
      { name: "French", level: "Professional proficiency", percentage: 85 },
      { name: "English", level: "Intermediate — B2", percentage: 70 },
    ],
    personalSkills: [
      "Analytical mindset",
      "Problem solving",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Autonomy",
    ],
  },
  es: {
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 y 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript y SQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "Árabe", level: "Lengua materna", percentage: 100 },
      { name: "Francés", level: "Nivel profesional", percentage: 85 },
      { name: "Inglés", level: "Intermedio — B2", percentage: 70 },
    ],
    personalSkills: [
      "Espíritu analítico",
      "Resolución de problemas",
      "Trabajo en equipo",
      "Comunicación",
      "Adaptabilidad",
      "Autonomía",
    ],
  },
  ar: {
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript وSQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "العربية", level: "اللغة الأم", percentage: 100 },
      { name: "الفرنسية", level: "مستوى مهني", percentage: 85 },
      { name: "الإنجليزية", level: "مستوى متوسط — B2", percentage: 70 },
    ],
    personalSkills: [
      "التحليل",
      "حل المشكلات",
      "العمل الجماعي",
      "التواصل",
      "التكيّف",
      "الاستقلالية",
    ],
  },
  tam: {
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript ⴷ SQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "ⵜⴰⵄⵔⴰⴱⵜ", level: "ⵜⵓⵜⵍⴰⵢⵜ ⵜⴰⵢⴻⵎⵎⴰⵜ", percentage: 100 },
      { name: "ⵜⴰⴼⵔⴰⵏⵙⵉⵙⵜ", level: "ⵜⵉⵖⵣⵉ ⵜⴰⵡⵉⵏⵙⴰⵏ", percentage: 85 },
      { name: "ⵜⴰⴳⵍⵉⵣⵉⵜ", level: "ⵜⴰⵍⴻⵎⵎⴰⵙⵜ — B2", percentage: 70 },
    ],
    personalSkills: [
      "ⵜⵉⵃⵓⵍⴼⵉⵏ ⵏ ⵓⵇⴻⵔⵔⵓ",
      "ⴰⵙⵙⵉⴼⴷⵉ ⵏ ⵉⵔⵓⵔ",
      "ⴰⵎⴰⵀⵉⵍ ⵖⴻⵔ ⵜⴰⵡⵙⵉⵜ",
      "ⴰⵎⵙⴻⴼⵀⴻⵎ",
      "ⴰⵏⴻⵣⵎⴻⵣ",
      "ⴰⵙⵉⵡⴻⴷ ⵏ ⴷⵡⵓ",
    ],
  },
};
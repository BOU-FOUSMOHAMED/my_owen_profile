import type { Lang } from "../i18n";
import type { ExperienceItem } from "./types";

export interface ExperienceData {
  items: ExperienceItem[];
}

export const experience: Record<Lang, ExperienceData> = {
  fr: {
    items: [
      {
        period: "Juillet 2026 — Septembre 2026",
        role: "Security & Back-End Developer — Projet de fin d'année",
        company: "FirstFinTech",
        location: "Agadir, Maroc",
        description:
          "Développement backend d'une plateforme intelligente GRC (Gouvernance, Risque et Conformité) : module conformité, sécurisation d'API REST et intégration de tests de pénétration.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Swagger",
        ],
      },
    ],
  },
  en: {
    items: [
      {
        period: "July 2026 — September 2026",
        role: "Security & Back-End Developer — Final year project",
        company: "FirstFinTech",
        location: "Agadir, Morocco",
        description:
          "Backend development of an intelligent GRC (Governance, Risk and Compliance) platform: compliance module, REST API security and penetration testing integration.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Swagger",
        ],
      },
    ],
  },
  es: {
    items: [
      {
        period: "Julio 2026 — Septiembre 2026",
        role: "Desarrollador de Backend y Seguridad — Proyecto de fin de estudios",
        company: "FirstFinTech",
        location: "Agadir, Marruecos",
        description:
          "Desarrollo backend de una plataforma inteligente GRC (Gobernanza, Riesgo y Cumplimiento): módulo de cumplimiento, seguridad de APIs REST e integración de pruebas de penetración.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Swagger",
        ],
      },
    ],
  },
  ar: {
    items: [
      {
        period: "يوليوز 2026 — شتنبر 2026",
        role: "مطوّر Backend وأمن — مشروع نهاية السنة",
        company: "FirstFinTech",
        location: "أكادير، المغرب",
        description:
          "تطوير الواجهة الخلفية لمنصة GRC ذكية (الحوكمة والمخاطر والامتثال): وحدة الامتثال، تأمين واجهات REST ودمج اختبارات الاختراق.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Swagger",
        ],
      },
    ],
  },
  tam: {
    items: [
      {
        period: "Juillet 2026 — Septembre 2026",
        role: "ⴰⵏⴻⴳⴳⴰⴼ ⵏ Backend ⴷ ⵜⴰⵎⴰⵏⵜ — ⴰⵙⴻⵏⴼⴰⵔ ⵏ ⵜⴳⵉⵔⴰ ⵏ ⴰⵙⴻⴳⴳⴰⵙ",
        company: "FirstFinTech",
        location: "ⴰⴳⴰⴷⵉⵔ, ⵍⵎⵖⵔⵉⴱ",
        description:
          "ⴰⵙⵏⴼⵓ ⵏ backend ⵏ plateforme ⵜⴰⵣⴳⵣⴰⵡⵜ GRC (Governance, Risk ⴷ Compliance): ⵜⴰⵎⵓⵔⵜ ⵏ compliance, ⴰⵙⴻⵔⵔⴻⵃ ⵏ APIs REST ⴷ ⵓⵣⴻⴷⴷⵓⴽⴻⵍ ⵏ ⵜⵉⴽⵙⴰⵢ ⵏ penetration.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Swagger",
        ],
      },
    ],
  },
};
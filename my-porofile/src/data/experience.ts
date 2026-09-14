import type { Lang } from "../i18n";
import type { ExperienceItem } from "./types";

export interface ExperienceData {
  items: ExperienceItem[];
}

export const experience: Record<Lang, ExperienceData> = {
  fr: {
    items: [
      {
        period: "Février 2026 – Juin 2026",
        role: "Stagiaire Ingénieur Logiciel — Projet de fin d'études",
        company: "Company Name",
        location: "Sousse, Tunisie",
        description:
          "Conception et développement d'une plateforme intelligente de détection des fraudes bancaires et de surveillance des transactions financières.",
        technologies: [
          "Java",
          "Spring Boot",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "Docker",
          "Kubernetes",
          "Jenkins",
        ],
      },
      {
        period: "Juillet 2025 – Août 2025",
        role: "Stagiaire Développeur Full Stack",
        company: "Agency Name",
        location: "Tunis, Tunisie",
        description:
          "Développement d'une plateforme d'orientation scolaire intégrant un chatbot intelligent pour fournir des recommandations personnalisées.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        period: "Juillet 2024 – Août 2024",
        role: "Stagiaire Développeur Web",
        company: "Company Name",
        location: "Sousse, Tunisie",
        description:
          "Développement d'une plateforme e-commerce responsive avec navigation, affichage des produits et gestion du panier.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  en: {
    items: [
      {
        period: "February 2026 – June 2026",
        role: "Software Engineer Intern — Final year project",
        company: "Company Name",
        location: "Sousse, Tunisia",
        description:
          "Design and development of an intelligent platform for detecting bank fraud and monitoring financial transactions.",
        technologies: [
          "Java",
          "Spring Boot",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "Docker",
          "Kubernetes",
          "Jenkins",
        ],
      },
      {
        period: "July 2025 – August 2025",
        role: "Full Stack Developer Intern",
        company: "Agency Name",
        location: "Tunis, Tunisia",
        description:
          "Development of a student guidance platform integrating an intelligent chatbot to provide personalized recommendations.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
      },
      {
        period: "July 2024 – August 2024",
        role: "Web Developer Intern",
        company: "Company Name",
        location: "Sousse, Tunisia",
        description:
          "Development of a responsive e-commerce platform with navigation, product display and cart management.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  es: {
    items: [
      {
        period: "Febrero 2026 – Junio 2026",
        role: "Ingeniero de Software en prácticas — Proyecto de fin de estudios",
        company: "Company Name",
        location: "Sousse, Túnez",
        description:
          "Diseño y desarrollo de una plataforma inteligente de detección de fraudes bancarios y monitorización de transacciones financieras.",
        technologies: [
          "Java",
          "Spring Boot",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "Docker",
          "Kubernetes",
          "Jenkins",
        ],
      },
      {
        period: "Julio 2025 – Agosto 2025",
        role: "Desarrollador Full Stack en prácticas",
        company: "Agency Name",
        location: "Túnez, Túnez",
        description:
          "Desarrollo de una plataforma de orientación escolar con un chatbot inteligente para ofrecer recomendaciones personalizadas.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        period: "Julio 2024 – Agosto 2024",
        role: "Desarrollador Web en prácticas",
        company: "Company Name",
        location: "Sousse, Túnez",
        description:
          "Desarrollo de una plataforma e-commerce responsiva con navegación, visualización de productos y gestión del carrito.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  ar: {
    items: [
      {
        period: "فبراير 2026 – يونيو 2026",
        role: "متدرب هندسة برمجيات — مشروع التخرج",
        company: "Company Name",
        location: "سوسة، تونس",
        description:
          "تصميم وتطوير منصة ذكية لكشف الاحتيال المصرفي ومراقبة المعاملات المالية.",
        technologies: [
          "Java",
          "Spring Boot",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "Docker",
          "Kubernetes",
          "Jenkins",
        ],
      },
      {
        period: "يوليو 2025 – أغسطس 2025",
        role: "متدرب تطوير Full Stack",
        company: "Agency Name",
        location: "تونس، تونس",
        description:
          "تطوير منصة توجيه مدرسي تدمج روبوت محادثة ذكي لتقديم توصيات مخصصة.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
      },
      {
        period: "يوليو 2024 – أغسطس 2024",
        role: "متدرب تطوير ويب",
        company: "Company Name",
        location: "سوسة، تونس",
        description:
          "تطوير منصة تجارة إلكترونية متجاوبة مع تنقل وعرض منتجات وإدارة سلة.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  tam: {
    items: [
      {
        period: "Février 2026 – Juin 2026",
        role: "ⴰⵏⵙⴻⵍⵎ software — ⴰⵙⴻⵏⴼⴰⵔ ⵏ ⵜⴰⴳⴳⴰⵔⴰ ⵏ ⴰⵙⴻⵍⵎⴻⴷ",
        company: "Company Name",
        location: "Sousse, Tunisie",
        description:
          "ⴰⵙⵏⵓⵍⴼⵓ ⴷ ⴰⵙⵏⴼⵓ ⵏ plateforme ⵜⴰⵣⴳⵣⴰⵡⵜ ⵏ ⵓⴽⴻⵔⴹ ⵏ ⵜⵜⴰⵡⴰⵢⵉⵏ ⴷ ⵓⵡⵉⵍ ⵏ ⵜⵜⴰⵔⴰⵏⵙⵉⵜⵓⵎⵉⵏⵓⵙ ⵉⵇⴹⵉⵛⵉⵏ.",
        technologies: [
          "Java",
          "Spring Boot",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "Docker",
          "Kubernetes",
          "Jenkins",
        ],
      },
      {
        period: "Juillet 2025 – Août 2025",
        role: "ⴰⵏⴻⴳⴳⴰⴼ Full Stack",
        company: "Agency Name",
        location: "Tunis, Tunisie",
        description:
          "ⴰⵙⵏⴼⵓ ⵏ plateforme ⵏ ⵓⵡⴰⵏⴻⴽ ⵏ ⵓⵙⵏⴽⵔⵓ ⵙ chatbot ⵢⴻⵙⵙⴻⵥⴳⴰⵏ ⵉⵡⴰⴽⴽⴻⵏ ⴰⴷ ⴷ-ⴷⵢⴻⴼⴽ ⵜⵉⵏⵛⵓⵎⵉⵏ ⵜⵉⵏⵓⴼⵉⵏ.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        period: "Juillet 2024 – Août 2024",
        role: "ⴰⵏⴻⴳⴳⴰⴼ ⵡⴻⴱ",
        company: "Company Name",
        location: "Sousse, Tunisie",
        description:
          "ⴰⵙⵏⴼⵓ ⵏ plateforme ⵏ e-commerce ⵜⴻⵔⵉⴳⵉⵏ ⵙ ⵜⴰⵏⴻⴳⴳⴰⵔⵓⵜ, ⴰⵙⴼⴰⵎⵉ ⵏ ⵉⵎⴽⴻⵏ ⴷ ⵓⴼⵔⴰⴽ ⵏ panier.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
};
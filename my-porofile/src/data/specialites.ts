import type { Lang } from "../i18n";
import type { SkillCategoryItem } from "./types";

export interface SpecialiteData {
  categories: SkillCategoryItem[];
}

export const specialites: Record<Lang, SpecialiteData> = {
  fr: {
    categories: [
      {
        title: "Backend",
        description: "Développement et sécurisation d'API REST et d'applications backend.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JPA / Hibernate",
          "Python",
          "FastAPI",
          "Laravel",
          "ASP.NET Core",
          "Node.js",
        ],
      },
      {
        title: "Frontend",
        description: "Création d'interfaces web modernes, responsives et intuitives.",
        skills: [
          "React.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "Bases de données",
        description: "Conception, manipulation et intégration de bases de données.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "Automatisation, conteneurisation, déploiement et supervision.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Git",
          "GitHub",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ],
      },
      {
        title: "Intelligence artificielle",
        description: "Développement et intégration de solutions intelligentes.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "Architecture",
        description: "Conception d'architectures logicielles modernes.",
        skills: ["Microservices", "API REST", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  en: {
    categories: [
      {
        title: "Backend",
        description: "Development and security of REST APIs and backend applications.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JPA / Hibernate",
          "Python",
          "FastAPI",
          "Laravel",
          "ASP.NET Core",
          "Node.js",
        ],
      },
      {
        title: "Frontend",
        description: "Building modern, responsive and intuitive web interfaces.",
        skills: [
          "React.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "Databases",
        description: "Design, manipulation and integration of databases.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "Automation, containerization, deployment and monitoring.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Git",
          "GitHub",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ],
      },
      {
        title: "Artificial Intelligence",
        description: "Development and integration of intelligent solutions.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "Architecture",
        description: "Design of modern software architectures.",
        skills: ["Microservices", "REST API", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  es: {
    categories: [
      {
        title: "Backend",
        description: "Desarrollo y seguridad de APIs REST y aplicaciones backend.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JPA / Hibernate",
          "Python",
          "FastAPI",
          "Laravel",
          "ASP.NET Core",
          "Node.js",
        ],
      },
      {
        title: "Frontend",
        description: "Creación de interfaces web modernas, responsivas e intuitivas.",
        skills: [
          "React.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "Bases de datos",
        description: "Diseño, manipulación e integración de bases de datos.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "Automatización, contenedores, despliegue y monitorización.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Git",
          "GitHub",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ],
      },
      {
        title: "Inteligencia artificial",
        description: "Desarrollo e integración de soluciones inteligentes.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "Arquitectura",
        description: "Diseño de arquitecturas de software modernas.",
        skills: ["Microservicios", "API REST", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  ar: {
    categories: [
      {
        title: "Backend",
        description: "تطوير وتأمين واجهات REST وتطبيقات الواجهة الخلفية.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JPA / Hibernate",
          "Python",
          "FastAPI",
          "Laravel",
          "ASP.NET Core",
          "Node.js",
        ],
      },
      {
        title: "Frontend",
        description: "بناء واجهات ويب حديثة ومتجاوبة وبديهية.",
        skills: [
          "React.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "قواعد البيانات",
        description: "تصميم ومعالجة ودمج قواعد البيانات.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "الأتمتة، التغليف، النشر والمراقبة.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Git",
          "GitHub",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ],
      },
      {
        title: "الذكاء الاصطناعي",
        description: "تطوير ودمج الحلول الذكية.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "البنية المعمارية",
        description: "تصميم معماريات برمجيات حديثة.",
        skills: ["Microservices", "REST API", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  tam: {
    categories: [
      {
        title: "Backend",
        description: "ⴰⵙⵏⴼⵓ ⴷ ⵓⵙⴻⵔⵔⴻⵃ ⵏ APIs REST ⴷ ⵉⵄⴰⵡⵏⴻⵏ ⵏ backend.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JPA / Hibernate",
          "Python",
          "FastAPI",
          "Laravel",
          "ASP.NET Core",
          "Node.js",
        ],
      },
      {
        title: "Frontend",
        description: "ⴰⵙⵏⵓⵍⴼⵓ ⵏ ⵓⴷⵎⴰⵡⴻⵏ ⵏ ⵡⴻⴱ ⵜⵉⵏⵓⵔⵎⴰⵡⵉⵏ, ⵜⵉⵔⴰⴳⴰⵏⵉⵏ ⴷ ⵉⴼⵀⵓⵎⵉⵏⴻⵏ.",
        skills: [
          "React.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "ⵜⵉⴱⴷⴰⵔⵉⵏ ⵏ ⵉⵙⵙⴻⴼⴽⴰⵎ",
        description: "ⴰⵙⵏⵓⵍⴼⵓ, ⴰⵙⴻⴱⴷⴻⵍ ⴷ ⵓⵣⴻⴷⴷⵓⴽⴻⵍ ⵏ ⵜⵉⴱⴷⴰⵔⵉⵏ ⵏ ⵉⵙⵙⴻⴼⴽⴰⵎ.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "Automatisation, ⵜⴰⵅⴰⵔⵙⴰ ⵏ container, ⴰⴷⴻⴱⵍⵓⵎⴻⵏⵜ ⴷ ⵓⵡⵉⵍ.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Git",
          "GitHub",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ],
      },
      {
        title: "ⵜⴰⵄⵇⵉⵏⵜ ⵜⴰⵜⴼⵔⴰⵡⵉⵜ",
        description: "ⴰⵙⵏⴼⵓ ⴷ ⵓⵣⴻⴷⴷⵓⴽⴻⵍ ⵏ ⵜⵉⴼⵔⴰⵜⵉⵏ ⵜⵉⵣⴻⴳⴳⴰⵏⵉⵏ.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "ⵜⵉⵙⵏⴰⴼⴰⵔⵉⵏ ⵜⵉⵏⵓⵔⵎⴰⵡⵉⵏ",
        description: "ⴰⵙⵏⵓⵍⴼⵓ ⵏ ⵜⵉⵙⵏⴰⴼⴰⵔⵉⵏ ⵏ software ⵜⵉⵏⵓⵔⵎⴰⵡⵉⵏ.",
        skills: ["Microservices", "API REST", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
};
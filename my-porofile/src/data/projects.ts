import type { Lang } from "../i18n";
import type { ProjectItem } from "./types";

export interface ProjectsData {
  items: ProjectItem[];
}

export const projects: Record<Lang, ProjectsData> = {
  fr: {
    items: [
      {
        title: "NovaBank",
        subtitle: "Détection intelligente des fraudes bancaires",
        description:
          "Plateforme de surveillance des transactions financières capable d'évaluer le risque de fraude en temps réel, de bloquer les transactions suspectes et de générer automatiquement des alertes.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "XGBoost",
          "Docker",
          "Kubernetes",
        ],
        featured: true,
      },
      {
        title: "Plateforme GRC",
        subtitle: "Gouvernance, risque et conformité",
        description:
          "Développement backend d'une plateforme intelligente GRC — module conformité et intégration des tests de pénétration — avec Java, Spring Boot et conteneurisation Docker.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "Swagger"],
        featured: true,
      },
      {
        title: "GuideApp",
        subtitle: "Plateforme intelligente d'orientation scolaire",
        description:
          "Application web intégrant un test de personnalité MBTI et un chatbot intelligent pour proposer une orientation scolaire personnalisée.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        title: "E-Commerce Platform",
        subtitle: "Plateforme e-commerce responsive",
        description:
          "Site e-commerce responsive permettant de consulter les produits, naviguer entre les catégories et gérer un panier d'achats.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      },
      {
        title: "Book Manager",
        subtitle: "Application de gestion de bibliothèque",
        description:
          "Plateforme permettant de gérer les livres, les auteurs, les catégories, les utilisateurs et les emprunts avec des fonctionnalités CRUD et de recherche.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  en: {
    items: [
      {
        title: "NovaBank",
        subtitle: "Intelligent bank fraud detection",
        description:
          "Financial transaction monitoring platform capable of assessing fraud risk in real time, blocking suspicious transactions and automatically generating alerts.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "XGBoost",
          "Docker",
          "Kubernetes",
        ],
        featured: true,
      },
      {
        title: "GRC Platform",
        subtitle: "Governance, risk and compliance",
        description:
          "Backend development of an intelligent GRC platform — compliance module and penetration testing integration — with Java, Spring Boot and Docker containerization.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "Swagger"],
        featured: true,
      },
      {
        title: "GuideApp",
        subtitle: "Smart student guidance platform",
        description:
          "Web application integrating an MBTI personality test and an intelligent chatbot to recommend personalized academic orientation.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
      },
      {
        title: "E-Commerce Platform",
        subtitle: "Responsive e-commerce platform",
        description:
          "Responsive e-commerce website allowing users to browse products, navigate between categories and manage a shopping cart.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      },
      {
        title: "Book Manager",
        subtitle: "Library management application",
        description:
          "Platform to manage books, authors, categories, users and loans with CRUD and search functionality.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  es: {
    items: [
      {
        title: "NovaBank",
        subtitle: "Detección inteligente de fraudes bancarios",
        description:
          "Plataforma de monitorización de transacciones financieras capaz de evaluar el riesgo de fraude en tiempo real, bloquear transacciones sospechosas y generar alertas automáticamente.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "XGBoost",
          "Docker",
          "Kubernetes",
        ],
        featured: true,
      },
      {
        title: "Plataforma GRC",
        subtitle: "Gobernanza, riesgo y cumplimiento",
        description:
          "Desarrollo backend de una plataforma inteligente GRC — módulo de cumplimiento e integración de pruebas de penetración — con Java, Spring Boot y contenedores Docker.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "Swagger"],
        featured: true,
      },
      {
        title: "GuideApp",
        subtitle: "Plataforma inteligente de orientación escolar",
        description:
          "Aplicación web que integra un test de personalidad MBTI y un chatbot inteligente para recomendar una orientación académica personalizada.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        title: "E-Commerce Platform",
        subtitle: "Plataforma e-commerce responsiva",
        description:
          "Sitio e-commerce responsivo para consultar productos, navegar entre categorías y gestionar un carrito de compras.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      },
      {
        title: "Book Manager",
        subtitle: "Aplicación de gestión de biblioteca",
        description:
          "Plataforma para gestionar libros, autores, categorías, usuarios y préstamos con funciones CRUD y búsqueda.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  ar: {
    items: [
      {
        title: "NovaBank",
        subtitle: "كشف ذكي للاحتيال المصرفي",
        description:
          "منصة لمراقبة المعاملات المالية قادرة على تقييم مخاطر الاحتيال في الوقت الفعلي، وحظر المعاملات المشبوهة وإنشاء التنبيهات تلقائياً.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "XGBoost",
          "Docker",
          "Kubernetes",
        ],
        featured: true,
      },
      {
        title: "منصة GRC",
        subtitle: "الحوكمة والمخاطر والامتثال",
        description:
          "تطوير واجهة خلفية لمنصة GRC ذكية — وحدة الامتثال ودمج اختبارات الاختراق — بـ Java وSpring Boot وحاويات Docker.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "Swagger"],
        featured: true,
      },
      {
        title: "GuideApp",
        subtitle: "منصة توجيه مدرسية ذكية",
        description:
          "تطبيق ويب يدمج اختبار شخصية MBTI وروبوت محادثة ذكي لاقتراح توجيه أكاديمي مخصص.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
      },
      {
        title: "E-Commerce Platform",
        subtitle: "منصة تجارة إلكترونية متجاوبة",
        description:
          "موقع تجارة إلكترونية متجاوب يتيح تصفح المنتجات والتنقل بين الفئات وإدارة سلة التسوق.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      },
      {
        title: "Book Manager",
        subtitle: "تطبيق إدارة مكتبة",
        description:
          "منصة لإدارة الكتب والمؤلفين والفئات والمستخدمين والإعارات مع وظائف CRUD والبحث.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  tam: {
    items: [
      {
        title: "NovaBank",
        subtitle: "ⴰⵙⴰⵎⵎⴻⵅ ⵏ ⵓⴽⴻⵔⴹ ⵏ ⵃⴰⵡⴰⵢⵉⵏ ⵏ ⴱⴰⵏⴽ",
        description:
          "ⴰⵙⴻⴱⵜⴻⵔ ⵏ ⵓⵡⵉⵍ ⵏ ⵜⵜⴰⵔⴰⵏⵙⵉⵜⵓⵎⵉⵏⵓⵙ ⵜⵉⵇⴹⵉⵛⵉⵏ ⵉⵣⴷⴰⵔⴻⵏ ⴰⴷ ⵜⵃⵙⴻⴱ ⴰⵣⴻⵔ ⵏ ⵓⴽⴻⵔⴹ ⵖⴻⴼ ⵜⵙⴰⵡⴰⵏⵜ, ⴰⴷ ⵜⵛⴻⵔⵔⴻⵇ ⵜⵜⴰⵔⴰⵏⵙⵉⵜⵓⵎⵉⵏⵓⵙ ⵜⵓⵔⴱⵉⴷⵉⵏ ⴷ ⴰⴷ ⴷ-ⵜⴻⴳ ⴰⵍⵉⵔⵎⴻ.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Angular",
          "PostgreSQL",
          "FastAPI",
          "XGBoost",
          "Docker",
          "Kubernetes",
        ],
        featured: true,
      },
      {
        title: "ⴰⵙⴻⵏⴼⴰⵔ GRC",
        subtitle: "ⴰⵙⴻⵏⵜⴰⵔⵔⴻⵖ, ⴰⵣⴻⵔ ⴷ ⵓⵙⵄⴰⴷ",
        description:
          "ⴰⵙⵏⴼⵓ ⵏ backend ⵏ plateforme ⵜⴰⵣⴳⵣⴰⵡⵜ GRC — ⵜⴰⵎⵓⵔⵜ ⵏ compliance ⴷ ⵓⵣⴻⴷⴷⵓⴽⴻⵍ ⵏ ⵜⵉⴽⵙⴰⵢ ⵏ penetration — ⵙ Java, Spring Boot ⴷ Docker.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "Swagger"],
        featured: true,
      },
      {
        title: "GuideApp",
        subtitle: "ⴰⵙⴻⴱⵜⴻⵔ ⵜⴰⴼⵔⵓⵜ ⵏ ⵓⵡⴰⵏⴻⴽ ⵏ ⵓⵙⵏⴽⵔⵓ",
        description:
          "ⴰⵙⴻⴱⵜⴻⵔ ⵏ ⵡⴻⴱ ⵢⴻⵜⵜⴻⵎⵍⵉⵍⵉⵏ ⴰⴽⴽⴻⴷ MBTI ⵜⴻⵙⵜ ⴷ chatbot ⵢⴻⵙⵙⴻⵥⴳⴰⵏ ⵉⵡⴰⴽⴽⴻⵏ ⴰⴷ ⴷ-ⴷⵢⴻⴼⴽ ⵜⴰⵏⴼⵓⵙ ⵏ ⵓⵙⴻⵏⴼⴻⵍ.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        title: "E-Commerce Platform",
        subtitle: "ⴰⵙⴻⴱⵜⴻⵔ ⵏ e-commerce ⵜⴻⵔⵉⴳⵉⵏ",
        description:
          "ⴰⵙⴻⴱⵜⴻⵔ ⵏ e-commerce ⵜⴻⵔⵉⴳⵉⵏ ⵉⵡⴰⴽⴻⵏ ⴰⴷ ⵡⴰⵍⵉⵏ ⵉⵎⴽⴻⵏ, ⴰⴷ ⵏⵏⴻⵇⵔⴻⵏ ⵉⵎⴰⵏ ⵜⵉⴳⴻⵊⴷⴰ ⴷ ⴰⵙⴻⴼⴰⵎⵎⵉ ⵏ panier.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      },
      {
        title: "Book Manager",
        subtitle: "ⴰⵙⴻⴱⵜⴻⵔ ⵏ ⵓⴼⵔⴰⴽ ⵏ ⵜⵉⴱⴱⵓⴽⵙⵉⵏ",
        description:
          "ⴰⵙⴻⴱⵜⴻⵔ ⵉ ⵓⴼⵔⴰⴽ ⵏ ⵜⴻⴽⵜⴰⴱⵉⵏ, ⵉⵎⴻⵖⵔⴰⴼⴻⵏ, ⵜⵉⴳⴻⵊⴷⴰ, ⵉⵙⴻⴳⴷⴰⵙⴻⵏ ⴷ ⵜⵎⵏⵓⵏⵜⵉⵏ ⵙ CRUD ⴷ ⵓⵏⴰⴷⵉ.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
};
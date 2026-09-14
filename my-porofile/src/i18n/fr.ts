import type { Translation } from "./types";

export const fr: Translation = {
  meta: {
    langName: "Français",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    formation: "Formation",
    certifications: "Certifications",
    contact: "Contact",
    hireMe: "Contact",
  },
  theme: {
    toDark: "Passer en mode sombre",
    toLight: "Passer en mode clair",
  },
  langSwitcher: {
    label: "Changer de langue",
  },
  hero: {
    welcome: "Bienvenue sur mon portfolio",
    hello: "Bonjour, je suis",
    title: "Développeur Full Stack | Backend Java Spring Boot & Frontend React",
    description:
      "Développeur Full Stack spécialisé en développement backend Java Spring Boot et frontend React. Je conçois des applications web performantes, sécurisées et maintenables avec des architectures modernes.",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
  },
  about: {
    label: "Découvrez mon profil",
    heading: "Développement Full Stack, architectures modernes et solutions performantes",
    intro:
      "Développeur Full Stack spécialisé en Java, Spring Boot et React, je conçois des applications web performantes, sécurisées et maintenables.",
    summary: [
      "Passionné par l'ingénierie logicielle, je possède une solide expérience en développement backend (Java, Spring Boot, Node.js) et frontend (React, Angular, TypeScript).",
      "J'accorde une grande importance aux bonnes pratiques : architecture microservices, APIs REST sécurisées (Spring Security, JWT), tests, conteneurisation Docker, orchestration Kubernetes et pipelines CI/CD.",
      "Curieux et rigoureux, j'aime relever des défis techniques et collaborer au sein d'équipes agiles pour livrer des produits de qualité.",
    ],
    highlights: [
      "Développement backend Java, Spring Boot et Node.js",
      "Développement frontend React, Angular et TypeScript",
      "Conception et sécurisation d'API REST avec Spring Security et JWT",
      "DevOps : Docker, Kubernetes, Jenkins, CI/CD",
      "Bases de données : PostgreSQL, MySQL, MongoDB",
      "Travail en méthodologies Agiles (Scrum)",
    ],
    cards: {
      formation: {
        title: "Formation",
        value: "Ingénieur en Génie Logiciel",
      },
      specialty: {
        title: "Spécialité",
        value: "Java, Spring Boot, React et architectures modernes",
      },
      ai: {
        title: "Intelligence artificielle",
        value: "Machine Learning, XGBoost et AI générative",
      },
      goal: {
        title: "Objectif",
        value: "CDI, missions freelance et collaborations",
      },
    },
  },
  skills: {
    label: "Technologies et savoir-faire",
    title: "Mes compétences techniques",
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
  projects: {
    label: "Mes réalisations",
    title: "Projets principaux",
    featuredBadge: "Projet principal",
    github: "GitHub",
    demo: "Démo live",
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
        githubUrl: "https://github.com/yourprofile/novabank",
        featured: true,
      },
      {
        title: "GuideApp",
        subtitle: "Plateforme intelligente d'orientation scolaire",
        description:
          "Application web intégrant un test de personnalité MBTI et un chatbot intelligent pour proposer une orientation scolaire personnalisée.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
        githubUrl: "https://github.com/yourprofile/guideapp",
      },
      {
        title: "E-Commerce Platform",
        subtitle: "Plateforme e-commerce responsive",
        description:
          "Site e-commerce responsive permettant de consulter les produits, naviguer entre les catégories et gérer un panier d'achats.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/yourprofile/ecommerce",
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
  experience: {
    label: "Mon évolution professionnelle",
    title: "Expériences professionnelles",
    columnTitle: "Expériences professionnelles",
    technologiesLabel: "Technologies",
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
  formation: {
    label: "Mon parcours académique",
    title: "Formation",
    columnTitle: "Formation",
    items: [
      {
        period: "Septembre 2023 – Juillet 2026",
        degree: "Diplôme National d'Ingénieur en Génie Logiciel",
        school: "École Polytechnique Internationale — EPI",
        location: "Sousse, Tunisie",
        distinction: "Mention : Excellent",
      },
      {
        period: "Septembre 2020 – Juillet 2023",
        degree: "Licence Nationale en Informatique",
        school: "Institut Supérieur d'Informatique",
        location: "Monastir, Tunisie",
        distinction: "Mention : Très Bien",
      },
    ],
  },
  certifications: {
    label: "Qualifications supplémentaires",
    title: "Certifications et langues",
    certsTitle: "Certifications",
    languagesTitle: "Langues",
    personalSkillsTitle: "Compétences personnelles",
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
  contact: {
    label: "Travaillons ensemble",
    title: "Contactez-moi",
    heading: "Parlons de votre projet",
    description:
      "Vous avez une opportunité, une mission freelance ou un projet à réaliser ? N'hésitez pas à me contacter.",
    email: "E-mail",
    phone: "Téléphone",
    location: "Localisation",
    linkedin: "LinkedIn",
    github: "GitHub",
    form: {
      name: "Nom complet",
      namePlaceholder: "Votre nom",
      email: "Adresse e-mail",
      emailPlaceholder: "votre@email.com",
      subject: "Sujet",
      subjectPlaceholder: "Proposition de collaboration",
      message: "Message",
      messagePlaceholder: "Écrivez votre message...",
      submit: "Envoyer le message",
    },
  },
  footer: {
    tagline: "Développeur Full Stack | Backend Java Spring Boot & Frontend React",
    navigation: "Navigation",
    followMe: "Retrouvez-moi",
    builtWith: "Portfolio développé avec React",
  },
  notFound: {
    title: "Page introuvable",
    message: "La page demandée n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
};
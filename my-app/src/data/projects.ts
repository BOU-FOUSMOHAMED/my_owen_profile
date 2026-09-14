export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
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
];

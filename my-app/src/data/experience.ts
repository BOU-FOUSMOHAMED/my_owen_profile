export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
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
];

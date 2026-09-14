export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Backend",
    description: "Développement et sécurisation d'API REST et d'applications backend.",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "JPA / Hibernate" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Laravel" },
      { name: "ASP.NET Core" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Frontend",
    description: "Création d'interfaces web modernes, responsives et intuitives.",
    skills: [
      { name: "React.js" },
      { name: "Angular" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Bases de données",
    description: "Conception, manipulation et intégration de bases de données.",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "MongoDB" },
      { name: "Supabase" },
    ],
  },
  {
    title: "DevOps",
    description: "Automatisation, conteneurisation, déploiement et supervision.",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "CI/CD" },
      { name: "Prometheus" },
      { name: "Grafana" },
    ],
  },
  {
    title: "Intelligence artificielle",
    description: "Développement et intégration de solutions intelligentes.",
    skills: [
      { name: "Machine Learning" },
      { name: "XGBoost" },
      { name: "Generative AI" },
      { name: "NLP" },
      { name: "OpenAI API" },
    ],
  },
  {
    title: "Architecture",
    description: "Conception d'architectures logicielles modernes.",
    skills: [
      { name: "Microservices" },
      { name: "API REST" },
      { name: "JWT" },
      { name: "MVC" },
      { name: "Agile Scrum" },
    ],
  },
];

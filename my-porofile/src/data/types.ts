export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  location: string;
  distinction?: string;
}

export interface SkillCategoryItem {
  title: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
}

export type ProjectPhaseIcon =
  | "monitor"
  | "api"
  | "shield"
  | "brain"
  | "database"
  | "cloud"
  | "bot"
  | "card"
  | "layers"
  | "zap"
  | "book";

export interface ProjectPhase {
  icon: ProjectPhaseIcon;
  tag: string;
  title: string;
  how: string;
  problems: string[];
  solutions: string[];
  tech: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
}

export type BlogCategory = "dev" | "devops" | "security";

export interface BlogBlock {
  flow?: { label: string }[];
  codeLang?: string;
  code?: string[];
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  content: string[];
  blocks?: BlogBlock[];
}
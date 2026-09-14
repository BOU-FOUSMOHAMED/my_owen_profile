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

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
}
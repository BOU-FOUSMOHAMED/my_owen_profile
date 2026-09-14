export interface Certification {
  name: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export const certifications: Certification[] = [
  { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
  { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
  { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
  { name: "HTML5, CSS3, JavaScript et SQL", issuer: "Udemy" },
];

export const languages: Language[] = [
  { name: "Arabe", level: "Langue maternelle", percentage: 100 },
  { name: "Français", level: "Niveau professionnel", percentage: 85 },
  { name: "Anglais", level: "Niveau intermédiaire — B2", percentage: 70 },
];

export const personalSkills = [
  "Esprit d'analyse",
  "Résolution de problèmes",
  "Travail en équipe",
  "Communication",
  "Adaptabilité",
  "Autonomie",
];

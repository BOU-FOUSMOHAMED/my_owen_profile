export interface Education {
  period: string;
  degree: string;
  school: string;
  location: string;
  distinction?: string;
}

export const education: Education[] = [
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
];

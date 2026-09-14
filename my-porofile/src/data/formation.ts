import type { Lang } from "../i18n";
import type { EducationItem } from "./types";

export interface FormationData {
  items: EducationItem[];
}

export const formation: Record<Lang, FormationData> = {
  fr: {
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
  en: {
    items: [
      {
        period: "September 2023 – July 2026",
        degree: "National Engineering Diploma in Software Engineering",
        school: "International Polytechnic School — EPI",
        location: "Sousse, Tunisia",
        distinction: "Grade: Excellent",
      },
      {
        period: "September 2020 – July 2023",
        degree: "National Bachelor's Degree in Computer Science",
        school: "Higher Institute of Computer Science",
        location: "Monastir, Tunisia",
        distinction: "Grade: Very Good",
      },
    ],
  },
  es: {
    items: [
      {
        period: "Septiembre 2023 – Julio 2026",
        degree: "Diploma Nacional de Ingeniería en Ingeniería de Software",
        school: "Escuela Politécnica Internacional — EPI",
        location: "Sousse, Túnez",
        distinction: "Mención: Sobresaliente",
      },
      {
        period: "Septiembre 2020 – Julio 2023",
        degree: "Licenciatura Nacional en Informática",
        school: "Instituto Superior de Informática",
        location: "Monastir, Túnez",
        distinction: "Mención: Muy Bien",
      },
    ],
  },
  ar: {
    items: [
      {
        period: "سبتمبر 2023 – يوليو 2026",
        degree: "شهادة مهندس دولة في هندسة البرمجيات",
        school: "المدرسة البولتيكية الدولية — EPI",
        location: "سوسة، تونس",
        distinction: "ملاحظة: ممتاز",
      },
      {
        period: "سبتمبر 2020 – يوليو 2023",
        degree: "ليسانس في علوم الحاسوب",
        school: "المعهد العالي للعلوم الإنسانية",
        location: "المنستير، تونس",
        distinction: "ملاحظة: جيد جداً",
      },
    ],
  },
  tam: {
    items: [
      {
        period: "Septembre 2023 – Juillet 2026",
        degree: "Arrate ⵏ ⵜⵉⵎⵉⵔⴰ ⵏ ⵜⴻⴼⵅⵉⵔⵜⵉⵏ ⵏ software",
        school: "Ecole Polytechnique Internationale — EPI",
        location: "Sousse, Tunisie",
        distinction: "ⵜⵉⵃⵔⵓⴽⵉⵎ: Excellent",
      },
      {
        period: "Septembre 2020 – Juillet 2023",
        degree: "Licence ⵏ informatique",
        school: "Institut Supérieur d'Informatique",
        location: "Monastir, Tunisie",
        distinction: "ⵜⵉⵃⵔⵓⴽⵉⵎ: Très Bien",
      },
    ],
  },
};
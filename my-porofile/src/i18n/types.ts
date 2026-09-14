export interface CardInfo {
  title: string;
  value: string;
}

export interface Translation {
  meta: {
    langName: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    formation: string;
    certifications: string;
    contact: string;
    hireMe: string;
  };
  theme: {
    toDark: string;
    toLight: string;
  };
  langSwitcher: {
    label: string;
  };
  hero: {
    welcome: string;
    hello: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    label: string;
    heading: string;
    intro: string;
    summary: string[];
    highlights: string[];
    cards: {
      formation: CardInfo;
      specialty: CardInfo;
      ai: CardInfo;
      goal: CardInfo;
    };
  };
  skills: {
    label: string;
    title: string;
  };
  projects: {
    label: string;
    title: string;
    featuredBadge: string;
    github: string;
    demo: string;
  };
  experience: {
    label: string;
    title: string;
    columnTitle: string;
    technologiesLabel: string;
  };
  formation: {
    label: string;
    title: string;
    columnTitle: string;
  };
  certifications: {
    label: string;
    title: string;
    certsTitle: string;
    languagesTitle: string;
    personalSkillsTitle: string;
  };
  contact: {
    label: string;
    title: string;
    heading: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    navigation: string;
    followMe: string;
    builtWith: string;
  };
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
}
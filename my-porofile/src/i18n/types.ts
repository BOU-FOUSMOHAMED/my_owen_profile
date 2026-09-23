export interface FocusItem {
  term: string;
  detail: string;
}

export interface PrincipleItem {
  num: string;
  title: string;
  text: string;
}

export interface Translation {
  meta: {
    langName: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    formation: string;
    contact: string;
  };
  theme: {
    toDark: string;
    toLight: string;
  };
  langSwitcher: {
    label: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cardEyebrow: string;
    focus: FocusItem[];
    stats: {
      years: string;
      projects: string;
      certs: string;
      yearsLabel: string;
      projectsLabel: string;
      certsLabel: string;
    };
  };
  about: {
    label: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    principlesTitle: string;
    principles: PrincipleItem[];
  };
  skills: {
    label: string;
    title: string;
    intro: string;
  };
  experience: {
    label: string;
    title: string;
    intro: string;
    technologiesLabel: string;
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    featuredBadge: string;
    links: {
      code: string;
      demo: string;
    };
  };
  formation: {
    label: string;
    title: string;
    educationColumn: string;
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
    builtWith: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
}
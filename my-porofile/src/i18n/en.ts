import type { Translation } from "./types";

export const en: Translation = {
  meta: {
    langName: "English",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    formation: "Education",
    certifications: "Certifications",
    contact: "Contact",
    hireMe: "Contact",
  },
  theme: {
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
  },
  langSwitcher: {
    label: "Change language",
  },
  hero: {
    welcome: "Welcome to my portfolio",
    hello: "Hello, I am",
    title: "Full Stack Developer | Java Spring Boot Backend & React Frontend",
    description:
      "Full Stack developer specialized in Java Spring Boot backend and React frontend development. I build performant, secure and maintainable web applications with modern architectures.",
    viewProjects: "View my projects",
    contactMe: "Contact me",
  },
  about: {
    label: "Discover my profile",
    heading: "Full Stack development, modern architectures and high-performance solutions",
    intro:
      "Full Stack developer specialized in Java, Spring Boot and React, I build performant, secure and maintainable web applications.",
    summary: [
      "Passionate about software engineering, I have solid experience in backend development (Java, Spring Boot, Node.js) and frontend (React, Angular, TypeScript).",
      "I strongly value best practices: microservices architecture, secure REST APIs (Spring Security, JWT), testing, Docker containerization, Kubernetes orchestration and CI/CD pipelines.",
      "Curious and rigorous, I enjoy tackling technical challenges and collaborating within agile teams to deliver quality products.",
    ],
    highlights: [
      "Backend development with Java, Spring Boot and Node.js",
      "Frontend development with React, Angular and TypeScript",
      "Design and security of REST APIs with Spring Security and JWT",
      "DevOps: Docker, Kubernetes, Jenkins, CI/CD",
      "Databases: PostgreSQL, MySQL, MongoDB",
      "Agile methodologies (Scrum)",
    ],
    cards: {
      formation: {
        title: "Education",
        value: "Software Engineering Engineer",
      },
      specialty: {
        title: "Specialty",
        value: "Java, Spring Boot, React and modern architectures",
      },
      ai: {
        title: "Artificial Intelligence",
        value: "Machine Learning, XGBoost and Generative AI",
      },
      goal: {
        title: "Goal",
        value: "Full-time job, freelance missions and collaborations",
      },
    },
  },
  skills: {
    label: "Technologies and expertise",
    title: "My technical skills",
    categories: [
      {
        title: "Backend",
        description: "Development and security of REST APIs and backend applications.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JPA / Hibernate",
          "Python",
          "FastAPI",
          "Laravel",
          "ASP.NET Core",
          "Node.js",
        ],
      },
      {
        title: "Frontend",
        description: "Building modern, responsive and intuitive web interfaces.",
        skills: [
          "React.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "Databases",
        description: "Design, manipulation and integration of databases.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "Automation, containerization, deployment and monitoring.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Git",
          "GitHub",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ],
      },
      {
        title: "Artificial Intelligence",
        description: "Development and integration of intelligent solutions.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "Architecture",
        description: "Design of modern software architectures.",
        skills: ["Microservices", "REST API", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  projects: {
    label: "My achievements",
    title: "Main projects",
    featuredBadge: "Main project",
    github: "GitHub",
    demo: "Live demo",
    items: [
      {
        title: "NovaBank",
        subtitle: "Intelligent bank fraud detection",
        description:
          "Financial transaction monitoring platform capable of assessing fraud risk in real time, blocking suspicious transactions and automatically generating alerts.",
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
        subtitle: "Smart student guidance platform",
        description:
          "Web application integrating an MBTI personality test and an intelligent chatbot to recommend personalized academic orientation.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
        githubUrl: "https://github.com/yourprofile/guideapp",
      },
      {
        title: "E-Commerce Platform",
        subtitle: "Responsive e-commerce platform",
        description:
          "Responsive e-commerce website allowing users to browse products, navigate between categories and manage a shopping cart.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/yourprofile/ecommerce",
      },
      {
        title: "Book Manager",
        subtitle: "Library management application",
        description:
          "Platform to manage books, authors, categories, users and loans with CRUD and search functionality.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  experience: {
    label: "My professional journey",
    title: "Professional experience",
    columnTitle: "Professional experience",
    technologiesLabel: "Technologies",
    items: [
      {
        period: "February 2026 – June 2026",
        role: "Software Engineer Intern — Final year project",
        company: "Company Name",
        location: "Sousse, Tunisia",
        description:
          "Design and development of an intelligent platform for detecting bank fraud and monitoring financial transactions.",
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
        period: "July 2025 – August 2025",
        role: "Full Stack Developer Intern",
        company: "Agency Name",
        location: "Tunis, Tunisia",
        description:
          "Development of a student guidance platform integrating an intelligent chatbot to provide personalized recommendations.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
      },
      {
        period: "July 2024 – August 2024",
        role: "Web Developer Intern",
        company: "Company Name",
        location: "Sousse, Tunisia",
        description:
          "Development of a responsive e-commerce platform with navigation, product display and cart management.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  formation: {
    label: "My academic background",
    title: "Education",
    columnTitle: "Education",
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
  certifications: {
    label: "Additional qualifications",
    title: "Certifications and languages",
    certsTitle: "Certifications",
    languagesTitle: "Languages",
    personalSkillsTitle: "Personal skills",
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript and SQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "Arabic", level: "Native language", percentage: 100 },
      { name: "French", level: "Professional proficiency", percentage: 85 },
      { name: "English", level: "Intermediate — B2", percentage: 70 },
    ],
    personalSkills: [
      "Analytical mindset",
      "Problem solving",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Autonomy",
    ],
  },
  contact: {
    label: "Let's work together",
    title: "Contact me",
    heading: "Let's talk about your project",
    description:
      "Do you have an opportunity, a freelance mission or a project to build? Feel free to contact me.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    linkedin: "LinkedIn",
    github: "GitHub",
    form: {
      name: "Full name",
      namePlaceholder: "Your name",
      email: "Email address",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      subjectPlaceholder: "Collaboration proposal",
      message: "Message",
      messagePlaceholder: "Write your message...",
      submit: "Send message",
    },
  },
  footer: {
    tagline: "Full Stack Developer | Java Spring Boot Backend & React Frontend",
    navigation: "Navigation",
    followMe: "Find me",
    builtWith: "Portfolio built with React",
  },
  notFound: {
    title: "Page not found",
    message: "The requested page does not exist or has been moved.",
    backHome: "Back to home",
  },
};
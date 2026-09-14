import type { Translation } from "./types";

export const es: Translation = {
  meta: {
    langName: "Español",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    formation: "Formación",
    certifications: "Certificaciones",
    contact: "Contacto",
    hireMe: "Contacto",
  },
  theme: {
    toDark: "Cambiar a modo oscuro",
    toLight: "Cambiar a modo claro",
  },
  langSwitcher: {
    label: "Cambiar idioma",
  },
  hero: {
    welcome: "Bienvenido a mi portafolio",
    hello: "Hola, soy",
    title: "Desarrollador Full Stack | Backend Java Spring Boot y Frontend React",
    description:
      "Desarrollador Full Stack especializado en desarrollo backend con Java Spring Boot y frontend con React. Diseño aplicaciones web rápidas, seguras y mantenibles con arquitecturas modernas.",
    viewProjects: "Ver mis proyectos",
    contactMe: "Contáctame",
  },
  about: {
    label: "Descubre mi perfil",
    heading: "Desarrollo Full Stack, arquitecturas modernas y soluciones de alto rendimiento",
    intro:
      "Desarrollador Full Stack especializado en Java, Spring Boot y React, diseño aplicaciones web rápidas, seguras y mantenibles.",
    summary: [
      "Apasionado por la ingeniería de software, tengo una sólida experiencia en desarrollo backend (Java, Spring Boot, Node.js) y frontend (React, Angular, TypeScript).",
      "Doy gran importancia a las buenas prácticas: arquitectura de microservicios, APIs REST seguras (Spring Security, JWT), pruebas, contenedores Docker, orquestación con Kubernetes y pipelines CI/CD.",
      "Curioso y riguroso, me gusta asumir retos técnicos y colaborar en equipos ágiles para entregar productos de calidad.",
    ],
    highlights: [
      "Desarrollo backend con Java, Spring Boot y Node.js",
      "Desarrollo frontend con React, Angular y TypeScript",
      "Diseño y seguridad de APIs REST con Spring Security y JWT",
      "DevOps: Docker, Kubernetes, Jenkins, CI/CD",
      "Bases de datos: PostgreSQL, MySQL, MongoDB",
      "Metodologías ágiles (Scrum)",
    ],
    cards: {
      formation: {
        title: "Formación",
        value: "Ingeniero en Ingeniería de Software",
      },
      specialty: {
        title: "Especialidad",
        value: "Java, Spring Boot, React y arquitecturas modernas",
      },
      ai: {
        title: "Inteligencia artificial",
        value: "Machine Learning, XGBoost y IA generativa",
      },
      goal: {
        title: "Objetivo",
        value: "Contrato fijo, misiones freelance y colaboraciones",
      },
    },
  },
  skills: {
    label: "Tecnologías y experiencia",
    title: "Mis habilidades técnicas",
    categories: [
      {
        title: "Backend",
        description: "Desarrollo y seguridad de APIs REST y aplicaciones backend.",
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
        description: "Creación de interfaces web modernas, responsivas e intuitivas.",
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
        title: "Bases de datos",
        description: "Diseño, manipulación e integración de bases de datos.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "Automatización, contenedores, despliegue y monitorización.",
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
        title: "Inteligencia artificial",
        description: "Desarrollo e integración de soluciones inteligentes.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "Arquitectura",
        description: "Diseño de arquitecturas de software modernas.",
        skills: ["Microservicios", "API REST", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  projects: {
    label: "Mis realizaciones",
    title: "Proyectos principales",
    featuredBadge: "Proyecto principal",
    github: "GitHub",
    demo: "Demo en vivo",
    items: [
      {
        title: "NovaBank",
        subtitle: "Detección inteligente de fraudes bancarios",
        description:
          "Plataforma de monitorización de transacciones financieras capaz de evaluar el riesgo de fraude en tiempo real, bloquear transacciones sospechosas y generar alertas automáticamente.",
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
        subtitle: "Plataforma inteligente de orientación escolar",
        description:
          "Aplicación web que integra un test de personalidad MBTI y un chatbot inteligente para recomendar una orientación académica personalizada.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
        githubUrl: "https://github.com/yourprofile/guideapp",
      },
      {
        title: "E-Commerce Platform",
        subtitle: "Plataforma e-commerce responsiva",
        description:
          "Sitio e-commerce responsivo para consultar productos, navegar entre categorías y gestionar un carrito de compras.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/yourprofile/ecommerce",
      },
      {
        title: "Book Manager",
        subtitle: "Aplicación de gestión de biblioteca",
        description:
          "Plataforma para gestionar libros, autores, categorías, usuarios y préstamos con funciones CRUD y búsqueda.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  experience: {
    label: "Mi evolución profesional",
    title: "Experiencia profesional",
    columnTitle: "Experiencia profesional",
    technologiesLabel: "Tecnologías",
    items: [
      {
        period: "Febrero 2026 – Junio 2026",
        role: "Ingeniero de Software en prácticas — Proyecto de fin de estudios",
        company: "Company Name",
        location: "Sousse, Túnez",
        description:
          "Diseño y desarrollo de una plataforma inteligente de detección de fraudes bancarios y monitorización de transacciones financieras.",
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
        period: "Julio 2025 – Agosto 2025",
        role: "Desarrollador Full Stack en prácticas",
        company: "Agency Name",
        location: "Túnez, Túnez",
        description:
          "Desarrollo de una plataforma de orientación escolar con un chatbot inteligente para ofrecer recomendaciones personalizadas.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "API REST"],
      },
      {
        period: "Julio 2024 – Agosto 2024",
        role: "Desarrollador Web en prácticas",
        company: "Company Name",
        location: "Sousse, Túnez",
        description:
          "Desarrollo de una plataforma e-commerce responsiva con navegación, visualización de productos y gestión del carrito.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  formation: {
    label: "Mi recorrido académico",
    title: "Formación",
    columnTitle: "Formación",
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
  certifications: {
    label: "Cualificaciones adicionales",
    title: "Certificaciones e idiomas",
    certsTitle: "Certificaciones",
    languagesTitle: "Idiomas",
    personalSkillsTitle: "Habilidades personales",
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 y 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript y SQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "Árabe", level: "Lengua materna", percentage: 100 },
      { name: "Francés", level: "Nivel profesional", percentage: 85 },
      { name: "Inglés", level: "Intermedio — B2", percentage: 70 },
    ],
    personalSkills: [
      "Espíritu analítico",
      "Resolución de problemas",
      "Trabajo en equipo",
      "Comunicación",
      "Adaptabilidad",
      "Autonomía",
    ],
  },
  contact: {
    label: "Trabajemos juntos",
    title: "Contáctame",
    heading: "Hablemos de tu proyecto",
    description:
      "¿Tienes una oportunidad, una misión freelance o un proyecto que realizar? No dudes en contactarme.",
    email: "Correo electrónico",
    phone: "Teléfono",
    location: "Ubicación",
    linkedin: "LinkedIn",
    github: "GitHub",
    form: {
      name: "Nombre completo",
      namePlaceholder: "Tu nombre",
      email: "Dirección de correo",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Propuesta de colaboración",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje...",
      submit: "Enviar mensaje",
    },
  },
  footer: {
    tagline: "Desarrollador Full Stack | Backend Java Spring Boot y Frontend React",
    navigation: "Navegación",
    followMe: "Encuéntrame",
    builtWith: "Portafolio desarrollado con React",
  },
  notFound: {
    title: "Página no encontrada",
    message: "La página solicitada no existe o ha sido movida.",
    backHome: "Volver al inicio",
  },
};
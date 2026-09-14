import type { Translation } from "./types";

export const ar: Translation = {
  meta: {
    langName: "العربية",
  },
  nav: {
    home: "الرئيسية",
    about: "عنّي",
    skills: "المهارات",
    projects: "المشاريع",
    experience: "الخبرات",
    formation: "التكوين",
    certifications: "الشهادات",
    contact: "التواصل",
    hireMe: "تواصل معي",
  },
  theme: {
    toDark: "التبديل إلى الوضع الداكن",
    toLight: "التبديل إلى الوضع الفاتح",
  },
  langSwitcher: {
    label: "تغيير اللغة",
  },
  hero: {
    welcome: "مرحباً بكم في معرض أعمالي",
    hello: "مرحباً، أنا",
    title: "مطوّر Full Stack | الواجهة الخلفية Java Spring Boot والواجهة الأمامية React",
    description:
      "مطوّر Full Stack متخصص في تطوير الواجهات الخلفية باستخدام Java Spring Boot والواجهات الأمامية باستخدام React. أصمّم تطبيقات ويب سريعة وآمنة وقابلة للصيانة بمعماريات حديثة.",
    viewProjects: "شاهد مشاريعي",
    contactMe: "تواصل معي",
  },
  about: {
    label: "اكتشف ملفي الشخصي",
    heading: "تطوير Full Stack، معماريات حديثة وحلول عالية الأداء",
    intro:
      "مطوّر Full Stack متخصص في Java وSpring Boot وReact، أصمّم تطبيقات ويب سريعة وآمنة وقابلة للصيانة.",
    summary: [
      "بأندفاع للهندسة البرمجية، أملك خبرة قوية في تطوير الواجهات الخلفية (Java, Spring Boot, Node.js) والواجهات الأمامية (React, Angular, TypeScript).",
      "أولي أهمية كبيرة للممارسات الجيدة: بنية الخدمات المصغرة (Microservices)، واجهات REST الآمنة (Spring Security, JWT)، الاختبارات،حاويات Docker، Coordination Kubernetes وأنابيب CI/CD.",
      "فضولي ومنضبط، أحب مواجهة التحديات التقنية والعمل ضمن فرق Agile لإنتاج منتجات عالية الجودة.",
    ],
    highlights: [
      "تطوير الواجهات الخلفية باستخدام Java وSpring Boot وNode.js",
      "تطوير الواجهات الأمامية باستخدام React وAngular وTypeScript",
      "تصميم وتأمين واجهات REST باستخدام Spring Security وJWT",
      "DevOps: Docker وKubernetes وJenkins وCI/CD",
      "قواعد البيانات: PostgreSQL وMySQL وMongoDB",
      "منهجيات Agile (Scrum)",
    ],
    cards: {
      formation: {
        title: "التكوين",
        value: "مهندس في هندسة البرمجيات",
      },
      specialty: {
        title: "التخصص",
        value: "Java وSpring Boot وReact والمعماريات الحديثة",
      },
      ai: {
        title: "الذكاء الاصطناعي",
        value: "Machine Learning وXGBoost والذكاء الاصطناعي التوليدي",
      },
      goal: {
        title: "الهدف",
        value: "عقد دائم، مهمات حرة وتعاونات",
      },
    },
  },
  skills: {
    label: "التقنيات والخبرات",
    title: "مهاراتي التقنية",
    categories: [
      {
        title: "Backend",
        description: "تطوير وتأمين واجهات REST وتطبيقات الواجهة الخلفية.",
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
        description: "بناء واجهات ويب حديثة ومتجاوبة وبديهية.",
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
        title: "قواعد البيانات",
        description: "تصميم ومعالجة ودمج قواعد البيانات.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
      },
      {
        title: "DevOps",
        description: "الأتمتة، التغليف، النشر والمراقبة.",
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
        title: "الذكاء الاصطناعي",
        description: "تطوير ودمج الحلول الذكية.",
        skills: ["Machine Learning", "XGBoost", "Generative AI", "NLP", "OpenAI API"],
      },
      {
        title: "البنية المعمارية",
        description: "تصميم معماريات برمجيات حديثة.",
        skills: ["Microservices", "REST API", "JWT", "MVC", "Agile Scrum"],
      },
    ],
  },
  projects: {
    label: "إنجازاتي",
    title: "المشاريع الرئيسية",
    featuredBadge: "مشروع رئيسي",
    github: "GitHub",
    demo: "عرض مباشر",
    items: [
      {
        title: "NovaBank",
        subtitle: "كشف ذكي للاحتيال المصرفي",
        description:
          "منصة لمراقبة المعاملات المالية قادرة على تقييم مخاطر الاحتيال في الوقت الفعلي، وحظر المعاملات المشبوهة وإنشاء التنبيهات تلقائياً.",
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
        subtitle: "منصة توجيه مدرسية ذكية",
        description:
          "تطبيق ويب يدمج اختبار شخصية MBTI وروبوت محادثة ذكي لاقتراح توجيه أكاديمي مخصص.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
        githubUrl: "https://github.com/yourprofile/guideapp",
      },
      {
        title: "E-Commerce Platform",
        subtitle: "منصة تجارة إلكترونية متجاوبة",
        description:
          "موقع تجارة إلكترونية متجاوب يتيح تصفح المنتجات والتنقل بين الفئات وإدارة سلة التسوق.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/yourprofile/ecommerce",
      },
      {
        title: "Book Manager",
        subtitle: "تطبيق إدارة مكتبة",
        description:
          "منصة لإدارة الكتب والمؤلفين والفئات والمستخدمين وال\Contracts مع وظائف CRUD والبحث.",
        technologies: ["React.js", "ASP.NET Core", "SQL Server", "Entity Framework", "JWT"],
      },
    ],
  },
  experience: {
    label: "مسارني المهني",
    title: "الخبرات المهنية",
    columnTitle: "الخبرات المهنية",
    technologiesLabel: "التقنيات",
    items: [
      {
        period: "فبراير 2026 – يونيو 2026",
        role: "متدرب هندسة برمجيات — مشروع التخرج",
        company: "Company Name",
        location: "سوسة، تونس",
        description:
          "تصميم وتطوير منصة ذكية لكشف الاحتيال المصرفي ومراقبة المعاملات المالية.",
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
        period: "يوليو 2025 – أغسطس 2025",
        role: "متدرب تطوير Full Stack",
        company: "Agency Name",
        location: "تونس، تونس",
        description:
          "تطوير منصة توجيه مدرسي تدمج روبوت محادثة ذكي لتقديم توصيات مخصصة.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "OpenAI API", "REST API"],
      },
      {
        period: "يوليو 2024 – أغسطس 2024",
        role: "متدرب تطوير ويب",
        company: "Company Name",
        location: "سوسة، تونس",
        description:
          "تطوير منصة تجارة إلكترونية متجاوبة مع تنقل وعرض منتجات وإدارة سلة.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
    ],
  },
  formation: {
    label: "المسار الأكاديمي",
    title: "التكوين",
    columnTitle: "التكوين",
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
  certifications: {
    label: "مؤهلات إضافية",
    title: "الشهادات واللغات",
    certsTitle: "الشهادات",
    languagesTitle: "اللغات",
    personalSkillsTitle: "المهارات الشخصية",
    certifications: [
      { name: "Microsoft Azure AI-900", issuer: "Microsoft" },
      { name: "Generative AI Professional", issuer: "Oracle Cloud Infrastructure 2025" },
      { name: "CCNA 1 & 2", issuer: "Cisco Networking Academy" },
      { name: "HTML5, CSS3, JavaScript وSQL", issuer: "Udemy" },
    ],
    languages: [
      { name: "العربية", level: "اللغة الأم", percentage: 100 },
      { name: "الفرنسية", level: "مستوى مهني", percentage: 85 },
      { name: "الإنجليزية", level: "مستوى متوسط — B2", percentage: 70 },
    ],
    personalSkills: [
      "التحليل",
      "حل المشكلات",
      "العمل الجماعي",
      "التواصل",
      "التكيّف",
      "الاستقلالية",
    ],
  },
  contact: {
    label: "لنعمل معاً",
    title: "تواصل معي",
    heading: "لنتحدث عن مشروعك",
    description:
      "هل لديك فرصة أو مهمة حرة أو مشروع تريد تنفيذه؟ لا تتردد في التواصل معي.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    linkedin: "LinkedIn",
    github: "GitHub",
    form: {
      name: "الاسم الكامل",
      namePlaceholder: "اسمك",
      email: "عنوان البريد الإلكتروني",
      emailPlaceholder: "بريدك@بريد.com",
      subject: "الموضوع",
      subjectPlaceholder: "اقتراح تعاون",
      message: "الرسالة",
      messagePlaceholder: "اكتب رسالتك...",
      submit: "إرسال الرسالة",
    },
  },
  footer: {
    tagline: "مطوّر Full Stack | الواجهة الخلفية Java Spring Boot والواجهة الأمامية React",
    navigation: "التنقل",
    followMe: "تابعني",
    builtWith: "معرض الأعمال مبني باستخدام React",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    message: "الصفحة المطلوبة غير موجودة أو تم نقلها.",
    backHome: "العودة إلى الرئيسية",
  },
};
import type { Lang } from "../i18n";
import type { ProjectPhase } from "./types";

export type ProjectArchitecture = Record<string, ProjectPhase[]>;

export const projectSchema: Record<Lang, ProjectArchitecture> = {
  fr: {
    NovaBank: [
      {
        icon: "monitor",
        tag: "Monitoring",
        title: "Tableau de bord de monitoring",
        how: "Interface Angular construite avec WebSockets pour diffuser les transactions et les alertes en temps réel.",
        problems: [
          "Latence du streaming lors des pics de transactions",
          "Rendu graphique saturé avec de gros volumes",
        ],
        solutions: [
          "WebSockets avec mise en buffer et backpressure",
          "Listes virtualisées et graphiques agrégés par fenêtre",
        ],
        tech: ["Angular"],
      },
      {
        icon: "api",
        tag: "API & Sécurité",
        title: "API REST Spring Boot",
        how: "API éditifiée autour de controllers REST, DTOs et authentification JWT.",
        problems: [
          "Endpoints exposant des données trop sensibles",
          "Gestion d'erreurs incohérente entre les services",
        ],
        solutions: [
          "Projection des champs via DTOs dédiés",
          "Handler d'exceptions global et réponse normalisée",
        ],
        tech: ["Spring Boot", "Spring Security"],
      },
      {
        icon: "brain",
        tag: "Anti-fraude",
        title: "Moteur de scoring XGBoost",
        how: "Service FastAPI appelant un modèle XGBoost entraîné sur des transactions historiques pour scorer en temps réel.",
        problems: [
          "Coût d'inférence élevé à grande échelle",
          "Faux positifs bloquant des clients légitimes",
        ],
        solutions: [
          "Inférence optimisée et prévision par lots",
          "Seuils dynamiques et revue humaine des blocages",
        ],
        tech: ["FastAPI", "XGBoost"],
      },
      {
        icon: "database",
        tag: "Données",
        title: "Persistance PostgreSQL",
        how: "Schéma relationnel normalisé, indexé pour les agrégations de reporting.",
        problems: [
          "Reporting lent sur de gros volumes",
          "Intégrité menacée par des mises à jour concurrentes",
        ],
        solutions: [
          "Index avancés et vues matérialisées",
          "Transactions et verrouillage optimiste",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infrastructure",
        title: "Déploiement Docker + Kubernetes",
        how: "Tous les services conteneurisés et orchestrés sur Kubernetes avec images multi-stages.",
        problems: [
          "Images volumineuses et builds lents",
          "Démarrage chaotique entre services dépendants",
        ],
        solutions: [
          "Multi-stage builds et images allégées",
          "Liveness/readiness probes et health checks",
        ],
        tech: ["Docker", "Kubernetes"],
      },
    ],
    "Plateforme GRC": [
      {
        icon: "api",
        tag: "API & Sécurité",
        title: "API REST Spring Boot",
        how: "API documentée en continu et sécurisée par rôles, avec couche transactionnelle.",
        problems: [
          "Documentation technique vite obsolète",
          "Accès non maîtrisés aux modules sensibles",
        ],
        solutions: [
          "Swagger auto-généré et tests de contrat",
          "RBAC fin et revue régulière des rôles",
        ],
        tech: ["Spring Boot", "Swagger"],
      },
      {
        icon: "layers",
        tag: "Modules métier",
        title: "Conformité, risque & pentest",
        how: "Modules construits autour du domaine GRC avec intégration des scénarios de tests de pénétration.",
        problems: [
          "Règles de conformité régulièrement mises à jour",
          "Résultats de pentest hétérogènes à consolider",
        ],
        solutions: [
          "Moteur de règles paramétrable",
          "Modèle de données unifié des findings",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "zap",
        tag: "Événements",
        title: "File de messages RabbitMQ",
        how: "File d'événements entre modules pour les notifications et la synchronisation asynchrone.",
        problems: [
          "Messages perdus lors des redéploiements",
          "Traitements dupliqués en cas de relance",
        ],
        solutions: [
          "Queues durables avec acknowledgments",
          "Consommateurs idempotents",
        ],
        tech: ["RabbitMQ"],
      },
      {
        icon: "database",
        tag: "Données",
        title: "Persistance PostgreSQL",
        how: "Socle relationnel avec journal d'audit complet pour la traçabilité.",
        problems: [
          "Journal d'audit volumineux ralentissant l'écriture",
          "Corrections de données risquées en production",
        ],
        solutions: [
          "Partitionnement et archivage de l'audit",
          "Migrations versionnées et revues pré-production",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infrastructure",
        title: "Docker + Kubernetes",
        how: "Conteneurisation complète et déploiement orchestré des services GRC.",
        problems: [
          "Environnements dev et prod divergents",
          "Ressources des pods sous-dimensionnées",
        ],
        solutions: [
          "Manifests versionnés et gestion par scripts",
          "Requests/limits calibrées sur des mesures",
        ],
        tech: ["Docker", "Kubernetes", "Swagger"],
      },
    ],
    GuideApp: [
      {
        icon: "monitor",
        tag: "Client React",
        title: "Interface d'orientation",
        how: "Application React modulaire pour le test MBTI et la zone de chat.",
        problems: [
          "Test MBTI lent au passage des questions",
          "Chat sans historique de session",
        ],
        solutions: [
          "Composants découpés et lazy loading",
          "Persistance des conversations",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API REST",
        title: "API Spring Boot",
        how: "API orchestrant les appels d'IA et la persistance des profils.",
        problems: [
          "Temps de réponse de l'API d'IA élevés",
          "Sessions de connexion insuffisamment sûres",
        ],
        solutions: [
          "Cache des réponses et timeouts adaptés",
          "Jetons de session chiffrés",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "bot",
        tag: "Intelligence",
        title: "Moteur de recommandation IA",
        how: "Règles MBTI combinées à OpenAI pour générer des recommandations personnalisées.",
        problems: [
          "Réponses IA parfois hors sujet",
          "Coût élevé des appels OpenAI",
        ],
        solutions: [
          "Prompting structuré avec templates",
          "Réutilisation des réponses en cache",
        ],
        tech: ["OpenAI API"],
      },
      {
        icon: "database",
        tag: "Données",
        title: "Persistance PostgreSQL",
        how: "Stockage des profils d'étudiants et des historiques de tests.",
        problems: [
          "Données incohérentes après abandon d'un test",
          "Recherche de profils trop lente",
        ],
        solutions: [
          "Transactions et rollback sur parcours interrompu",
          "Index dédiés aux champs de recherche",
        ],
        tech: ["PostgreSQL"],
      },
    ],
    "E-Commerce Platform": [
      {
        icon: "monitor",
        tag: "Client React",
        title: "Boutique responsive",
        how: "Boutique React : catalogue, catégories et panier géré côté client.",
        problems: [
          "Panier perdu au rechargement de la page",
          "Mise en page cassée sur petites largeurs",
        ],
        solutions: [
          "État global persisté dans le localStorage",
          "Breakpoints et audit responsive complet",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Node.js",
        title: "API de commerce",
        how: "API Express des produits et des commandes avec validation des saisies.",
        problems: [
          "Requêtes N+1 sur les commandes",
          "Réponses non validées côté serveur",
        ],
        solutions: [
          "Requêtes d'agrégation optimisées",
          "Validation par schémas de données",
        ],
        tech: ["Node.js"],
      },
      {
        icon: "card",
        tag: "Paiement",
        title: "Checkout Stripe",
        how: "Checkout Stripe intégré avec webhooks de confirmation des paiements.",
        problems: [
          "Commandes dupliquées lors des relances des webhooks",
          "Échecs de paiement silencieux",
        ],
        solutions: [
          "Idempotence par clé de commande",
          "Suivi et relance des paiements en échec",
        ],
        tech: ["Stripe"],
      },
      {
        icon: "database",
        tag: "Données",
        title: "Base MongoDB",
        how: "Base NoSQL de documents produits, commandes et utilisateurs.",
        problems: [
          "Recherche catalogue approximative",
          "Incohérence entre commande et stock",
        ],
        solutions: [
          "Index textuels multilingues",
          "Transactions multi-documents",
        ],
        tech: ["MongoDB"],
      },
    ],
    "Book Manager": [
      {
        icon: "monitor",
        tag: "Client React",
        title: "Interface de gestion",
        how: "Interface CRUD pour livres, auteurs, catégories et utilisateurs.",
        problems: [
          "Listes lentes à charger",
          "Filtres peu ergonomiques",
        ],
        solutions: [
          "Pagination et cache local",
          "Sélecteurs et options de filtrage avancées",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Web",
        title: "API ASP.NET Core",
        how: "Web API sécurisée par JWT reposant sur Entity Framework.",
        problems: [
          "Migrations mal appliquées entre environnements",
          "Authentification contournable",
        ],
        solutions: [
          "Migrations EF versionnées",
          "JWT avec refresh tokens et rôles",
        ],
        tech: ["ASP.NET Core", "JWT"],
      },
      {
        icon: "database",
        tag: "Couche données",
        title: "SQL Server + Entity Framework",
        how: "Schéma relationnel avec relations entre les entités du domaine.",
        problems: [
          "Conflits sur les emprunts simultanés",
          "Recherche de livres lente",
        ],
        solutions: [
          "Transactions et index de contention",
          "Index full-text pour la recherche",
        ],
        tech: ["Entity Framework", "SQL Server"],
      },
    ],
  },
  en: {
    NovaBank: [
      {
        icon: "monitor",
        tag: "Monitoring",
        title: "Monitoring dashboard",
        how: "Angular interface built with WebSockets to stream transactions and alerts in real time.",
        problems: [
          "Streaming latency during transaction peaks",
          "Chart rendering overwhelmed by large volumes",
        ],
        solutions: [
          "WebSockets with buffering and backpressure",
          "Virtualized lists and time-window aggregated charts",
        ],
        tech: ["Angular"],
      },
      {
        icon: "api",
        tag: "API & Security",
        title: "Spring Boot REST API",
        how: "API built around REST controllers, DTOs and JWT authentication.",
        problems: [
          "Endpoints leaking overly sensitive fields",
          "Inconsistent error handling across services",
        ],
        solutions: [
          "Field projection through dedicated DTOs",
          "Global exception handler and normalized responses",
        ],
        tech: ["Spring Boot", "Spring Security"],
      },
      {
        icon: "brain",
        tag: "Anti-fraud",
        title: "XGBoost scoring engine",
        how: "FastAPI service calling an XGBoost model trained on historical transactions to score in real time.",
        problems: [
          "High inference cost at scale",
          "False positives blocking legitimate customers",
        ],
        solutions: [
          "Optimized inference and batched prediction",
          "Dynamic thresholds and human review of blocks",
        ],
        tech: ["FastAPI", "XGBoost"],
      },
      {
        icon: "database",
        tag: "Data",
        title: "PostgreSQL persistence",
        how: "Normalized relational schema indexed for reporting aggregations.",
        problems: [
          "Slow reporting on large volumes",
          "Integrity risk from concurrent updates",
        ],
        solutions: [
          "Advanced indexes and materialized views",
          "Transactions and optimistic locking",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infrastructure",
        title: "Docker + Kubernetes deployment",
        how: "All services containerized and orchestrated on Kubernetes with multi-stage images.",
        problems: [
          "Bulky images and slow builds",
          "Chaotic startup between dependent services",
        ],
        solutions: [
          "Multi-stage builds and slim images",
          "Liveness/readiness probes and health checks",
        ],
        tech: ["Docker", "Kubernetes"],
      },
    ],
    "GRC Platform": [
      {
        icon: "api",
        tag: "API & Security",
        title: "Spring Boot REST API",
        how: "Continuously documented API secured by roles, with a transactional layer.",
        problems: [
          "Technical documentation quickly outdated",
          "Uncontrolled access to sensitive modules",
        ],
        solutions: [
          "Auto-generated Swagger and contract tests",
          "Fine-grained RBAC and regular role reviews",
        ],
        tech: ["Spring Boot", "Swagger"],
      },
      {
        icon: "layers",
        tag: "Business modules",
        title: "Compliance, risk & pentest",
        how: "Modules built around the GRC domain with integrated penetration testing scenarios.",
        problems: [
          "Compliance rules frequently updated",
          "Heterogeneous pentest results to consolidate",
        ],
        solutions: [
          "Configurable rules engine",
          "Unified findings data model",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "zap",
        tag: "Events",
        title: "RabbitMQ message queue",
        how: "Event queue between modules for notifications and asynchronous synchronization.",
        problems: [
          "Messages lost during redeployments",
          "Duplicate processing on retries",
        ],
        solutions: [
          "Durable queues with acknowledgments",
          "Idempotent consumers",
        ],
        tech: ["RabbitMQ"],
      },
      {
        icon: "database",
        tag: "Data",
        title: "PostgreSQL persistence",
        how: "Relational foundation with a complete audit trail for traceability.",
        problems: [
          "Bulky audit trail slowing writes",
          "Risky production data corrections",
        ],
        solutions: [
          "Partitioning and audit archiving",
          "Versioned migrations and pre-production reviews",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infrastructure",
        title: "Docker + Kubernetes",
        how: "Complete containerization and orchestrated deployment of GRC services.",
        problems: [
          "Divergent dev and prod environments",
          "Undersized pod resources",
        ],
        solutions: [
          "Versioned manifests and scripted management",
          "Requests/limits calibrated from measurements",
        ],
        tech: ["Docker", "Kubernetes", "Swagger"],
      },
    ],
    GuideApp: [
      {
        icon: "monitor",
        tag: "React client",
        title: "Guidance interface",
        how: "Modular React application for the MBTI test and the chat area.",
        problems: [
          "Slow test progression between questions",
          "Chat without session history",
        ],
        solutions: [
          "Split components and lazy loading",
          "Conversation persistence",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "REST API",
        title: "Spring Boot API",
        how: "API orchestrating AI calls and profile persistence.",
        problems: [
          "High AI API response times",
          "Unsufficiently secure sessions",
        ],
        solutions: [
          "Response caching and tuned timeouts",
          "Encrypted session tokens",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "bot",
        tag: "Intelligence",
        title: "AI recommendation engine",
        how: "MBTI rules combined with OpenAI to generate personalized recommendations.",
        problems: [
          "AI responses sometimes off-topic",
          "High OpenAI call costs",
        ],
        solutions: [
          "Structured prompting with templates",
          "Caching reused responses",
        ],
        tech: ["OpenAI API"],
      },
      {
        icon: "database",
        tag: "Data",
        title: "PostgreSQL persistence",
        how: "Stores student profiles and test histories.",
        problems: [
          "Inconsistent data after an abandoned test",
          "Too slow profile search",
        ],
        solutions: [
          "Transactions and rollback on interrupted flows",
          "Dedicated search indexes",
        ],
        tech: ["PostgreSQL"],
      },
    ],
    "E-Commerce Platform": [
      {
        icon: "monitor",
        tag: "React client",
        title: "Responsive storefront",
        how: "React storefront: catalog, categories and a client-side cart.",
        problems: [
          "Cart lost on page reload",
          "Broken layout on small screens",
        ],
        solutions: [
          "Global state persisted in localStorage",
          "Breakpoints and full responsive audit",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "Node.js API",
        title: "Commerce API",
        how: "Express products and orders API with validated inputs.",
        problems: [
          "N+1 queries on orders",
          "Unvalidated server responses",
        ],
        solutions: [
          "Optimized aggregation queries",
          "Data schema validation",
        ],
        tech: ["Node.js"],
      },
      {
        icon: "card",
        tag: "Payment",
        title: "Stripe checkout",
        how: "Stripe checkout integrated with payment confirmation webhooks.",
        problems: [
          "Duplicate orders on webhook retries",
          "Silent payment failures",
        ],
        solutions: [
          "Idempotency keyed by order",
          "Tracking and retry of failed payments",
        ],
        tech: ["Stripe"],
      },
      {
        icon: "database",
        tag: "Data",
        title: "MongoDB database",
        how: "NoSQL database of product, order and user documents.",
        problems: [
          "Approximate catalog search",
          "Order and stock inconsistencies",
        ],
        solutions: [
          "Multilingual text indexes",
          "Multi-document transactions",
        ],
        tech: ["MongoDB"],
      },
    ],
    "Book Manager": [
      {
        icon: "monitor",
        tag: "React client",
        title: "Management interface",
        how: "CRUD interface for books, authors, categories and users.",
        problems: [
          "Slow-to-load lists",
          "Unergonomic filters",
        ],
        solutions: [
          "Pagination and local caching",
          "Selectors and advanced filtering options",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "Web API",
        title: "ASP.NET Core API",
        how: "JWT-secured web API built on Entity Framework.",
        problems: [
          "Migrations misapplied across environments",
          "Bypassable authentication",
        ],
        solutions: [
          "Versioned EF migrations",
          "JWT with refresh tokens and roles",
        ],
        tech: ["ASP.NET Core", "JWT"],
      },
      {
        icon: "database",
        tag: "Data layer",
        title: "SQL Server + Entity Framework",
        how: "Relational schema with relationships between domain entities.",
        problems: [
          "Conflicts on concurrent loans",
          "Slow book search",
        ],
        solutions: [
          "Transactions and contention indexes",
          "Full-text search indexes",
        ],
        tech: ["Entity Framework", "SQL Server"],
      },
    ],
  },
  es: {
    NovaBank: [
      {
        icon: "monitor",
        tag: "Monitoreo",
        title: "Panel de monitoreo",
        how: "Interfaz Angular con WebSockets para transmitir transacciones y alertas en tiempo real.",
        problems: [
          "Latencia del flujo en picos de transacciones",
          "Rendering de gráficos saturado con grandes volúmenes",
        ],
        solutions: [
          "WebSockets con buffer y backpressure",
          "Listas virtualizadas y gráficos agregados por ventana",
        ],
        tech: ["Angular"],
      },
      {
        icon: "api",
        tag: "API y seguridad",
        title: "API REST Spring Boot",
        how: "API construida sobre controllers REST, DTOs y autenticación JWT.",
        problems: [
          "Endpoints que exponían campos sensibles",
          "Manejo de errores inconsistente entre servicios",
        ],
        solutions: [
          "Proyección de campos mediante DTOs",
          "Handler global de excepciones y respuesta normalizada",
        ],
        tech: ["Spring Boot", "Spring Security"],
      },
      {
        icon: "brain",
        tag: "Antifraude",
        title: "Motor de scoring XGBoost",
        how: "Servicio FastAPI que llama a un modelo XGBoost entrenado con transacciones históricas.",
        problems: [
          "Costo de inferencia alto a gran escala",
          "Falsos positivos que bloqueaban clientes legítimos",
        ],
        solutions: [
          "Inferencia optimizada y predicción por lotes",
          "Umbrales dinámicos y revisión humana de bloqueos",
        ],
        tech: ["FastAPI", "XGBoost"],
      },
      {
        icon: "database",
        tag: "Datos",
        title: "Persistencia PostgreSQL",
        how: "Esquema relacional normalizado e indexado para agregaciones de informes.",
        problems: [
          "Informes lentos con grandes volúmenes",
          "Integridad amenazada por actualizaciones concurrentes",
        ],
        solutions: [
          "Índices avanzados y vistas materializadas",
          "Transacciones y bloqueo optimista",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infraestructura",
        title: "Despliegue Docker + Kubernetes",
        how: "Servicios contenedorizados y orquestados en Kubernetes con imágenes multi-etapa.",
        problems: [
          "Imágenes pesadas y builds lentos",
          "Arranque caótico entre servicios dependientes",
        ],
        solutions: [
          "Multi-stage builds e imágenes ligeras",
          "Probes de liveness/readiness y health checks",
        ],
        tech: ["Docker", "Kubernetes"],
      },
    ],
    "Plataforma GRC": [
      {
        icon: "api",
        tag: "API y seguridad",
        title: "API REST Spring Boot",
        how: "API documentada en continuo y segura por roles, con capa transaccional.",
        problems: [
          "Documentación técnica desactualizada",
          "Accesos no controlados a módulos sensibles",
        ],
        solutions: [
          "Swagger autogenerado y tests de contrato",
          "RBAC fino y revisión periódica de roles",
        ],
        tech: ["Spring Boot", "Swagger"],
      },
      {
        icon: "layers",
        tag: "Módulos de negocio",
        title: "Cumplimiento, riesgo y pentest",
        how: "Módulos construidos alrededor del dominio GRC con escenarios de tests de penetración.",
        problems: [
          "Reglas de cumplimiento actualizadas con frecuencia",
          "Resultados de pentest heterogéneos a consolidar",
        ],
        solutions: [
          "Motor de reglas configurable",
          "Modelo de datos unificado de hallazgos",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "zap",
        tag: "Eventos",
        title: "Cola de mensajes RabbitMQ",
        how: "Cola de eventos entre módulos para notificaciones y sincronización asíncrona.",
        problems: [
          "Mensajes perdidos en redeployments",
          "Procesos duplicados en reintentos",
        ],
        solutions: [
          "Colas duraderas con acknowledgments",
          "Consumidores idempotentes",
        ],
        tech: ["RabbitMQ"],
      },
      {
        icon: "database",
        tag: "Datos",
        title: "Persistencia PostgreSQL",
        how: "Base relacional con registro de auditoría completo para trazabilidad.",
        problems: [
          "Auditoría voluminosa que ralentizaba escrituras",
          "Correcciones de datos arriesgadas en producción",
        ],
        solutions: [
          "Particionado y archivado de la auditoría",
          "Migraciones versionadas y revisiones previas",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infraestructura",
        title: "Docker + Kubernetes",
        how: "Contenedorización completa y despliegue orquestado de los servicios GRC.",
        problems: [
          "Entornos dev y prod divergentes",
          "Recursos de pods insuficientes",
        ],
        solutions: [
          "Manifiestos versionados y gestión scripteada",
          "Requests/limits calibrados con mediciones",
        ],
        tech: ["Docker", "Kubernetes", "Swagger"],
      },
    ],
    GuideApp: [
      {
        icon: "monitor",
        tag: "Cliente React",
        title: "Interfaz de orientación",
        how: "Aplicación React modular para el test MBTI y la zona de chat.",
        problems: [
          "Test MBTI lento entre preguntas",
          "Chat sin historial de sesión",
        ],
        solutions: [
          "Componentes separados y lazy loading",
          "Persistencia de las conversaciones",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API REST",
        title: "API Spring Boot",
        how: "API que orquesta las llamadas de IA y la persistencia de perfiles.",
        problems: [
          "Tiempos de respuesta altos de la API de IA",
          "Sesiones no suficientemente seguras",
        ],
        solutions: [
          "Cache de respuestas y timeouts ajustados",
          "Tokens de sesión cifrados",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "bot",
        tag: "Inteligencia",
        title: "Motor de recomendación IA",
        how: "Reglas MBTI combinadas con OpenAI para recomendaciones personalizadas.",
        problems: [
          "Respuestas IA a veces fuera de contexto",
          "Costo alto de las llamadas OpenAI",
        ],
        solutions: [
          "Prompting estructurado con plantillas",
          "Reutilización de respuestas en cache",
        ],
        tech: ["OpenAI API"],
      },
      {
        icon: "database",
        tag: "Datos",
        title: "Persistencia PostgreSQL",
        how: "Almacena perfiles de estudiantes e historiales de tests.",
        problems: [
          "Datos incoherentes tras abandono del test",
          "Búsqueda de perfiles demasiado lenta",
        ],
        solutions: [
          "Transacciones y rollback en flujos interrumpidos",
          "Índices dedicados a la búsqueda",
        ],
        tech: ["PostgreSQL"],
      },
    ],
    "E-Commerce Platform": [
      {
        icon: "monitor",
        tag: "Cliente React",
        title: "Tienda responsive",
        how: "Tienda React: catálogo, categorías y carrito gestionado en el cliente.",
        problems: [
          "Carrito perdido al recargar la página",
          "Diseño roto en pantallas pequeñas",
        ],
        solutions: [
          "Estado global persistido en localStorage",
          "Breakpoints y auditoría responsive completa",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Node.js",
        title: "API de comercio",
        how: "API Express de productos y pedidos con validación de entradas.",
        problems: [
          "Consultas N+1 en pedidos",
          "Respuestas sin validar en el servidor",
        ],
        solutions: [
          "Consultas de agregación optimizadas",
          "Validación mediante esquemas de datos",
        ],
        tech: ["Node.js"],
      },
      {
        icon: "card",
        tag: "Pago",
        title: "Checkout con Stripe",
        how: "Checkout Stripe integrado con webhooks de confirmación de pago.",
        problems: [
          "Pedidos duplicados al reintentar webhooks",
          "Fallos de pago silenciosos",
        ],
        solutions: [
          "Idempotencia por clave de pedido",
          "Seguimiento y reintento de pagos fallidos",
        ],
        tech: ["Stripe"],
      },
      {
        icon: "database",
        tag: "Datos",
        title: "Base MongoDB",
        how: "Base NoSQL de documentos de productos, pedidos y usuarios.",
        problems: [
          "Búsqueda de catálogo aproximada",
          "Incoherencia entre pedido y stock",
        ],
        solutions: [
          "Índices de texto multilingües",
          "Transacciones multi-documento",
        ],
        tech: ["MongoDB"],
      },
    ],
    "Book Manager": [
      {
        icon: "monitor",
        tag: "Cliente React",
        title: "Interfaz de gestión",
        how: "Interfaz CRUD para libros, autores, categorías y usuarios.",
        problems: [
          "Listas lentas de cargar",
          "Filtros poco ergonómicos",
        ],
        solutions: [
          "Paginación y cache local",
          "Selectores y opciones de filtrado avanzadas",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Web",
        title: "API ASP.NET Core",
        how: "Web API asegurada con JWT sobre Entity Framework.",
        problems: [
          "Migraciones mal aplicadas entre entornos",
          "Autenticación evadible",
        ],
        solutions: [
          "Migraciones EF versionadas",
          "JWT con refresh tokens y roles",
        ],
        tech: ["ASP.NET Core", "JWT"],
      },
      {
        icon: "database",
        tag: "Capa de datos",
        title: "SQL Server + Entity Framework",
        how: "Esquema relacional con relaciones entre entidades del dominio.",
        problems: [
          "Conflictos en préstamos simultáneos",
          "Búsqueda de libros lenta",
        ],
        solutions: [
          "Transacciones e índices de contención",
          "Índices full-text para la búsqueda",
        ],
        tech: ["Entity Framework", "SQL Server"],
      },
    ],
  },
  ar: {
    NovaBank: [
      {
        icon: "monitor",
        tag: "المراقبة",
        title: "لوحة المراقبة",
        how: "واجهة Angular مبنية بـ WebSockets لعرض المعاملات والتنبيهات لحظياً.",
        problems: [
          "تأخير في البث عند ذروات المعاملات",
          "تشبع عرض الرسوم مع الأحجام الكبيرة",
        ],
        solutions: [
          "WebSockets مع تخزين مؤقت وضبط الضغط",
          "قوائم افتراضية ورسوم مجمّعة بالنوافذ",
        ],
        tech: ["Angular"],
      },
      {
        icon: "api",
        tag: "API والأمان",
        title: "API REST بـ Spring Boot",
        how: "API مبنية على controllers REST وDTOs ومصادقة JWT.",
        problems: [
          "Endpoints تكشف حقولاً حساسة",
          "معالجة أخطاء غير متسقة بين الخدمات",
        ],
        solutions: [
          "إسقاط الحقول عبر DTOs مخصصة",
          "معالج استثناءات عام وردود موحّدة",
        ],
        tech: ["Spring Boot", "Spring Security"],
      },
      {
        icon: "brain",
        tag: "مكافحة الاحتيال",
        title: "محرك التقييم XGBoost",
        how: "خدمة FastAPI تستدعي نموذج XGBoost مدرّباً على معاملات تاريخية للتقييم الفوري.",
        problems: [
          "تكلفة استدلال عالية على نطاق واسع",
          "إيجابيات خاطئة تحظر عملاء شرعيين",
        ],
        solutions: [
          "استدلال محسّن وتوقع بالدفعات",
          "عتبات ديناميكية ومراجعة بشرية للحظر",
        ],
        tech: ["FastAPI", "XGBoost"],
      },
      {
        icon: "database",
        tag: "البيانات",
        title: "التخزين في PostgreSQL",
        how: "مخطط علائقي معياري مفهرس لتجميعات التقارير.",
        problems: [
          "تقارير بطيئة مع الأحجام الكبيرة",
          "خطر على السلامة من التحديثات المتزامنة",
        ],
        solutions: [
          "فهارس متقدمة وعروض ماديَلة",
          "معاملات وقفل تفاؤلي",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "البنية التحتية",
        title: "النشر بـ Docker + Kubernetes",
        how: "جميع الخدمات محاوِمة ومنسّقة على Kubernetes بصور متعددة المراحل.",
        problems: [
          "صور ثقيلة وبناء بطيء",
          "بدء فوضوي بين الخدمات المترابطة",
        ],
        solutions: [
          "بناء متعدد المراحل وصور خفيفة",
          "فحوصات liveness/readiness",
        ],
        tech: ["Docker", "Kubernetes"],
      },
    ],
    "منصة GRC": [
      {
        icon: "api",
        tag: "API والأمان",
        title: "API REST بـ Spring Boot",
        how: "API موثّقة باستمرار ومؤمّنة بالأدوار مع طبقة معاملات.",
        problems: [
          "توثيق تقني يتقادم سريعاً",
          "وصولات غير مضبوطة لوحدات حساسة",
        ],
        solutions: [
          "Swagger مولّد تلقائياً واختبارات عقود",
          "RBAC دقيق ومراجعة دورية للأدوار",
        ],
        tech: ["Spring Boot", "Swagger"],
      },
      {
        icon: "layers",
        tag: "الوحدات الأعمالية",
        title: "الامتثال والمخاطر واختبار الاختراق",
        how: "وحدات مبنية حول نطاق GRC مع دمج سيناريوهات اختبار الاختراق.",
        problems: [
          "قواعد امتثال تتحدث باستمرار",
          "نتائج اختراق متباينة يلزم دمجها",
        ],
        solutions: [
          "محرك قواعد قابل للتكوين",
          "نموذج بيانات موحد للنتائج",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "zap",
        tag: "الأحداث",
        title: "قائمة رسائل RabbitMQ",
        how: "قائمة أحداث بين الوحدات للإشعارات والمزامنة اللاتزامنية.",
        problems: [
          "رسائل مفقودة أثناء إعادة النشر",
          "معالجات مكررة عند إعادة المحاولة",
        ],
        solutions: [
          "قوائم دائمة مع acknowledgments",
          "مستهلكون متعددو الخطوات آمنون",
        ],
        tech: ["RabbitMQ"],
      },
      {
        icon: "database",
        tag: "البيانات",
        title: "التخزين في PostgreSQL",
        how: "قاعدة علائقية مع سجل تدقيق كامل للتتبع.",
        problems: [
          "سجل ضخم يبطئ الكتابة",
          "تصحيحات بيانات محفوفة بالمخاطر في الإنتاج",
        ],
        solutions: [
          "تقسيم وأرشفة سجل التدقيق",
          "تهجيرات مرقّمة ومراجعات قبل الإنتاج",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "البنية التحتية",
        title: "Docker + Kubernetes",
        how: "حاويات كاملة ونشر منسّق لخدمات GRC.",
        problems: [
          "بيئتا التطوير والإنتاج متباعدتان",
          "موارد pods غير كافية",
        ],
        solutions: [
          "Manifests مرقّمة وإدارة نصّية",
          "requests/limits مضبوطة بقياسات",
        ],
        tech: ["Docker", "Kubernetes", "Swagger"],
      },
    ],
    GuideApp: [
      {
        icon: "monitor",
        tag: "عميل React",
        title: "واجهة التوجيه",
        how: "تطبيق React وحدات لاختبار MBTI ومنطقة الدردشة.",
        problems: [
          "اختبار بطيء بين الأسئلة",
          "دردشة بدون سجل جلسة",
        ],
        solutions: [
          "مكونات مقسومة وتحميل كسول",
          "استمرار المحادثات",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API REST",
        title: "API بـ Spring Boot",
        how: "API تنسّق استدعاءات الذكاء الأصطناعي وتخزين الملفات.",
        problems: [
          "أوقات استجابة عالية لـ API الذكاء",
          "جلسات غير آمنة بما يكفي",
        ],
        solutions: [
          "تخزين مؤقت للردود وtimeouts مضبوطة",
          "رموز جلسة مشفرة",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "bot",
        tag: "الذكاء",
        title: "محرك التوصيات الذكية",
        how: "قواعد MBTI مدمجة مع OpenAI لتوليد توصيات مخصصة.",
        problems: [
          "ردود IA خارجة عن السياق أحياناً",
          "تكلفة عالية لاستدعاءات OpenAI",
        ],
        solutions: [
          "أسئلة منظمة بقالب",
          "إعادة استخدام الردود المخزنة",
        ],
        tech: ["OpenAI API"],
      },
      {
        icon: "database",
        tag: "البيانات",
        title: "التخزين في PostgreSQL",
        how: "تخزين ملفات الطلاب وسجلات الاختبارات.",
        problems: [
          "بيانات غير متسقة بعد ترك الاختبار",
          "بحث بطيء في الملفات",
        ],
        solutions: [
          "معاملات وrollback للمسارات المتقطعة",
          "فهارس مخصصة للبحث",
        ],
        tech: ["PostgreSQL"],
      },
    ],
    "E-Commerce Platform": [
      {
        icon: "monitor",
        tag: "عميل React",
        title: "متجر متجاوب",
        how: "متجر React: كتالوج وفئات وسلة تُدار من العميل.",
        problems: [
          "فقدان السلة عند إعادة تحميل الصفحة",
          "كسر التخطيط في الشاشات الصغيرة",
        ],
        solutions: [
          "حالة عامة مخزنة في localStorage",
          "Breakpoints وتدقيق شامل للتجاوب",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API بـ Node.js",
        title: "API التجارة",
        how: "API Express للمنتجات والطلبات مع التحقق من المدخلات.",
        problems: [
          "استعلامات N+1 في الطلبات",
          "ردود غير متحقق منها في الخادم",
        ],
        solutions: [
          "استعلامات تجميع محسّنة",
          "تحقق عبر مخططات البيانات",
        ],
        tech: ["Node.js"],
      },
      {
        icon: "card",
        tag: "الدفع",
        title: "إتمام الدفع Stipe",
        how: "دمج إتمام الدفع Stripe مع منخطافات تثبيت الدفع.",
        problems: [
          "طلبات مكررة عند إعادة محاولة webhooks",
          "فشل دفع صامت",
        ],
        solutions: [
          "Idempotence بمفتاح الطلب",
          "تتبع واسترجاع المدفوعات الفاشلة",
        ],
        tech: ["Stripe"],
      },
      {
        icon: "database",
        tag: "البيانات",
        title: "قاعدة MongoDB",
        how: "قاعدة NoSQL لمستندات المنتجات والطلبات والمستخدمين.",
        problems: [
          "بحث كتالوج تقريبي",
          "عدم اتساق بين الطلب والمخزون",
        ],
        solutions: [
          "فهارس نصية متعددة اللغات",
          "معاملات متعددة المستندات",
        ],
        tech: ["MongoDB"],
      },
    ],
    "Book Manager": [
      {
        icon: "monitor",
        tag: "عميل React",
        title: "واجهة الإدارة",
        how: "واجهة CRUD للكتب والمؤلفين والفئات والمستخدمين.",
        problems: [
          "قوائم بطيئة التحميل",
          "فلاتر غير عملية",
        ],
        solutions: [
          "ترقيم صفحات وتخزين مؤقت محلي",
          "محددات وخيارات تصفية متقدمة",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Web",
        title: "API ASP.NET Core",
        how: "Web API مؤمّنة بـ JWT على Entity Framework.",
        problems: [
          "تهجيرات سيئة التطبيق بين البيئات",
          "مصادقة قابلة للالتفاف",
        ],
        solutions: [
          "تهجيرات EF مرقّمة",
          "JWT مع refresh tokens وأدوار",
        ],
        tech: ["ASP.NET Core", "JWT"],
      },
      {
        icon: "database",
        tag: "طبقة البيانات",
        title: "SQL Server + Entity Framework",
        how: "مخطط علائقي بعلاقات بين كيانات النطاق.",
        problems: [
          "تعارضات في الإعارات المتزامنة",
          "بحث بطيء في الكتب",
        ],
        solutions: [
          "معاملات وفهارس تنازع",
          "فهارس full-text للبحث",
        ],
        tech: ["Entity Framework", "SQL Server"],
      },
    ],
  },
  tam: {
    NovaBank: [
      {
        icon: "monitor",
        tag: "Monitoring",
        title: "Tableau ⵏ ⵓⵎⴰⵎⴻⵏ",
        how: "Interface Angular ⵙ WebSockets ixesseren ttranssa ⴷ ilirmen ⵖⴻⴼ tsawant.",
        problems: [
          "Latence ⵖⴻⴼ iseggtin n transactions",
          "Rendu graphique yeččur s imesli",
        ],
        solutions: [
          "WebSockets ⵙ buffer ⴷ backpressure",
          "Listes virtualisées ⴷ graphiques agrégés",
        ],
        tech: ["Angular"],
      },
      {
        icon: "api",
        tag: "API ⴷ Tmellit",
        title: "API REST Spring Boot",
        how: "API bennitin s controllers REST, DTOs ⴷ JWT.",
        problems: [
          "Endpoints igbadden isefka ihudbannen",
          "Gestion n erreurs ur immagren ara",
        ],
        solutions: [
          "Projection ⵙ DTOs",
          "Handler n exceptions global",
        ],
        tech: ["Spring Boot", "Spring Security"],
      },
      {
        icon: "brain",
        tag: "Anti-fraude",
        title: "Moteur XGBoost",
        how: "Service FastAPI issawalen ⵉ modèles XGBoost iwessarenn s transactions.",
        problems: [
          "Coût umeqqran n inference",
          "Faux positifs ghan ḥesan insiteren",
        ],
        solutions: [
          "Inference if ganen",
          "Seuils dynamiques ⴷ revue tamdanant",
        ],
        tech: ["FastAPI", "XGBoost"],
      },
      {
        icon: "database",
        tag: "Isefka",
        title: "Persistance PostgreSQL",
        how: "Schéma relationnel normalisé ⵙ index.",
        problems: [
          "Verreports imziden s imesli",
          "Intégrité s wakeud n mise à jour",
        ],
        solutions: [
          "Index ⴷ vues matérialisées",
          "Transactions ⴷ verrou optimiste",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infrastructure",
        title: "Docker + Kubernetes",
        how: "Isurviyen akk conteneurisés ⴷ orchestrés ⵖⴻⴼ Kubernetes.",
        problems: [
          "Images tikuran ⴷ builds imziden",
          "Illa initialisation ur neha-n yigen",
        ],
        solutions: [
          "Multi-stage builds",
          "Probes ⴷ health checks",
        ],
        tech: ["Docker", "Kubernetes"],
      },
    ],
    "ⴰⵙⴻⵏⴼⴰⵔ GRC": [
      {
        icon: "api",
        tag: "API ⴷ Tmellit",
        title: "API REST Spring Boot",
        how: "API documented ⴷ tvessar s roles, ⵙ couche transactionnelle.",
        problems: [
          "Documentation teknik ur tturhu ara",
          "Iraheader ur kontrolliraen ara",
        ],
        solutions: [
          "Swagger ⴷ contract tests",
          "RBAC ⵙ ⵓⵏⴰⵎⴻⵙ",
        ],
        tech: ["Spring Boot", "Swagger"],
      },
      {
        icon: "layers",
        tag: "Modules",
        title: "Conformité, risque ⴷ pentest",
        how: "Modules ibennan sɣur domaine GRC ⴷ skinay ⵏ penetration.",
        problems: [
          "Règles ⵏ conformité ttbeddilen",
          "Isegganen ⵏ pentest d aya-y-imessen",
        ],
        solutions: [
          "Moteur ⵏ règles paramétrable",
          "Modèle unifié ⵏ findings",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "zap",
        tag: "Événements",
        title: "File RabbitMQ",
        how: "File ⵏ événements jar modules ⵉ notifications.",
        problems: [
          "Messages hrutan s redeploiement",
          "Traitements dupliqués",
        ],
        solutions: [
          "Queues durables",
          "Consommateurs idempotents",
        ],
        tech: ["RabbitMQ"],
      },
      {
        icon: "database",
        tag: "Isefka",
        title: "Persistance PostgreSQL",
        how: "Socle relationnel ⵙ audit trail ⵓⵎⵎⴰⵍ.",
        problems: [
          "Audit ameqqran yessefhad",
          "Corrections tajestement tiqfanin",
        ],
        solutions: [
          "Partitionnement ⴷ archivage",
          "Migrations versionnées",
        ],
        tech: ["PostgreSQL"],
      },
      {
        icon: "cloud",
        tag: "Infrastructure",
        title: "Docker + Kubernetes",
        how: "Conteneurisation ⵏ iwassaren ⵏ GRC.",
        problems: [
          "Environnements dev ⴷ prod ur mradun",
          "Ressources pods ţemtẓin",
        ],
        solutions: [
          "Manifests versionnés",
          "Requests/limits calibrées",
        ],
        tech: ["Docker", "Kubernetes", "Swagger"],
      },
    ],
    GuideApp: [
      {
        icon: "monitor",
        tag: "Client React",
        title: "Interface ⵏ ⵓⵏⴻⴽⵎⴻⵙ",
        how: "Application React modulaire ⵉ MBTI ⴷ chat.",
        problems: [
          "Test MBTI nehḥa",
          "Chat ula ya εumran s amezruy",
        ],
        solutions: [
          "Composants ⴷ lazy loading",
          "Persistance ⵏ conversations",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API REST",
        title: "API Spring Boot",
        how: "API ttessalef appels ⵏ IA ⴷ persistence.",
        problems: [
          "Lbarun n da temps yesay alen, réponses timziden",
          "Sessions ur kunsen ara",
        ],
        solutions: [
          "Cache ⴷ timeouts",
          "Tokens chiffrés",
        ],
        tech: ["Spring Boot"],
      },
      {
        icon: "bot",
        tag: "Intelligence",
        title: "Moteur ⵏ recommandation IA",
        how: "Règles MBTI ⴷ OpenAI ⵉ recommandations.",
        problems: [
          "Réponses IA ur da-s-sin",
          "Coût ⵏ appels OpenAI",
        ],
        solutions: [
          "Prompting structuré",
          "Cache ⵏ réponses",
        ],
        tech: ["OpenAI API"],
      },
      {
        icon: "database",
        tag: "Isefka",
        title: "Persistance PostgreSQL",
        how: "Asenefl ⵏ profiles ⴷ amezruy ⵏ tests.",
        problems: [
          "Isefka ur keččen ⵙ ahli",
          "Anadi yehḍer",
        ],
        solutions: [
          "Transactions ⴷ rollback",
          "Index ⵏ anadi",
        ],
        tech: ["PostgreSQL"],
      },
    ],
    "E-Commerce Platform": [
      {
        icon: "monitor",
        tag: "Client React",
        title: "Boutique responsive",
        how: "Boutique React: catalogue ⴷ panier ⵖⴻⴼ client.",
        problems: [
          "Panier interessif s recharge",
          "Layout iṛḍen ⵖⴻⴼ écrans imectanen",
        ],
        solutions: [
          "État global ⵙ localStorage",
          "Breakpoints ⴷ audit responsive",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Node.js",
        title: "API ⵏ commerce",
        how: "API Express ⵏ produits ⴷ commandes ⵙ validation.",
        problems: [
          "Requêtes N+1",
          "Réponses ur vérifierin",
        ],
        solutions: [
          "Aggregations",
          "Schémas ⵏ validation",
        ],
        tech: ["Node.js"],
      },
      {
        icon: "card",
        tag: "Paiement",
        title: "Checkout Stripe",
        how: "Checkout Stripe ⵙ webhooks ⵏ confirmation.",
        problems: [
          "Commandes dupliquées",
          "Échecs ⵏ paiement inféren",
        ],
        solutions: [
          "Idempotence",
          "Relance ⵏ paiements",
        ],
        tech: ["Stripe"],
      },
      {
        icon: "database",
        tag: "Isefka",
        title: "Base MongoDB",
        how: "Base NoSQL ⵏ produits ⴷ commandes.",
        problems: [
          "Anadi catalogue ur yeqqaw ara",
          "Incohérence stock",
        ],
        solutions: [
          "Index textuels",
          "Transactions",
        ],
        tech: ["MongoDB"],
      },
    ],
    "Book Manager": [
      {
        icon: "monitor",
        tag: "Client React",
        title: "Interface ⵏ upra",
        how: "Interface CRUD ⵉ livres, auteurs, catégories.",
        problems: [
          "Listes neḥḥan",
          "Filtres ur nγins",
        ],
        solutions: [
          "Pagination ⴷ cache",
          "Sélecteurs avancés",
        ],
        tech: ["React.js"],
      },
      {
        icon: "api",
        tag: "API Web",
        title: "API ASP.NET Core",
        how: "Web API issenges JWT ⵖⴻⴼ Entity Framework.",
        problems: [
          "Migrations ur seḥlun",
          "Authentification ur day tesla",
        ],
        solutions: [
          "Migrations versionnées",
          "JWT ⴷ refresh tokens",
        ],
        tech: ["ASP.NET Core", "JWT"],
      },
      {
        icon: "database",
        tag: "Couche ⵏ isefka",
        title: "SQL Server + Entity Framework",
        how: "Schéma relationnel ⵙ relations ⵏ entités.",
        problems: [
          "Conflits ⵏ emprunts",
          "Anadi ⵏ livres yehḍer",
        ],
        solutions: [
          "Transactions ⴷ index",
          "Full-text index",
        ],
        tech: ["Entity Framework", "SQL Server"],
      },
    ],
  },
};
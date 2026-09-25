import type { Lang } from "../i18n";
import type { BlogPost } from "./types";

export interface BlogData {
  items: BlogPost[];
}

export const blog: Record<Lang, BlogData> = {
  fr: {
    items: [
      {
        slug: "spring-microservices",
        category: "dev",
        date: "Juin 2026",
        readTime: "6 min",
        title: "Spring Boot : architecturer des microservices robustes",
        excerpt:
          "Service discovery, config centralisée, résilience… les pièces d'une architecture microservices qui tient réellement en production.",
        tags: ["Spring Boot", "Spring Cloud", "Microservices"],
        content: [
          "Une application monolithique finit par devenir difficile à faire évoluer : le code, les équipes et les déploiements se retrouvent liés. Le découpage en microservices permet d'isoler les domaines et de déployer chaque brique indépendamment — à condition d'introduire les bons outils dès le départ.",
          "Avec Spring Cloud, le service discovery (Eureka) permet à chaque instance de s'enregistrer et de trouver ses pairs sans adresse codée en dur. Un Config Server centralise ensuite les paramètres, tandis que des clients comme Spring Cloud Gateway routent le trafic entrant vers les bons services.",
          "Enfin, la résilience ne doit pas être une option : timeouts, circuit breakers (Resilience4j) et retries transforment un backend qui tombe en cascade en système qui dégrade proprement. La sécurité, elle, reste transversale : un seul API Gateway qui authentifie, puis des tokens validés en interne.",
        ],
        blocks: [
          {
            flow: [
              { label: "Requête client" },
              { label: "API Gateway (route + auth)" },
              { label: "Discovery + Config" },
              { label: "Microservice métier" },
              { label: "BDD + files" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Service discovery (Eureka)",
              "docker run -d -p 8761:8761 springcloud/eureka",
              "",
              "# 2. Config centralisée (côté service)",
              "spring.config.import=optional:configserver:http://config-server:8888",
              "",
              "# 3. Résilience : circuit breaker",
              "@CircuitBreaker(name = \"orders\", fallbackMethod = \"fallbackOrder\")",
            ],
          },
        ],
      },
      {
        slug: "rest-api-secure",
        category: "dev",
        date: "Mai 2026",
        readTime: "5 min",
        title: "REST APIs : les bonnes pratiques d'un backend sûr",
        excerpt:
          "Validation stricte, versioning, OpenAPI et gestion des erreurs : concevoir une API dure à casser et agréable à consommer.",
        tags: ["REST", "OpenAPI", "Bonnes pratiques"],
        content: [
          "Une API est une surface d'attaque : chaque endpoint doit valider ses entrées (bean validation), limiter sa pagination, et ne jamais exposer de détails techniques dans ses erreurs. Une réponse 422 claire vaut mieux qu'un stacktrace brut.",
          "Le versioning évite de casser les clients existants : préférez une version dans l'URL (/v1/…) ou un header. Documentez ensuite l'ensemble avec OpenAPI, et générez la validation et les clients depuis la spec.",
          "Côté sécurité, Spring Security + JWT, des CORS restrictifs, un rate limiting et des logs des tentatives échouées couvrent l'essentiel. Une API bien documentée est aussi une API plus sûre : moins d'ambiguïtés, moins d'abus.",
        ],
        blocks: [
          {
            flow: [
              { label: "Requête HTTP" },
              { label: "Bean Validation" },
              { label: "Contrôleur" },
              { label: "Service métier" },
              { label: "Réponse normalisée" },
            ],
          },
          {
            codeLang: "java",
            code: [
              "@PostMapping(\"/v1/users\")",
              "public ResponseEntity<UserDto> create(@Valid @RequestBody UserDto dto) {",
              "  return ResponseEntity.status(201).body(userService.create(dto));",
              "}",
              "// 201 → { \"id\": 1 }",
              "// 422 → { \"errors\": { \"email\": \"invalid\" } }",
            ],
          },
        ],
      },
      {
        slug: "cicd-actions",
        category: "devops",
        date: "Avril 2026",
        readTime: "7 min",
        title: "CI/CD de A à Z avec GitHub Actions",
        excerpt:
          "Un pipeline qui teste, scanne les dépendances, construit l'image Docker et déploie — sans que l'équipe y pense.",
        tags: ["GitHub Actions", "CI/CD"],
        content: [
          "Un pipeline fiable ressemble à un entonnoir : chaque étape est plus coûteuse que la précédente, et on bloque tôt plutôt que tard. On commence par le lint et les tests unitaires, deux minutes au plus.",
          "Vient ensuite l'analyse des dépendances (Dependabot, Snyk), puis la construction de l'image Docker et son scan (Trivy) avant publication dans le registre. Enfin, un déploiement automatisé vers l'environnement de recette, puis en production avec une porte de validation manuelle si besoin.",
          "La clé reste la reproductibilité : les secrets dans GitHub, les versions épinglées, et des caches pour garder le pipeline rapide. Un pipeline court et vert est plus consulté qu'un pipeline long et cassé.",
        ],
        blocks: [
          {
            flow: [
              { label: "Commit" },
              { label: "Lint + tests" },
              { label: "Scan dépendances" },
              { label: "Image Docker" },
              { label: "Déploiement" },
            ],
          },
          {
            codeLang: "yaml",
            code: [
              "name: ci",
              "on: [push]",
              "jobs:",
              "  build:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "      - run: npm ci && npm test",
              "      - run: docker build -t app:${{ github.sha }} .",
              "      - run: docker push",
              "      - run: kubectl rollout restart deploy/api",
            ],
          },
        ],
      },
      {
        slug: "docker-kubernetes",
        category: "devops",
        date: "Mars 2026",
        readTime: "8 min",
        title: "Docker & Kubernetes : conteneuriser sans se brûler",
        excerpt:
          "Images minimales, secrets, limites de ressources et probes : les réflexes pour une conteneurisation propre et prévisible.",
        tags: ["Docker", "Kubernetes"],
        content: [
          "Une bonne image Docker tient sur quelques principes : partir d'une base minimale (distroless, alpine), compiler en multi-stage pour ne copier que l'artefact final, et ne jamais emballer les secrets dans l'image.",
          "Dans Kubernetes, la prédictibilité passe par les limits/requests en CPU et mémoire : un pod sans limites peut faire tomber un nœud. Les probes (liveness, readiness) disent à l'orchestrateur quand un pod est prêt à recevoir du trafic.",
          "Enfin, les configmaps et secrets séparent la configuration du code, et un NetworkPolicy limite qui peut parler à qui. Conteneuriser, c'est facile ; opérer proprement, c'est une discipline.",
        ],
        blocks: [
          {
            flow: [
              { label: "Dockerfile" },
              { label: "docker build" },
              { label: "Image" },
              { label: "docker run → conteneur" },
              { label: "kubectl apply → pod" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Build de l'image",
              "docker build -t spring-api:1.0 .",
              "",
              "# 2. Lancement du conteneur",
              "docker run -d -p 8080:8080 --name api spring-api:1.0",
              "docker ps",
              "docker logs -f api",
              "",
              "# 3. Kubernetes : déploiement",
              "kubectl apply -f deployment.yml",
              "kubectl get pods",
              "kubectl rollout status deployment/api",
            ],
          },
        ],
      },
      {
        slug: "pentest-web",
        category: "security",
        date: "Février 2026",
        readTime: "9 min",
        title: "Initiation au test d'intrusion d'applications web",
        excerpt:
          "OWASP Top 10, outils et démarche : comment on identifie — et corrige — les failles avant que d'autres ne les exploitent.",
        tags: ["Pentest", "OWASP", "Sécurité"],
        content: [
          "Un test d'intrusion commence par la reconnaissance : cartographier l'application, énumérer les endpoints et identifier les technologies (Wappalyzer, Burp Suite, OWASP ZAP). On établit ensuite un périmètre précis pour ne tester que ce qui est autorisé.",
          "Les failles classiques sont les injections SQL, le XSS, le CSRF, les fuites d'identifiants et les contrôles d'accès lacunaires. L'OWASP Top 10 reste la grille de référence pour prioriser.",
          "L'essentiel est la restitution : un rapport qui hiérarchise par criticité et propose une correction concrète vaut plus qu'une liste de vulnérabilités. Tester régulièrement, c'est transformer la sécurité en réflexe, pas en projet ponctuel.",
        ],
        blocks: [
          {
            flow: [
              { label: "Reconnaissance" },
              { label: "Scan & énumération" },
              { label: "Exploitation contrôlée" },
              { label: "Rapport + remédiation" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Reconnaissance",
              "nmap -sV -p- api.target.tld",
              "",
              "# 2. Scan (périmètre autorisé)",
              "sqlmap -u \"https://api.target.tld/users?id=1\" --batch",
              "",
              "# 3. Restitution : criticité + remédiation",
            ],
          },
        ],
      },
      {
        slug: "spring-security-jwt",
        category: "security",
        date: "Janvier 2026",
        readTime: "6 min",
        title: "Spring Security & JWT : une authentification solide",
        excerpt:
          "Les bonnes pratiques pour protéger vos endpoints : tokens courts, refresh tokens et gestion fine des rôles.",
        tags: ["Spring Security", "JWT", "Authentification"],
        content: [
          "Une chaîne JWT n'est pas une session magique : elle est signée (HS256/RS256) et vérifiée à chaque requête. Le cœur du sujet est la durée de vie — un access token court (15 minutes) limite la portée d'un vol.",
          "Le refresh token, lui, vit plus longtemps et permet d'obtenir un nouvel access token sans redemander les identifiants. Stockez-le de façon sécurisée (HttpOnly, SameSite) et pensez à la révocation.",
          "Enfin, Spring Security permet de modéliser finement les autorisations : roles, authorities, et producteurs personnalisés. L'authentification robuste n'est pas une librairie, c'est une combinaison de pratiques cohérentes.",
        ],
        blocks: [
          {
            flow: [
              { label: "Identifiants" },
              { label: "Spring Security vérifie" },
              { label: "JWT (15 min)" },
              { label: "Requête protégée (Bearer)" },
              { label: "Accès + rôles" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Connexion → ticket JWT (15 min)",
              "POST /auth/login",
              "{ \"username\": \"...\", \"password\": \"...\" }",
              "→ { \"accessToken\": \"eyJhbGciOi...\", \"expires_in\": 900 }",
              "",
              "# 2. Requête protégée",
              "GET /v1/orders",
              "Authorization: Bearer eyJhbGciOi...",
            ],
          },
        ],
      },
    ],
  },
  en: {
    items: [
      {
        slug: "spring-microservices",
        category: "dev",
        date: "June 2026",
        readTime: "6 min",
        title: "Spring Boot: architecting robust microservices",
        excerpt:
          "Service discovery, centralised config, resilience… building a microservices architecture that truly holds up in production.",
        tags: ["Spring Boot", "Spring Cloud", "Microservices"],
        content: [
          "A monolithic application eventually becomes hard to evolve: code, teams and deployments all end up coupled. Splitting into microservices isolates domains and lets each piece deploy independently — provided the right tools are introduced from day one.",
          "With Spring Cloud, service discovery (Eureka) lets each instance register and find its peers without hard-coded addresses. A Config Server centralises settings, while clients such as Spring Cloud Gateway route incoming traffic to the right services.",
          "Finally, resilience cannot be optional: timeouts, circuit breakers (Resilience4j) and retries turn a cascading backend into one that degrades gracefully. Security stays cross-cutting: a single API Gateway authenticates, then tokens are validated internally.",
        ],
        blocks: [
          {
            flow: [
              { label: "Client request" },
              { label: "API Gateway (route + auth)" },
              { label: "Discovery + Config" },
              { label: "Business microservice" },
              { label: "Databases + queues" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Service discovery (Eureka)",
              "docker run -d -p 8761:8761 springcloud/eureka",
              "",
              "# 2. Centralised config (on the service)",
              "spring.config.import=optional:configserver:http://config-server:8888",
              "",
              "# 3. Resilience: circuit breaker",
              "@CircuitBreaker(name = \"orders\", fallbackMethod = \"fallbackOrder\")",
            ],
          },
        ],
      },
      {
        slug: "rest-api-secure",
        category: "dev",
        date: "May 2026",
        readTime: "5 min",
        title: "REST APIs: best practices for a safe backend",
        excerpt:
          "Strict validation, versioning, OpenAPI and error handling: designing an API that is hard to break and pleasant to consume.",
        tags: ["REST", "OpenAPI", "Best practices"],
        content: [
          "An API is an attack surface: every endpoint must validate its inputs (bean validation), limit pagination, and never leak technical details in errors. A clear 422 beats a raw stacktrace.",
          "Versioning keeps existing clients working: prefer a version in the URL (/v1/…) or a header. Then document everything with OpenAPI, and derive validation and clients from the spec.",
          "On the security side, Spring Security + JWT, restrictive CORS, rate limiting and logs of failed attempts cover most cases. A well-documented API is also a safer one: fewer ambiguities, fewer abuses.",
        ],
        blocks: [
          {
            flow: [
              { label: "HTTP request" },
              { label: "Bean Validation" },
              { label: "Controller" },
              { label: "Business service" },
              { label: "Normalised response" },
            ],
          },
          {
            codeLang: "java",
            code: [
              "@PostMapping(\"/v1/users\")",
              "public ResponseEntity<UserDto> create(@Valid @RequestBody UserDto dto) {",
              "  return ResponseEntity.status(201).body(userService.create(dto));",
              "}",
              "// 201 → { \"id\": 1 }",
              "// 422 → { \"errors\": { \"email\": \"invalid\" } }",
            ],
          },
        ],
      },
      {
        slug: "cicd-actions",
        category: "devops",
        date: "April 2026",
        readTime: "7 min",
        title: "CI/CD from A to Z with GitHub Actions",
        excerpt:
          "A pipeline that tests, scans dependencies, builds the Docker image and deploys — without the team having to think about it.",
        tags: ["GitHub Actions", "CI/CD"],
        content: [
          "A reliable pipeline looks like a funnel: each stage costs more than the previous one, so you fail early rather than late. Start with linting and unit tests — two minutes at most.",
          "Next comes dependency analysis (Dependabot, Snyk), then the Docker image build and its scan (Trivy) before publishing to the registry. Finally, an automated deploy to staging, then production with a manual validation gate if needed.",
          "The key is reproducibility: secrets in GitHub, pinned versions, and caches to keep the pipeline fast. A short, green pipeline gets more attention than a long, broken one.",
        ],
        blocks: [
          {
            flow: [
              { label: "Commit" },
              { label: "Lint + tests" },
              { label: "Dependency scan" },
              { label: "Docker image" },
              { label: "Deploy" },
            ],
          },
          {
            codeLang: "yaml",
            code: [
              "name: ci",
              "on: [push]",
              "jobs:",
              "  build:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "      - run: npm ci && npm test",
              "      - run: docker build -t app:${{ github.sha }} .",
              "      - run: docker push",
              "      - run: kubectl rollout restart deploy/api",
            ],
          },
        ],
      },
      {
        slug: "docker-kubernetes",
        category: "devops",
        date: "March 2026",
        readTime: "8 min",
        title: "Docker & Kubernetes: containerizing without burning out",
        excerpt:
          "Minimal images, secrets, resource limits and probes: the reflexes for clean and predictable containerization.",
        tags: ["Docker", "Kubernetes"],
        content: [
          "A good Docker image follows a few principles: start from a minimal base (distroless, alpine), build in multi-stage so only the final artifact is copied, and never bake secrets into the image.",
          "In Kubernetes, predictability comes from CPU/memory limits and requests: an unbounded pod can take down a node. Probes (liveness, readiness) tell the orchestrator when a pod is ready to receive traffic.",
          "Finally, configmaps and secrets separate configuration from code, and a NetworkPolicy limits who can talk to whom. Containerizing is easy; operating it cleanly is a discipline.",
        ],
        blocks: [
          {
            flow: [
              { label: "Dockerfile" },
              { label: "docker build" },
              { label: "Image" },
              { label: "docker run → container" },
              { label: "kubectl apply → pod" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Build the image",
              "docker build -t spring-api:1.0 .",
              "",
              "# 2. Run the container",
              "docker run -d -p 8080:8080 --name api spring-api:1.0",
              "docker ps",
              "docker logs -f api",
              "",
              "# 3. Kubernetes: deploy",
              "kubectl apply -f deployment.yml",
              "kubectl get pods",
              "kubectl rollout status deployment/api",
            ],
          },
        ],
      },
      {
        slug: "pentest-web",
        category: "security",
        date: "February 2026",
        readTime: "9 min",
        title: "Getting started with web application penetration testing",
        excerpt:
          "OWASP Top 10, tools and methodology: how you find — and fix — vulnerabilities before someone else exploits them.",
        tags: ["Pentest", "OWASP", "Security"],
        content: [
          "A penetration test starts with reconnaissance: mapping the application, enumerating endpoints and identifying technologies (Wappalyzer, Burp Suite, OWASP ZAP). A clear scope is then agreed so only authorised targets are tested.",
          "Classic flaws are SQL injections, XSS, CSRF, credential leaks and broken access controls. The OWASP Top 10 remains the reference grid for prioritising.",
          "The key is the report: findings ranked by severity with a concrete remediation are worth more than a raw list. Testing regularly turns security into a reflex, not a one-off project.",
        ],
        blocks: [
          {
            flow: [
              { label: "Recon" },
              { label: "Scan & enumeration" },
              { label: "Controlled exploitation" },
              { label: "Report + remediation" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Reconnaissance",
              "nmap -sV -p- api.target.tld",
              "",
              "# 2. Scan (authorised scope)",
              "sqlmap -u \"https://api.target.tld/users?id=1\" --batch",
              "",
              "# 3. Report: severity + remediation",
            ],
          },
        ],
      },
      {
        slug: "spring-security-jwt",
        category: "security",
        date: "January 2026",
        readTime: "6 min",
        title: "Spring Security & JWT: solid authentication",
        excerpt:
          "Best practices to protect your endpoints: short-lived tokens, refresh tokens and fine-grained role management.",
        tags: ["Spring Security", "JWT", "Authentication"],
        content: [
          "A JWT chain is not magic session handling: it is signed (HS256/RS256) and verified on every request. The crux is lifetime — a short access token (15 minutes) limits the damage of a theft.",
          "The refresh token lives longer and allows getting a new access token without asking for credentials again. Store it securely (HttpOnly, SameSite) and plan for revocation.",
          "Finally, Spring Security models authorisations finely: roles, authorities and custom filters. Strong authentication is not a library — it is a coherent combination of practices.",
        ],
        blocks: [
          {
            flow: [
              { label: "Credentials" },
              { label: "Spring Security verifies" },
              { label: "JWT (15 min)" },
              { label: "Protected request (Bearer)" },
              { label: "Access + roles" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Login → JWT ticket (15 min)",
              "POST /auth/login",
              "{ \"username\": \"...\", \"password\": \"...\" }",
              "→ { \"accessToken\": \"eyJhbGciOi...\", \"expires_in\": 900 }",
              "",
              "# 2. Protected request",
              "GET /v1/orders",
              "Authorization: Bearer eyJhbGciOi...",
            ],
          },
        ],
      },
    ],
  },
  es: {
    items: [
      {
        slug: "spring-microservices",
        category: "dev",
        date: "Junio 2026",
        readTime: "6 min",
        title: "Spring Boot: arquitecturando microservicios robustos",
        excerpt:
          "Service discovery, configuración centralizada, resiliencia… las piezas de una arquitectura de microservicios que aguanta en producción.",
        tags: ["Spring Boot", "Spring Cloud", "Microservicios"],
        content: [
          "Una aplicación monolítica acaba siendo difícil de evolucionar: código, equipos y despliegues terminan acoplados. Dividir en microservicios aísla los dominios y permite desplegar cada pieza de forma independiente — siempre que se introduzcan las herramientas adecuadas desde el principio.",
          "Con Spring Cloud, el service discovery (Eureka) permite que cada instancia se registre y encuentre a sus pares sin direcciones fijas. Un Config Server centraliza los parámetros, mientras que Spring Cloud Gateway enruta el tráfico hacia los servicios correctos.",
          "La resiliencia tampoco puede ser opcional: timeouts, circuit breakers (Resilience4j) y reintentos convierten un backend que cae en cascada en un sistema que degrada con elegancia. La seguridad sigue siendo transversal: un solo API Gateway que autentica y tokens validados internamente.",
        ],
        blocks: [
          {
            flow: [
              { label: "Petición del cliente" },
              { label: "API Gateway (ruta + auth)" },
              { label: "Discovery + Config" },
              { label: "Microservicio de negocio" },
              { label: "Bases de datos + colas" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Service discovery (Eureka)",
              "docker run -d -p 8761:8761 springcloud/eureka",
              "",
              "# 2. Config centralizada (en el servicio)",
              "spring.config.import=optional:configserver:http://config-server:8888",
              "",
              "# 3. Resiliencia: circuit breaker",
              "@CircuitBreaker(name = \"orders\", fallbackMethod = \"fallbackOrder\")",
            ],
          },
        ],
      },
      {
        slug: "rest-api-secure",
        category: "dev",
        date: "Mayo 2026",
        readTime: "5 min",
        title: "APIs REST: buenas prácticas para un backend seguro",
        excerpt:
          "Validación estricta, versionado, OpenAPI y gestión de errores: diseñar una API difícil de romper y agradable de consumir.",
        tags: ["REST", "OpenAPI", "Buenas prácticas"],
        content: [
          "Una API es una superficie de ataque: cada endpoint debe validar sus entradas (bean validation), limitar la paginación y nunca filtrar detalles técnicos en los errores. Un 422 claro vale más que un stacktrace crudo.",
          "El versionado evita romper a los clientes: prefiere una versión en la URL (/v1/…) o un header. Documenta todo con OpenAPI y genera validación y clientes desde la especificación.",
          "En seguridad, Spring Security + JWT, CORS restrictivos, rate limiting y logs de intentos fallidos cubren lo esencial. Una API bien documentada también es más segura: menos ambigüedad, menos abusos.",
        ],
        blocks: [
          {
            flow: [
              { label: "Petición HTTP" },
              { label: "Bean Validation" },
              { label: "Controlador" },
              { label: "Servicio de negocio" },
              { label: "Respuesta normalizada" },
            ],
          },
          {
            codeLang: "java",
            code: [
              "@PostMapping(\"/v1/users\")",
              "public ResponseEntity<UserDto> create(@Valid @RequestBody UserDto dto) {",
              "  return ResponseEntity.status(201).body(userService.create(dto));",
              "}",
              "// 201 → { \"id\": 1 }",
              "// 422 → { \"errors\": { \"email\": \"invalid\" } }",
            ],
          },
        ],
      },
      {
        slug: "cicd-actions",
        category: "devops",
        date: "Abril 2026",
        readTime: "7 min",
        title: "CI/CD de principio a fin con GitHub Actions",
        excerpt:
          "Un pipeline que prueba, escanea dependencias, construye la imagen Docker y despliega — sin que el equipo tenga que pensarlo.",
        tags: ["GitHub Actions", "CI/CD"],
        content: [
          "Un pipeline fiable se parece a un embudo: cada etapa cuesta más que la anterior y se falla pronto antes que tarde. Empezamos por lint y tests unitarios, dos minutos como mucho.",
          "Luego viene el análisis de dependencias (Dependabot, Snyk), la construcción de la imagen Docker y su escaneo (Trivy) antes de publicarla en el registro. Por fin, un despliegue automatizado a staging y, si hace falta, una puerta de validación manual para producción.",
          "La clave está en la reproducibilidad: secretos en GitHub, versiones fijadas y cachés para mantener el pipeline rápido. Un pipeline corto y verde se consulta más que uno largo y roto.",
        ],
        blocks: [
          {
            flow: [
              { label: "Commit" },
              { label: "Lint + tests" },
              { label: "Escaneo de dependencias" },
              { label: "Imagen Docker" },
              { label: "Despliegue" },
            ],
          },
          {
            codeLang: "yaml",
            code: [
              "name: ci",
              "on: [push]",
              "jobs:",
              "  build:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "      - run: npm ci && npm test",
              "      - run: docker build -t app:${{ github.sha }} .",
              "      - run: docker push",
              "      - run: kubectl rollout restart deploy/api",
            ],
          },
        ],
      },
      {
        slug: "docker-kubernetes",
        category: "devops",
        date: "Marzo 2026",
        readTime: "8 min",
        title: "Docker y Kubernetes: contenedores sin quemarse",
        excerpt:
          "Imágenes mínimas, secretos, límites de recursos y probes: los reflejos para una contenedorización limpia y predecible.",
        tags: ["Docker", "Kubernetes"],
        content: [
          "Una buena imagen Docker se apoya en pocos principios: base mínima (distroless, alpine), build multi-stage para copiar solo el artefacto final y nunca empaquetar secretos en la imagen.",
          "En Kubernetes, la previsibilidad pasa por limits/requests de CPU y memoria: un pod sin límites puede tumbar un nodo. Las probes (liveness, readiness) dicen al orquestador cuándo un pod está listo para recibir tráfico.",
          "Por último, configmaps y secrets separan la configuración del código, y un NetworkPolicy limita quién habla con quién. Contenerizar es fácil; operar limpio es una disciplina.",
        ],
        blocks: [
          {
            flow: [
              { label: "Dockerfile" },
              { label: "docker build" },
              { label: "Imagen" },
              { label: "docker run → contenedor" },
              { label: "kubectl apply → pod" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Construir la imagen",
              "docker build -t spring-api:1.0 .",
              "",
              "# 2. Lanzar el contenedor",
              "docker run -d -p 8080:8080 --name api spring-api:1.0",
              "docker ps",
              "docker logs -f api",
              "",
              "# 3. Kubernetes: despliegue",
              "kubectl apply -f deployment.yml",
              "kubectl get pods",
              "kubectl rollout status deployment/api",
            ],
          },
        ],
      },
      {
        slug: "pentest-web",
        category: "security",
        date: "Febrero 2026",
        readTime: "9 min",
        title: "Iniciación al test de intrusión de aplicaciones web",
        excerpt:
          "OWASP Top 10, herramientas y metodología: cómo se detectan — y corrigen — las vulnerabilidades antes de que otros las exploten.",
        tags: ["Pentest", "OWASP", "Seguridad"],
        content: [
          "Un test de intrusión comienza con el reconocimiento: cartografiar la aplicación, enumerar endpoints e identificar tecnologías (Wappalyzer, Burp Suite, OWASP ZAP). Luego se fija un alcance preciso para probar solo lo autorizado.",
          "Las fallas clásicas son inyección SQL, XSS, CSRF, fugas de credenciales y controles de acceso rotos. El OWASP Top 10 sigue siendo la rejilla de referencia para priorizar.",
          "Lo esencial es el informe: hallazgos ordenados por criticidad con una corrección concreta valen más que una lista de vulnerabilidades. Probar con regularidad convierte la seguridad en un reflejo, no en un proyecto puntual.",
        ],
        blocks: [
          {
            flow: [
              { label: "Reconocimiento" },
              { label: "Escaneo y enumeración" },
              { label: "Explotación controlada" },
              { label: "Informe + corrección" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Reconocimiento",
              "nmap -sV -p- api.target.tld",
              "",
              "# 2. Escaneo (alcance autorizado)",
              "sqlmap -u \"https://api.target.tld/users?id=1\" --batch",
              "",
              "# 3. Informe: criticidad + corrección",
            ],
          },
        ],
      },
      {
        slug: "spring-security-jwt",
        category: "security",
        date: "Enero 2026",
        readTime: "6 min",
        title: "Spring Security y JWT: autenticación sólida",
        excerpt:
          "Buenas prácticas para proteger tus endpoints: tokens cortos, refresh tokens y gestión fina de roles.",
        tags: ["Spring Security", "JWT", "Autenticación"],
        content: [
          "Una cadena JWT no es una sesión mágica: está firmada (HS256/RS256) y se verifica en cada petición. El punto central es la vida útil: un access token corto (15 minutos) limita el alcance de un robo.",
          "El refresh token vive más y permite obtener un nuevo access token sin pedir las credenciales de nuevo. Guárdalo de forma segura (HttpOnly, SameSite) y contempla la revocación.",
          "Por último, Spring Security modela finamente las autorizaciones: roles, authorities y filtros personalizados. La autenticación robusta no es una librería; es una combinación coherente de prácticas.",
        ],
        blocks: [
          {
            flow: [
              { label: "Credenciales" },
              { label: "Spring Security verifica" },
              { label: "JWT (15 min)" },
              { label: "Petición protegida (Bearer)" },
              { label: "Acceso + roles" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Login → ticket JWT (15 min)",
              "POST /auth/login",
              "{ \"username\": \"...\", \"password\": \"...\" }",
              "→ { \"accessToken\": \"eyJhbGciOi...\", \"expires_in\": 900 }",
              "",
              "# 2. Petición protegida",
              "GET /v1/orders",
              "Authorization: Bearer eyJhbGciOi...",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    items: [
      {
        slug: "spring-microservices",
        category: "dev",
        date: "يونيو 2026",
        readTime: "٦ دقائق",
        title: "Spring Boot: بناء Microservices قوية البنية",
        excerpt:
          "اكتشاف الخدمات، الإعداد المركزي، القدرة على التحمل… عناصر بنية Microservices تصمد فعلياً في الإنتاج.",
        tags: ["Spring Boot", "Spring Cloud", "Microservices"],
        content: [
          "التطبيق المتحول يصبح صعب التطوير: الكود والفرق والنشر يصبحون مترابطين. تقسيم النظام إلى Microservices يعزل المجالات ويتيح نشر كل جزء باستقلالية، شرط توفير الأدوات الصحيحة منذ البداية.",
          "مع Spring Cloud، يتيح اكتشاف الخدمات (Eureka) تسجيل كل مثيل وإيجاد أقرانه دون عناوين مثبتة. ويوفّر Config Server إعداداً مركزياً، بينما يوجّه Spring Cloud Gateway الحركة الواردة نحو الخدمات الصحيحة.",
          "القدرة على التحمل ليست خياراً: timeouts وcircuit breakers (Resilience4j) وإعادة المحاولة تحوّل backend يتهاوى إلى نظام يتدهور بأناقة. الأمان يبقى عرضياً: بوابة API واحدة توثق، ثم تُتحقق الرموز داخلياً.",
        ],
        blocks: [
          {
            flow: [
              { label: "طلب العميل" },
              { label: "بوابة API (توجيه + مصادقة)" },
              { label: "الاكتشاف + الإعداد" },
              { label: "الخدمة المصغرة" },
              { label: "قواعد البيانات + قوائم" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Service discovery (Eureka)",
              "docker run -d -p 8761:8761 springcloud/eureka",
              "",
              "# 2. Config centralisée (côté service)",
              "spring.config.import=optional:configserver:http://config-server:8888",
              "",
              "# 3. Résilience: circuit breaker",
              "@CircuitBreaker(name = \"orders\", fallbackMethod = \"fallbackOrder\")",
            ],
          },
        ],
      },
      {
        slug: "rest-api-secure",
        category: "dev",
        date: "مايو 2026",
        readTime: "٥ دقائق",
        title: "واجهات REST: ممارسات أفضل لخلفية آمنة",
        excerpt:
          "تحقق صارم، إصدارات، OpenAPI وإدارة أخطاء: تصميم واجهة يصعب اختراقها وسهلة الاستخدام.",
        tags: ["REST", "OpenAPI", "ممارسات جيدة"],
        content: [
          "الواجهة سطح هجوم: يجب على كل نقطة وصول أن تتحقق من المدخلات (bean validation)، وتحدّ الصفحات، ولا تسرّب تفاصيل تقنية في الأخطاء. استجابة 422 واضحة أفضل من أثر استثناء خام.",
          "إصدار الواجهة يحمي العملاء الحاليين: فضّل إصداراً في الرابط (/v1/…) أو في header. ثم وثّق كل شيء عبر OpenAPI وولّد التحقق والعملاء من المواصفة.",
          "أما الأمان، فـ Spring Security + JWT وCORS مقيد وrate limiting وسجلات للمحاولات الفاشلة تغطي الضروريات. الواجهة الموثقة جيداً أكثر أماناً: غموض أقل وإساءة أقل.",
        ],
        blocks: [
          {
            flow: [
              { label: "طلب HTTP" },
              { label: "Bean Validation" },
              { label: "وحدة التحكم" },
              { label: "خدمة العمل" },
              { label: "استجابة موحدة" },
            ],
          },
          {
            codeLang: "java",
            code: [
              "@PostMapping(\"/v1/users\")",
              "public ResponseEntity<UserDto> create(@Valid @RequestBody UserDto dto) {",
              "  return ResponseEntity.status(201).body(userService.create(dto));",
              "}",
              "// 201 → { \"id\": 1 }",
              "// 422 → { \"errors\": { \"email\": \"invalid\" } }",
            ],
          },
        ],
      },
      {
        slug: "cicd-actions",
        category: "devops",
        date: "أبريل 2026",
        readTime: "٧ دقائق",
        title: "CI/CD من الألف إلى الياء مع GitHub Actions",
        excerpt:
          "خط أنابيب يختبر، يفحص التبعيات، يبني صورة Docker وينشر — دون أن يفكر فيه الفريق.",
        tags: ["GitHub Actions", "CI/CD"],
        content: [
          "الخط الموثوق يشبه قمعاً: كل مرحلة أغلى من سابقتها، لذلك نفشل مبكراً لا متأخراً. ابدأ بالتهذيب والاختبارات الوحدوية، دقيقتان على الأكثر.",
          "ثم يأتي تحليل التبعيات (Dependabot, Snyk)، وبناء صورة Docker وفحصها (Trivy) قبل النشر في السجل. وأخيراً نشر آلي إلى بيئة التجربة، ثم إلى الإنتاج ببوابة موافقة يدوية عند الحاجة.",
          "المفتاح هو إعادة الإنتاج: أسرار في GitHub وإصدارات مثبتة وذاكرة تخزين مؤقتة لسرعة الخط. خط قصير وأخضر يُراجع أكثر من خط طويل معطوب.",
        ],
        blocks: [
          {
            flow: [
              { label: "الدفعة" },
              { label: "Lint + اختبارات" },
              { label: "فحص التبعيات" },
              { label: "صورة Docker" },
              { label: "النشر" },
            ],
          },
          {
            codeLang: "yaml",
            code: [
              "name: ci",
              "on: [push]",
              "jobs:",
              "  build:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "      - run: npm ci && npm test",
              "      - run: docker build -t app:${{ github.sha }} .",
              "      - run: docker push",
              "      - run: kubectl rollout restart deploy/api",
            ],
          },
        ],
      },
      {
        slug: "docker-kubernetes",
        category: "devops",
        date: "مارس 2026",
        readTime: "٨ دقائق",
        title: "Docker و Kubernetes: حاويات دون حروق",
        excerpt:
          "صور مصغّرة، أسرار، حدود موارد وفحوصات: عادات للحاويات نقية وقابلة للتوقع.",
        tags: ["Docker", "Kubernetes"],
        content: [
          "الصورة الجيدة تستند إلى مبادئ قليلة: قاعدة مصغّرة (distroless, alpine)، بناء متعدد المراحل لنسخ الأثر النهائي فقط، وعدم تضمين الأسرار في الصورة أبداً.",
          "في Kubernetes، القدرة على التوقع تأتي من limits/requests للمعالج والذاكرة: جراب بلا حدود قد يطيح بعقدة. وتخبر probes (liveness, readiness) المنسّق متى يكون الجراب جاهزاً لاستقبال الحركة.",
          "أخيراً، تفصل configmaps وsecrets الإعداد عن الكود، ويحدّد NetworkPolicy من يخاطب من. الترقيع سهل؛ التشغيل النظيف انضباط.",
        ],
        blocks: [
          {
            flow: [
              { label: "Dockerfile" },
              { label: "docker build" },
              { label: "صورة" },
              { label: "docker run → حاوية" },
              { label: "kubectl apply → pod" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Build de l'image",
              "docker build -t spring-api:1.0 .",
              "",
              "# 2. Lancement du conteneur",
              "docker run -d -p 8080:8080 --name api spring-api:1.0",
              "docker ps",
              "docker logs -f api",
              "",
              "# 3. Kubernetes : déploiement",
              "kubectl apply -f deployment.yml",
              "kubectl get pods",
              "kubectl rollout status deployment/api",
            ],
          },
        ],
      },
      {
        slug: "pentest-web",
        category: "security",
        date: "فبراير 2026",
        readTime: "٩ دقائق",
        title: "مقدمة لاختبار الاختراق لتطبيقات الويب",
        excerpt:
          "OWASP Top 10 والأدوات والمنهجية: كيف تُكتشف الثغرات — وتُصلح — قبل أن يستغلها الآخرون.",
        tags: ["Pentest", "OWASP", "الأمن"],
        content: [
          "اختبار الاختراق يبدأ بالاستطلاع: رسم خريطة التطبيق، حصر نقاط الوصول وتحديد التقنيات (Wappalyzer, Burp Suite, OWASP ZAP). ثم يُحدد نطاق دقيق لاختبار ما هو مصرّح به فحسب.",
          "الثغرات الكلاسيكية: حقن SQL وXSS وCSRF وتسريب البيانات وثغرات ضبط الوصول. يبقى OWASP Top 10 الشبكة المرجعية لتحديد الأولويات.",
          "الأهم هو التقرير: نتائج مرتّبة حسب الخطورة مع حل ملموس خير من قائمة ثغرات. الاختبار المنتظم يجعل الأمان عادة لا مشروعاً مؤقتاً.",
        ],
        blocks: [
          {
            flow: [
              { label: "الاستطلاع" },
              { label: "الفحص والتعداد" },
              { label: "استغلال مضبوط" },
              { label: "تقرير + معالجة" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Reconnaissance",
              "nmap -sV -p- api.target.tld",
              "",
              "# 2. Scan: autorisé",
              "sqlmap -u \"https://api.target.tld/users?id=1\" --batch",
              "",
              "# 3. Rapport: criticité + remédiation",
            ],
          },
        ],
      },
      {
        slug: "spring-security-jwt",
        category: "security",
        date: "يناير 2026",
        readTime: "٦ دقائق",
        title: "Spring Security و JWT: مصادقة قوية",
        excerpt:
          "ممارسات جيدة لحماية نقاط الوصول: رموز قصيرة المدى، refresh tokens وإدارة أدق للأدوار.",
        tags: ["Spring Security", "JWT", "المصادقة"],
        content: [
          "سلسلة JWT ليست جلسة سحرية: توقيع (HS256/RS256) وتحقق في كل طلب. الجوهر هو العمر: access token قصير (١٥ دقيقة) يحد من أثر السرقة.",
          "أما refresh token فأطول عمراً ويتيح الحصول على access token جديد دون إعادة طلب البيانات. خزّنه بأمان (HttpOnly, SameSite) وفكّر في الإبطال.",
          "أخيراً، يوفّر Spring Security نمذجة دقيقة للصلاحيات: roles وauthorities ومرشحات مخصصة. المصادقة القوية ليست مكتبة; بل مجموعة ممارسات متناسقة.",
        ],
        blocks: [
          {
            flow: [
              { label: "بيانات الاعتماد" },
              { label: "يتحقق Spring Security" },
              { label: "JWT (15 دقيقة)" },
              { label: "طلب محمي (Bearer)" },
              { label: "الوصول + الأدوار" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Login → ticket JWT (15 min)",
              "POST /auth/login",
              "{ \"username\": \"...\", \"password\": \"...\" }",
              "→ { \"accessToken\": \"eyJhbGciOi...\", \"expires_in\": 900 }",
              "",
              "# 2. Requête protégée",
              "GET /v1/orders",
              "Authorization: Bearer eyJhbGciOi...",
            ],
          },
        ],
      },
    ],
  },
  tam: {
    items: [
      {
        slug: "spring-microservices",
        category: "dev",
        date: "ⵢⵓⵏⵢⵓ 2026",
        readTime: "6 min",
        title: "Spring Boot: ⴰⵙⵏⴼⵓ ⵏ microservices ⵉⵔⵖⴰⵏ",
        excerpt:
          "Service discovery, ⵉⵥⴹⴰⵕ ⴰⵎⴰⵙⵙⴰⵏ, resilience… ⵉⵙⴳⵎⵉ ⵏ architexture ⵉⵍⵍⴰⵏ ⴷⴰⵔⵙ production.",
        tags: ["Spring Boot", "Spring Cloud", "Microservices"],
        content: [
          "ⴰⵙⵏⴼⵓ ⴰⵎⵢⴰⵏ ⵉⵍⵍⴰ ⵖ ⵉⵄⴰⵍⴰⵊ ⴰⵙ ⵉⵊⵎⵎⴰⵏ ⴷ ⴰⵢⴰ: code, teams ⴷ deploys ⴰⵍⴰⵏ ⴷ ⵓⵣⴷⴰⵢ. ⵙ ⵉⵎⵥⵉ Microservices ⵏⵜⵜⴰⵥⴰⵍ ⴷⴰⵢ ⵓⵎⴰⴹⴰⵍ ⴷ ⵏⵣⴷⵉ ⴰⴽⴽ ⵉⴼⵔⴰⵏ ⵙ ⵓⴷⴰⵖ ⵉⵍⵍⴰⵏ — ⵉⵎⴰ ⵏⵙⴽⴻⵔ ⵉⵎⴰⵙⵙⵏ ⵉⵏⴻⵙ ⵙⴳ ⵓⵣⴰⵍⵓ.",
          "ⵙ Spring Cloud, service discovery (Eureka) ⵉⵙⵙⴰⵖ ⴽⵓ ⵢⴰⵏ instance ⴷ ⵉⵊⵊⴰ ⵅⴼ ⵉⵖⵓⴷⴰⵔ ⵏⵏⵙ ⵡⴰⵔ ⵉⵏⵣⵉⴳⵉⵜⵏ. Config Server ⵉⵙⵎⵓⵏ ⵉⵕⵥⴰⵎ, ⵎⴰⵢ ⵏⵏ ⵉ ⵓⵙⵡⴰⵍ Spring Cloud Gateway ⵖⴻⵔ ⵉⵙⵍⵉⵎ ⵉⵏⴻⴳⴳⴰ.",
          "Resilience ⵓⵔ ⵢⴻⵍⵍⵉ ⵙ ⵓⴷⵖⵓⵙ: timeouts, circuit breakers (Resilience4j) ⴷ retries ⵙⴰⵕⵏ ⵙ backend ⵉⵖⵍⴰⵏ ⵖ ⵢⴰⵏ ⵏ ⵓⵙⵖⵍⵓ ⵉⵍⵍⴰⵏ. ⵜⴰⵏⴼⵍⵉⵜ ⵜⴻⴱⵇⴰ ⵙ ⵜⵉⵖⵔⴷⵜ: API Gateway ⵉⴷⴷⵔⴰⵏ, ⵖ ⵉⴷ ⵉⵙⵙⴼⵜⵜⵓ ⵜⴰⵔⵏⴰⵖⵜ.",
        ],
        blocks: [
          {
            flow: [
              { label: "ⵓⵎⴰⵢ ⵏ ⵓⵍⵎⵎⴰ" },
              { label: "API Gateway" },
              { label: "Discovery + Config" },
              { label: "Microservice" },
              { label: "DB + files" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Service discovery (Eureka)",
              "docker run -d -p 8761:8761 springcloud/eureka",
              "",
              "# 2. Config centralisée",
              "spring.config.import=optional:configserver:http://config-server:8888",
              "",
              "# 3. Circuit breaker",
              "@CircuitBreaker(name = \"orders\", fallbackMethod = \"fallbackOrder\")",
            ],
          },
        ],
      },
      {
        slug: "rest-api-secure",
        category: "dev",
        date: "ⵎⴰⵢⵢⵓ 2026",
        readTime: "5 min",
        title: "APIs REST: ⵜⵉⵢⴰⴼⵓⵜⵉⵏ ⵉⴼⵓⵍⴽⵉⵏ ⵉ backend ⵉⵥⵉⵍⵏ",
        excerpt:
          "ⴰⵙⵏⵜⵎ ⵉⵛⵇⵇⴰⵏ, versioning, OpenAPI ⴷ ⵓⵙⵙⴼⵙⴻⵔ ⵏ requêtes: ⴰⵙⴽⴻⴷ ⵏ API ⵉⵄⴰⵙⴰⵏ ⵙ ⵓⵏⴻⵙ.",
        tags: ["REST", "OpenAPI", "Bonnes pratiques"],
        content: [
          "API ⵜⴳⴰ ⵜⴰⵙⴳⴳⵯⴰⵣⵜ ⵏ ⵓⴽⵛⵓⵎ: ⴽⵓ endpoint ⵉⵥⴰⵔ ⴰⴷ ⵉⵙⵏⵜⵎ ⵜⵉⵙⵇⵇⴰⵎⵉⵏ, ⴰⴷ ⵉⵙⵓⵍ ⵖ ⵉⵙⵏⴽⴽⴰ ⵓⵎⴻⵖⵔⴰⴷ, ⵡⴰⵔ ⴰⴷ ⵢⴰⴼⵏ ⵜⵉⵏⵎⵍⴰⵢⵉⵏ ⵜⵉⵏⴰⴽⴰⵍⵉⵏ ⵖ ierrors. ⵢⴰⵏ 422 ⵉⴼⵙⴰⵏ ⵉⴼⵓⵍⴽⵉ ⵓⴳⴳⴰⵔ stacktrace.",
          "Versioning ⵉⴼⴰⵕⵄ ⵉⵎⴰⵙⵙⵏ ⵉⵍⵍⴰⵏ: version ⵖ URL (/v1/…) ⵏⴻⵖ header. ⵏⵣⵎⴰ ⵙ OpenAPI ⴷ ⵏⵖⵔ validation ⴷ clients ⵙⴳ spec.",
          "ⵖ ⵜⴰⵏⴼⵍⵉⵜ: Spring Security + JWT, CORS ⵉⵙⵓⴽⴽⵜⵏ, rate limiting ⴷ ⵉⵎⵉⵍⵏ ⵏ ⵜⵏⴼⵍⵉⵜ  ⵙⵎⴰⵏⴻⵏ ⵜⴰⵎⴰⴹⴰⵏⵜ. API ⵉⵏⴷⴰⵏ ⵉⴼⴰⵔⴰⵏ ⵜⴰⵏⴼⵍⵉⵜ: ⴰⵏⴽⴽⴰⵍ ⴷⵔⵓⵏ.",
        ],
        blocks: [
          {
            flow: [
              { label: "ⵉⵎⵉ HTTP" },
              { label: "Validation" },
              { label: "Controller" },
              { label: "Service" },
              { label: "ⵜⴰⵔⴰⵔⵜ" },
            ],
          },
          {
            codeLang: "java",
            code: [
              "@PostMapping(\"/v1/users\")",
              "public ResponseEntity<UserDto> create(@Valid @RequestBody UserDto dto) {",
              "  return ResponseEntity.status(201).body(userService.create(dto));",
              "}",
              "// 201 → { \"id\": 1 }",
              "// 422 → { \"errors\": { \"email\": \"invalid\" } }",
            ],
          },
        ],
      },
      {
        slug: "cicd-actions",
        category: "devops",
        date: "ⵢⵓⵏⵢⵓ 2026",
        readTime: "7 min",
        title: "CI/CD ⵙ GitHub Actions",
        excerpt:
          "Pipeline ⵉⵥⴰⵔⵏ, ⵉⵙⴽⵏⵏ, ⵉⵡⴰⵍⴰ Docker image ⴷ ⵉⵙⵙⴻⴼⴰⵖ — ⵡⴰⵔ ⵎⴰ ⵢⴰⵔⵏ ⵜⴰⵎⴰⵢⵏⵓⵜ.",
        tags: ["GitHub Actions", "CI/CD"],
        content: [
          "Pipeline ⵉⵎⵏⴻⴹⴰⵏ ⵉⵍⵍⴰ ⴰⵎ ⵓⴷⴰⵢ: ⴽⵓ ⴰⵙⵏⵓⴼⵍ ⵉⵣⴰⵢⴷ ⵥⵓⵀⵔ— ⵏⵖⵍ ⵥⵉⴽⴽ ⵓⵔ ⴷ ⵓⵏ ⵖⵉⴽⴽ. ⵏⴱⴷⴷⵓ ⵙ lint ⴷ unit tests, ⴽⵔⴰⴹ ⵙⴹⴰⵏ ⴰⵎ ⵓⵎⴰⵔⴰ.",
          "ⵍⴰⵃ ⴷ ⴰⵙⴽⴰⵏ ⵏ ⵜⵜⴰⴱⴰⵢⴰ (Dependabot, Snyk), ⵖ ⵉⴷ ⴰⵙⵜⵏⴰⵡⴰ ⵏ Docker image ⴷ ⵓⵙⴽⴰⵏ ⵏ ⵏⵏⵙ (Trivy) ⵉ ⵜⴰⵖⴰⵏⵉⵏ. ⵖ ⵉⴷ ⴰⵙⵙⴻⴼⴰⵖ ⵏ ⵓⵎⴰⵢⵏⵓ ⵖ staging, ⵖ ⵉⴷ production ⵙ ⵓⴷⵖⴰⵔ ⵏ ⵓⵙⵏⵜⵎ",
          "ⵜⴰⵙⴰⵔⵓⵜ ⵜⴳⴰ: secrets ⵖ GitHub, ⵉⵙⵓⵖⴰⵍ ⵉⴱⵓⵖⴰⵏ ⴷ caches ⵉ ⵜⴰⵎⵙⵉ ⵏ pipeline. Pipeline ⵖⵣⵣⵉⴼⵏ ⴷ ⵓⵔⵎⴰⵏ ⵉⵏⴷⴰⵏ ⵓⴳⴳⴰⵔ ⵢⵓⵏ ⵖⵣⵣⵉⴼⵏ ⵉⵖⵍⴰⵏ.",
        ],
        blocks: [
          {
            flow: [
              { label: "ⴰⵙⵙⴻⴼⵙ" },
              { label: "Lint + tests" },
              { label: "Scan" },
              { label: "Image Docker" },
              { label: "ⴰⵙⵙⴻⴼⴰⵖ" },
            ],
          },
          {
            codeLang: "yaml",
            code: [
              "name: ci",
              "on: [push]",
              "jobs:",
              "  build:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "      - run: npm ci && npm test",
              "      - run: docker build -t app:${{ github.sha }} .",
              "      - run: docker push",
              "      - run: kubectl rollout restart deploy/api",
            ],
          },
        ],
      },
      {
        slug: "docker-kubernetes",
        category: "devops",
        date: "ⵎⴰⵔⵙ 2026",
        readTime: "8 min",
        title: "Docker ⴷ Kubernetes: ⴰⵙⵏⴽⴰⵙ ⵏ ⵉⵅⵚⴰⵎ ⵙ ⵓⴼⵔⴰⴽ",
        excerpt:
          "Images ⵉⵎⵥⵉⵢⵏ, secrets, limites ⵏ ⵓⵙⵀⵉⵍ ⴷ probes: ⵉⵣⵎⴻⵔ ⵉ ⴰⵙⵏⴽⴰⵙ ⵏ ⵉⵅⵚⴰⵎ ⵉⵥⵉⵍⵏ.",
        tags: ["Docker", "Kubernetes"],
        content: [
          "Image ⵉⴼⵓⵍⴽⵉⵜ ⵜⴻⵇⵇⵉⵎ ⵅⴼ ⵢⴰⵏ ⵀⴰⵎⵎ: base ⵉⵎⵥⵉⵢ ⵏ (distroless, alpine), multi-stage ⴰⴷ ⵢⴰⵙ ⵖⴰⵔ artefact ⴰⵏⴳⴳⴰⵔⵓ, ⵡⴰⵔ ⵉⵙⵙⵓⴷⴰⵎ secrets ⵖ image.",
          "ⵖ Kubernetes, ⵜⴰⵎⵓⵙ ⵜⴻⴽⴽⴰ ⵙ limits/requests ⵏ CPU ⴷ ⵜⴰⴽⴽⵯⴰⵜ: pod ⵡⴰⵔ limites ⵉⵇⵇⴰⵔ ⴰⴷ ⵉⵖⵍ ⵢⴰⵏ node. Probes (liveness, readiness) ⵍⵍⴰⵏⵜ ⵎⵍⴻⵏⵜ orchestrator ⵎⵍⵎⵉ ⵜⵍⵍⴰ pod ⵜⴰⵃⴰⴷⵔⵜ ⵉ ⵜⵔⴰⴽⴰ.",
          "ⵖ ⵜⴳⵊⴰⵡⵜ: configmaps ⴷ secrets ⴼⵕⵇⵏ ⵉⵕⵥⴰⵎ ⵙ ⵓⴷⴰⵖ, ⵉⵏⵜⵜ ⵉ NetworkPolicy ⵖ ⵉⵏ ⴷ ⵉⵏ. ⴰⵙⵏⴽⴰⵙ ⵉⵖⴻⵍⴻⵏ ⵉⴳⴰ ⵎⴰⵙⴰⵙ",
        ],
        blocks: [
          {
            flow: [
              { label: "Dockerfile" },
              { label: "docker build" },
              { label: "Image" },
              { label: "docker run → ⴰⵅⵚⵉⵎ" },
              { label: "kubectl apply → pod" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Build de l'image",
              "docker build -t spring-api:1.0 .",
              "",
              "# 2. Lancement du conteneur",
              "docker run -d -p 8080:8080 --name api spring-api:1.0",
              "docker ps",
              "docker logs -f api",
              "",
              "# 3. Kubernetes : déploiement",
              "kubectl apply -f deployment.yml",
              "kubectl get pods",
              "kubectl rollout status deployment/api",
            ],
          },
        ],
      },
      {
        slug: "pentest-web",
        category: "security",
        date: "ⴱⵔⴰⵢⵔ 2026",
        readTime: "9 min",
        title: "ⵜⴰⵙⵏⵉⵡⵜ ⵉ ⵓⵎⵣⴰⵔ ⵏ ⵜⵉⵙⵓⵏⴰⵙ ⵏ ⵡⵉⴱ",
        excerpt:
          "OWASP Top 10, ⵉⵎⴰⵙⵙⵏ ⴷ ⵜⴰⵔⵉⵡⵜ: ⵎⴰⵏⴻⴽ ⵏⵜⵜⴰⴼⴰ — ⵏⵙⵙⵏⵜⵎ — ⵉⵣⵎⴻⵔ ⵉ ⵓⵎⵣⴰⵔ ⵉⵡⴰⵍⴰⵏ ⵉ ⵓⵎⵣⴰⵔ ⵏ ⵉⵎⴰⵏⵏⵓⴷⴰⵔⵏ.",
        tags: ["Pentest", "OWASP", "ⵜⴰⵏⴼⵍⵉⵜ"],
        content: [
          "ⵉⵣⵡⴰⵔ pentest: ⴰⵙⵏⴼⵍ ⵏ ⵓⵙⴰⴳⵎ, ⴰⴹⵓⵚ ⵏ endpoints ⴷ ⵉⵎⴰⵙⵙⵏ (Wappalyzer, Burp Suite, OWASP ZAP). ⵖ ⵏⵙⵎⵔ Trump scope ⴰⴷ ⵏⵣⵎ ⵖ ⵓⵎⴰⵏ ⵉⵜⵜⵓⵙⵎⵓⵏⴻⵏ.",
          "ⵉⵖⵎⴰⵙ ⵉⴽⵛⵛⴰⵎⵏ: injection SQL, XSS, CSRF, ⵓⵎⵉⵣ ⵏ ⵉⵙⴳⴰⵏ ⴷ ⵓⵏⵓⴹⵓⵏ ⵏ ⵓⵍⴷⴰⴼ. OWASP Top 10 ⵜⴻⴳⴰ ⵜⴰⵙⵖⵍⵜ ⵜⴰⵎⵣⴰⵔⵓⵜ.",
          "ⵜⴰⵎⴰⴳⵉⵜ ⵜⴳⴰ ⵜⴰⵏⴼⵍⵉⵜ: ⵉⵣⴷⵖⴰⵏ ⵅⴼ ⵓⵀⵉⵜ ⵎⴰⵍⴰ ⵢⴰⵏ ⵓⵙⴼⵉ ⵉⴹⴼⴰⵕⵏ. ⵓⵎⵣⴰⵔ ⵏ ⵓⵎⵃⴰⵍ ⵉⵜⵜⵓⵍⵓⵥⵏ ⵖ ⵓⴷⴰⵖ ⵉⵜⵜⵓ ⵏ ⵜⴰⵏⴼⵍⵉⵜ ⴽⴽⵯ ⵢⴰⵏ.",
        ],
        blocks: [
          {
            flow: [
              { label: "ⴰⵙⴽⴻⴷ" },
              { label: "Scan" },
              { label: "Exploitation" },
              { label: "Rapport" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Reconnaissance",
              "nmap -sV -p- api.target.tld",
              "",
              "# 2. Scan: autorisé",
              "sqlmap -u \"https://api.target.tld/users?id=1\" --batch",
              "",
              "# 3. Rapport: criticité + remédiation",
            ],
          },
        ],
      },
      {
        slug: "spring-security-jwt",
        category: "security",
        date: "ⵢⵏⴰⵢⵔ 2026",
        readTime: "6 min",
        title: "Spring Security ⴷ JWT: ⵜⴰⵙⵏⴰⵡⵉⵏ ⵜⵉⵅⴰⵜⴰⵔⵉⵏ",
        excerpt: "ⵜⵉⵢⴰⴼⵓⵜⵉⵏ ⵉⴼⵓⵍⴽⵉⵏ ⵉ ⵡⵓⵙⵙⴰⵏ ⵏⵏⴰⴽ: tokens ⵉⵎⵥⴽⴰⵢⵏ, refresh tokens ⴷ ⵓⵙⵏⴼⵍ ⵏ roles.",
        tags: ["Spring Security", "JWT", "ⵜⴰⵙⵏⴰⵡⵉⵏ"],
        content: [
          "JWT ⵓⵔ ⵜⴳⴰ ⵜⴰⵎⵍⵉⴷⵜ: ⵜⴻⵜⵜⵓⵙⴽⴰⵔ (HS256/RS256) ⵜⴻⵜⵜⵓⵙⵙⵏⵜⵎ ⴽⵓ ⵜⵉⵖⵔⵉ. ⵜⴰⵎⴰⴳⵉⵜ ⵜⴳⴰ ⵓⵎⵔⵉ: access token ⵉⵎⵥⵉ ⴰⴷ (ⴰⵡⴰⵍ 15 ⵏ ⵜⴳⵉⵏⵉⵡⵉⵏ) ⵉⵙⵓⵍ ⵖ ⵓⴼⴰⵔⵜ ⵏ ⵓⴽⵛⵓⵎ.",
          "Refresh token  ⵉⴷⴷⵔ ⴰⵢⵍⵓⴽ: ⵉⵙⵎⴰⵏ ⵡⴰⵀⴷ ⴰⵙⵙ ⵉⵣⵍ ⵙ access token ⴰⵎⴰⵢⵏⵓ ⵡⴰⵔ ⵉⵙⴰⵖ ⵉⵙⴳⴰⵏ. ⵙⵜⵓⵔ ⵙ ⵓⴼⵔⴰⴽ (HttpOnly, SameSite) ⴷ ⴰⵔⵎ ⵙ ⴰⵣⵣⵏⴻⵖ ⵏ ⵓⵙⵙⴼⴻⵖ.",
          "ⵖ ⵜⴳⵊⴰⵡⵜ, Spring Security ⵉⵙⵎⵓⵏ ⵜⴰⵎⴰⴹⴰⵏⵜ: roles, authorities ⴷ ⵉⵎⵙⴽⴰⵍ ⵉⵖⴰⵍⴰⵏ. ⵜⴰⵙⵏⴰⵡⵉⵜ ⵜⴰⵅⴰⵜⴰⵔⵜ ⵓⵔ ⵜⴳⴰ ⵢⴰⵜ library; ⵜⴳⴰ ⵜⴰⵎⴰⵣⵓⵏⵜ ⵏ ⵉⵎⵉⵏⵉⴳⵏ.",
        ],
        blocks: [
          {
            flow: [
              { label: "ⵉⵙⴳⴰⵏ" },
              { label: "Spring Security" },
              { label: "JWT" },
              { label: "Bearer" },
              { label: "Roles" },
            ],
          },
          {
            codeLang: "bash",
            code: [
              "# 1. Login → ticket JWT (15 min)",
              "POST /auth/login",
              "{ \"username\": \"...\", \"password\": \"...\" }",
              "→ { \"accessToken\": \"eyJhbGciOi...\", \"expires_in\": 900 }",
              "",
              "# 2. Requête protégée",
              "GET /v1/orders",
              "Authorization: Bearer eyJhbGciOi...",
            ],
          },
        ],
      },
    ],
  },
};
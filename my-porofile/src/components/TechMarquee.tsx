import type { ComponentType, CSSProperties } from "react";
import { Database, Cloud, Sparkles, TrendingUp } from "lucide-react";
import {
  SiOpenjdk,
  SiSpringboot,
  SiSpringsecurity,
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCssmodules,
  SiTailwindcss,
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiRabbitmq,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJira,
  SiConfluence,
  SiJsonwebtokens,
  SiFastapi,
  SiNodedotjs,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiGraphql,
  SiStripe,
  SiSwagger,
  SiCisco,
  SiVite,
  SiJenkins,
  SiSonar,
  SiLinux,
  SiNginx,
  SiGradle,
} from "react-icons/si";

type TechIcon = ComponentType<{ size?: number | string; style?: CSSProperties; className?: string }>;

interface Tech {
  Icon: TechIcon;
  name: string;
  color: string;
}

const TECHS: Tech[] = [
  { Icon: SiOpenjdk, name: "Java", color: "#ED8B00" },
  { Icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
  { Icon: SiSpringsecurity, name: "Spring Security", color: "#6DB33F" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiAngular, name: "Angular", color: "#DD0031" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCssmodules, name: "CSS3", color: "#663399" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { Icon: SiSass, name: "Sass", color: "#CC6699" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { Icon: SiPython, name: "Python", color: "#FFD43B" },
  { Icon: SiNumpy, name: "NumPy", color: "#4DABCF" },
  { Icon: SiPandas, name: "Pandas", color: "#8C7BFF" },
  { Icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { Icon: Database, name: "SQL Server", color: "#60a5fa" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiRedis, name: "Redis", color: "#FF4438" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: SiApachekafka, name: "Kafka", color: "#B3B3B3" },
  { Icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", color: "#94a3b8" },
  { Icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
  { Icon: SiGitlab, name: "GitLab", color: "#FC6D26" },
  { Icon: SiJenkins, name: "Jenkins", color: "#D24939" },
  { Icon: SiSonar, name: "SonarQube", color: "#4E9BCD" },
  { Icon: SiJira, name: "Jira", color: "#0052CC" },
  { Icon: SiConfluence, name: "Confluence", color: "#6B8BFF" },
  { Icon: SiJsonwebtokens, name: "JWT", color: "#D63AFF" },
  { Icon: Cloud, name: "Azure AI-900", color: "#0078D4" },
  { Icon: Sparkles, name: "OpenAI", color: "#412991" },
  { Icon: TrendingUp, name: "XGBoost", color: "#FF9C42" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#9CA3AF" },
  { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { Icon: SiStripe, name: "Stripe", color: "#635BFF" },
  { Icon: SiSwagger, name: "Swagger", color: "#85EA2D" },
  { Icon: SiLinux, name: "Linux", color: "#FCC624" },
  { Icon: SiNginx, name: "Nginx", color: "#009639" },
  { Icon: SiGradle, name: "Gradle", color: "#3DDC97" },
  { Icon: SiCisco, name: "CCNA", color: "#1BA0D7" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
];

export default function TechMarquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-card/60 py-8 backdrop-blur-[2px] max-sm:py-6"
      aria-label="Technologies maîtrisées"
    >
      <div className="marquee-mask">
        <div dir="ltr" className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-16 pr-16">
              {TECHS.map(({ Icon, name, color }) => (
                <span
                  key={`${copy}-${name}`}
                  className="flex items-center gap-3.5 whitespace-nowrap text-muted transition hover:text-ink"
                >
                  <Icon size={38} style={{ color }} />
                  <span className="text-[1.02rem] font-semibold">{name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
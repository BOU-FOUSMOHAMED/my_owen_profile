import {
  ArrowRight,
  Send,
} from "lucide-react";
import {
  SiGithub,
  SiOpenjdk,
  SiGit,
  SiNodedotjs,
  SiDocker,
  SiReact,
  SiApachekafka,
  SiRabbitmq,
  SiKubernetes,
  SiPython,
  SiTensorflow,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { personal } from "../data/personal";
import { useLanguage } from "../context/LanguageContext";

export interface FloatingIcon {
  id: number;
  Icon: IconType;
  label: string;
  color: string;
}

export const floatingIcons: FloatingIcon[] = [
  { id: 1, Icon: SiGithub, label: "GitHub", color: "#6e5494" },
  { id: 2, Icon: SiOpenjdk, label: "Java", color: "#f89820" },
  { id: 3, Icon: SiGit, label: "Git", color: "#f05032" },
  { id: 4, Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { id: 5, Icon: SiDocker, label: "Docker", color: "#2496ed" },
  { id: 6, Icon: SiReact, label: "React", color: "#61dafb" },
  { id: 7, Icon: SiApachekafka, label: "Kafka", color: "#4b5563" },
  { id: 8, Icon: SiRabbitmq, label: "RabbitMQ", color: "#ff6600" },
  { id: 9, Icon: SiKubernetes, label: "Kubernetes", color: "#326ce5" },
  { id: 10, Icon: SiPython, label: "Python", color: "#3776ab" },
  { id: 11, Icon: SiTensorflow, label: "IA", color: "#ff6f00" },
  { id: 12, Icon: SiMysql, label: "MySQL", color: "#00758f" },
  { id: 13, Icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { id: 14, Icon: SiSpringboot, label: "Spring Boot", color: "#6db33f" },
];

const RING_X = 43;
const RING_Y = 43;

export default function Hero() {
  const { t } = useLanguage();
  const total = floatingIcons.length;

  return (
    <section className="hero" id="home">
      <div className="hero__video" aria-hidden="true">
        <video
          className="hero__video-frame"
          src="https://assets.mixkit.co/videos/41648/41648-720.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="hero__video-overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__welcome">{t.hero.welcome}</p>
          <h1>
            {t.hero.hello} <span>{personal.firstName} {personal.lastName}</span>
          </h1>
          <h2>{t.hero.title}</h2>
          <p className="hero__description">{t.hero.description}</p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              {t.hero.viewProjects} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn--secondary">
              <Send size={18} /> {t.hero.contactMe}
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-decoration" />
          <div className="hero__avatar">
            // {personal.firstName[0]}{personal.lastName[0]}
            <img src="c:/Users/hp/Pictures/mon.jpg.webp" alt="mon profile" />
          </div>
          <div className="hero__floating">
            {floatingIcons.map(({ id, Icon, label, color }, index) => {
              const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
              const left = 50 + RING_X * Math.cos(angle);
              const top = 50 + RING_Y * Math.sin(angle);
              return (
                <span
                  key={id}
                  className="hero__float"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    translate: "-50% -50%",
                    animationDelay: `${index * 0.28}s`,
                    ["--icon-color" as string]: color,
                  }}
                  title={label}
                  aria-label={label}
                >
                  <Icon size={20} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
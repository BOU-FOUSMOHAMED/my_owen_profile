import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="ui-section ui-section--soft" id="notfound">
      <div className="ui-shell mx-auto max-w-xl text-center">
        <p className="ui-label mx-auto">{t.notFound.title}</p>
        <h1
          className="animate-float mt-4 bg-grad bg-clip-text text-[clamp(5rem,18vw,9rem)] font-display font-extrabold leading-[0.85] tracking-[-0.05em] text-transparent"
          aria-hidden="true"
        >
          404
        </h1>
        <h2 className="relative z-[1] mt-[-0.5rem] text-[clamp(1.5rem,4vw,2.2rem)]">
          {t.notFound.title}
        </h2>
        <p className="mx-auto mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-muted">
          {t.notFound.message}
        </p>
        <Link className="ui-btn ui-btn--primary mt-8 inline-flex" to="/">
          {t.notFound.backHome} <span aria-hidden="true">←</span>
        </Link>
      </div>
    </section>
  );
}
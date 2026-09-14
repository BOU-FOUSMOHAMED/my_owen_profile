import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="not-found">
      <h1>404</h1>
      <p>{t.notFound.message}</p>
      <Link to="/" className="btn btn--primary">
        {t.notFound.backHome}
      </Link>
    </section>
  );
}
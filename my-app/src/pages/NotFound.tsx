import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Page introuvable</p>
      <Link to="/" className="btn btn--primary">
        Retour à l'accueil
      </Link>
    </section>
  );
}

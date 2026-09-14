import {
  certifications,
  languages,
  personalSkills,
} from "../data/certifications";

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Qualifications supplémentaires</p>
          <h2>Certifications et langues</h2>
          <div className="section__line" />
        </div>

        <div className="certifications__grid">
          <div className="certifications__column">
            <h3 className="certifications__title">📜 Certifications</h3>
            <div className="certifications__list">
              {certifications.map((cert) => (
                <article key={cert.name} className="cert-card">
                  <div>
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="certifications__column">
            <h3 className="certifications__title">🌐 Langues</h3>
            <div className="languages-card">
              {languages.map((lang) => (
                <div key={lang.name} className="language-item">
                  <div className="language-item__info">
                    <h4>{lang.name}</h4>
                    <p>{lang.level}</p>
                  </div>
                  <div className="language-item__bar">
                    <div
                      className="language-item__fill"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="certifications__title mt-lg">💪 Compétences personnelles</h3>
            <div className="personal-skills">
              {personalSkills.map((skill) => (
                <span key={skill} className="personal-skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

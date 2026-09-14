import { Award, Globe, Dumbbell } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section className="section certifications" id="certifications">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t.certifications.label}</p>
          <h2>{t.certifications.title}</h2>
          <div className="section__line" />
        </div>

        <div className="certifications__grid">
          <div className="certifications__column">
            <h3 className="certifications__title">
              <Award size={20} /> {t.certifications.certsTitle}
            </h3>
            <div className="certifications__list">
              {t.certifications.certifications.map((cert) => (
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
            <h3 className="certifications__title">
              <Globe size={20} /> {t.certifications.languagesTitle}
            </h3>
            <div className="languages-card">
              {t.certifications.languages.map((lang) => (
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

            <h3 className="certifications__title mt-lg">
              <Dumbbell size={20} /> {t.certifications.personalSkillsTitle}
            </h3>
            <div className="personal-skills">
              {t.certifications.personalSkills.map((skill) => (
                <span key={skill} className="personal-skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
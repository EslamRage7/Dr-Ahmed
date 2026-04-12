import { useTranslation } from "react-i18next";
import "../styles/Hero.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title">
            {t("hero.title")}
            <br />
            <span className="highlight">{t("hero.titlePart2")}</span>
          </h1>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>

          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon" aria-hidden="true">
                🧑‍⚕️
              </span>
              <span className="feature-text">{t("hero.expertDoctor")}</span>
            </div>
            <div className="feature">
              <span className="feature-icon" aria-hidden="true">
                🧪
              </span>
              <span className="feature-text">{t("hero.latestTechnology")}</span>
            </div>
            <div className="feature">
              <span className="feature-icon" aria-hidden="true">
                ✅
              </span>
              <span className="feature-text">
                {t("hero.fullSterilization")}
              </span>
            </div>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb">
              <span className="hero-icon">🦷</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

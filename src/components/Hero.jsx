import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import videoOne from "../assets/video-1.mp4";
import videoTwo from "../assets/video-2.mp4";
import "../styles/Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((value) => (value === 0 ? 1 : 0));
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-video-shell" aria-label="Hero background video">
        <video
          className={`hero-video hero-video-one ${activeVideo === 0 ? "hero-video-active" : ""}`}
          src={videoOne}
          autoPlay
          muted
          loop
          playsInline
        />
        <video
          className={`hero-video hero-video-two ${activeVideo === 1 ? "hero-video-active" : ""}`}
          src={videoTwo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-video-overlay" aria-hidden="true" />
      </div>

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

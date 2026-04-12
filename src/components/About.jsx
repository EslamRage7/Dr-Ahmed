import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import test from "../assets/ahmed.jpg";
import "../styles/About.css";

export default function About() {
  const { t } = useTranslation();

  const certifications = [t("about.cert1"), t("about.cert2"), t("about.cert3")];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right">
          <div className="doctor-frame">
            <div className="doctor-photo" aria-hidden="true">
              <img
                src={test}
                alt={t("about.doctor_name")}
                className="doctor-img img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="about-content" data-aos="fade-left">
          <h2 className="section-title">{t("about.meetDoctor")}</h2>
          <h3 className="doctor-name">{t("about.doctor_name")}</h3>
          <p className="doctor-specialty">{t("about.specialty")}</p>

          <p className="doctor-bio">{t("about.bio")}</p>

          <div className="certifications">
            <h4>{t("about.certifications")}:</h4>
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-item">
                <FaCheckCircle className="cert-icon" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

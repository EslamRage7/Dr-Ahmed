import { useTranslation } from "react-i18next";
import "../styles/Services.css";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: "💊",
      title: t("services.rootCanal"),
      description: t("services.rootCanalDesc"),
    },
    {
      id: 2,
      icon: "🔧",
      title: t("services.combinedFilling"),
      description: t("services.combinedFillingDesc"),
    },
    {
      id: 3,
      icon: "🧒",
      title: t("services.kidsCare"),
      description: t("services.kidsCareDesc"),
    },
    {
      id: 4,
      icon: "👑",
      title: t("services.prosthetics"),
      description: t("services.prostheticsDesc"),
    },
    {
      id: 5,
      icon: "💦",
      title: t("services.cleaningCare"),
      description: t("services.cleaningCareDesc"),
    },
    {
      id: 6,
      icon: "✂️",
      title: t("services.extractionCare"),
      description: t("services.extractionDesc"),
    },
    {
      id: 7,
      icon: "⭐",
      title: t("services.teethWhitening"),
      description: t("services.teethWhiteningDesc"),
    },
    {
      id: 8,
      icon: "🦷",
      title: t("services.dentalImplants"),
      description: t("services.dentalImplantsDesc"),
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-subtitle">{t("services.subtitle")}</p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="service-card"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

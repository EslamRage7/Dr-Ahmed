import { useTranslation } from "react-i18next";
import "../styles/Services.css";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: "💊",
      title: t("services.fillingRootCanal"),
      description: t("services.fillingRootCanalDesc"),
    },
    {
      id: 2,
      icon: "🔧",
      title: t("services.fillingRegular"),
      description: t("services.fillingRegularDesc"),
    },
    {
      id: 3,
      icon: "💎",
      title: t("services.fillingCosmetic"),
      description: t("services.fillingCosmeticDesc"),
    },
    {
      id: 4,
      icon: "🧒",
      title: t("services.fillingRegularKids"),
      description: t("services.fillingRegularKidsDesc"),
    },
    {
      id: 5,
      icon: "🧒",
      title: t("services.fillingRootCanalKids"),
      description: t("services.fillingRootCanalKidsDesc"),
    },
    {
      id: 6,
      icon: "👑",
      title: t("services.fixedProsthetics"),
      description: t("services.fixedProstheticsDesc"),
    },
    {
      id: 7,
      icon: "🪥",
      title: t("services.removableProsthetics"),
      description: t("services.removableProstheticsDesc"),
    },
    {
      id: 8,
      icon: "💦",
      title: t("services.scaling"),
      description: t("services.scalingDesc"),
    },
    {
      id: 9,
      icon: "✂️",
      title: t("services.extraction"),
      description: t("services.extractionDesc"),
    },
    {
      id: 10,
      icon: "🧼",
      title: t("services.teethCleaning"),
      description: t("services.teethCleaningDesc"),
    },
    {
      id: 11,
      icon: "⭐",
      title: t("services.teethWhitening"),
      description: t("services.teethWhiteningDesc"),
    },
    {
      id: 12,
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

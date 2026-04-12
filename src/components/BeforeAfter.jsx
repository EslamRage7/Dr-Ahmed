import { useTranslation } from "react-i18next";
import "../styles/BeforeAfter.css";

import before1 from "../assets/before1.jpg";
import aftar1 from "../assets/aftar1.jpg";

import before2 from "../assets/before2.jpg";
import aftar2 from "../assets/aftar2.jpg";

import before3 from "../assets/before3.jpg";
import aftar3 from "../assets/aftar3.jpg";

import before4 from "../assets/before4.jpg";
import aftar4 from "../assets/aftar4.jpg";

import before5 from "../assets/before5.jpg";
import aftar5 from "../assets/aftar5.jpg";

export default function BeforeAfter() {
  const { t } = useTranslation();
  const cases = [
    {
      id: 1,
      beforeImage: before1,
      afterImage: aftar1,
    },
    {
      id: 2,
      beforeImage: before2,
      afterImage: aftar2,
    },
    {
      id: 3,
      beforeImage: before3,
      afterImage: aftar3,
    },
    {
      id: 4,
      beforeImage: before4,
      afterImage: aftar4,
    },
    {
      id: 5,
      beforeImage: before5,
      afterImage: aftar5,
    },
  ];

  return (
    <section className="before-after" id="beforeAfter">
      <div className="before-after-container">
        <h2 className="section-title">{t("beforeAfter.title")}</h2>
        <p className="section-subtitle">{t("beforeAfter.subtitle")}</p>

        <div className="gallery-grid">
          {cases
            .filter((caseItem) => caseItem.beforeImage && caseItem.afterImage)
            .map((caseItem) => (
              <div key={caseItem.id} className="gallery-item">
                <div className="before-after-container-item">
                  <div className="before">
                    <span className="label">{t("beforeAfter.before")}</span>
                    <img
                      src={caseItem.beforeImage}
                      alt={t("beforeAfter.before")}
                      className="case-image"
                    />
                  </div>
                  <div className="divider"></div>
                  <div className="after">
                    <span className="label">{t("beforeAfter.after")}</span>
                    <img
                      src={caseItem.afterImage}
                      alt={t("beforeAfter.after")}
                      className="case-image"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

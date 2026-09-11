import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/BeforeAfter.css";

gsap.registerPlugin(ScrollTrigger);

const imageModules = import.meta.glob("../assets/*.{jpg,jpeg,JPG,JPEG}", {
  eager: true,
});

export default function BeforeAfter() {
  const { t } = useTranslation();
  const galleryRef = useRef(null);

  const imageFiles = Object.entries(imageModules)
    .map(([path, module]) => {
      const fileName = path.split("/").pop();
      const match = fileName.match(/^(\d+)\.(jpg|jpeg|JPG|JPEG)$/i);

      if (!match) {
        return null;
      }

      return {
        id: Number(match[1]),
        image: module.default,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);

  const cases = Array.from({ length: 18 }, (_, index) => index + 1)
    .map((id) => imageFiles.find((item) => item.id === id))
    .filter(Boolean);

  useEffect(() => {
    const section = galleryRef.current;

    if (!section) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gallery-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: 90, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      gsap.to(".case-photo-frame", {
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="before-after" id="beforeAfter" ref={galleryRef}>
      <div className="before-after-container">
        <div className="section-heading">
          <span className="section-kicker">Smile Stories</span>
          <h2 className="section-title">{t("beforeAfter.title")}</h2>
          <p className="section-subtitle">{t("beforeAfter.subtitle")}</p>
        </div>

        <div className="gallery-grid">
          {cases
            .filter((caseItem) => caseItem.image)
            .map((caseItem) => (
              <article key={caseItem.id} className="gallery-item">
                <div className="before-after-card">
                  <div className="case-photo-wrap">
                    <div className="case-photo-frame">
                      <img
                        src={caseItem.image}
                        alt={t("beforeAfter.title")}
                        className="case-image"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

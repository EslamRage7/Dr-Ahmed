import { useTranslation } from "react-i18next";
import {
  FaMapLocationDot,
  FaFacebookF,
  FaInstagram,
  FaShareNodes,
} from "react-icons/fa6";
import "../styles/Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title text-center">{t("contact.title")}</h2>
        <p className="section-subtitle text-center">{t("contact.subtitle")}</p>

        <div className="contact-content">
          <div className="contact-info-grid">
            <div
              className="contact-item"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="contact-icon location">
                <FaMapLocationDot />
              </div>
              <h3>{t("contact.location")}</h3>
              <p>{t("contact.addressLine2")}</p>
              <p>{t("contact.addressLine1")}</p>
            </div>

            <div
              className="contact-item"
              data-aos="fade-up"
              data-aos-delay="400">
              <div className="contact-icon social">
                <FaShareNodes />
              </div>
              <h3>{t("contact.followUs")}</h3>
              <div className="social-links">
                <a
                  className="social-link"
                  href="https://www.facebook.com/share/1F2ZtYHkB2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/dr._ahmedtarek?igsh=MXJwaTUwM3pidXY3Zw%3D%3D&fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMzUwNjg1NTMxNzI4AAEeTm0gYTSz_X6blW2nbgwPIJ6a3qWzY9PlP27Qe9Le3qnlPNQMTkFMvEcj5AM_aem_gKs3oDNBZBMIsx9AjOFisw"
                  aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="map-container"
            data-aos="zoom-in"
            data-aos-delay="200">
            <div className="map-placeholder">
              <iframe
                title="SmileCare Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.8729945!2d31.6016763!3d31.0872426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f77fed01608e91%3A0x3e4869e6d161b5e!2z2YXYs9iq2LTZgdmJINiv2YPYsdmG2LMg2KfZhNi52KfZhQ!5e0!3m2!1sar!2seg!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px", minHeight: "450px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMenu, IoClose } from "react-icons/io5";
import "../styles/Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleLanguageToggle = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="logo-icon" aria-hidden="true">
            🦷
          </span>
          <span className="logo-text">{t("header.logoName")}</span>
        </div>

        <nav className={`nav m-auto ${mobileMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("home")} className="nav-link">
            {t("header.home")}
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            {t("header.about")}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link">
            {t("header.services")}
          </button>

          <button
            onClick={() => scrollToSection("beforeAfter")}
            className="nav-link">
            {t("header.beforeAfter")}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link">
            {t("header.contact")}
          </button>
        </nav>

        <div className="header-actions desktop-only">
          <button onClick={handleLanguageToggle} className="lang-btn">
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
        </div>

        <div className="mobile-actions">
          <button onClick={handleLanguageToggle} className="lang-btn-mobile">
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
          <div
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </div>
        </div>
      </div>
    </header>
  );
}

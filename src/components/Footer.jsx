import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p className="footer-copyright">{t("footer.copyrightLine")}</p>
        </div>
      </div>
    </footer>
  );
}

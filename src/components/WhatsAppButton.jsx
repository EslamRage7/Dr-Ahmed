import { FaWhatsapp } from "react-icons/fa6";
import "../styles/WhatsAppButton.css";

export default function WhatsAppButton() {
  const whatsappNumber = "+201099630938";

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="whatsapp-button">
      <button
        onClick={handleWhatsApp}
        className="whatsapp-btn"
        title="Chat with us on WhatsApp">
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">WhatsApp</span>
      </button>
    </div>
  );
}

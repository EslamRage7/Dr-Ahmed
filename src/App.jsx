import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/variables.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";

import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
    AOS.refresh();
  }, [i18n.language]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

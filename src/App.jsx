import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const heroContent = document.querySelector(".hero-content");
    const heroVisual = document.querySelector(".hero-visual");

    if (heroContent) {
      gsap.fromTo(
        heroContent,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );
    }

    if (heroVisual) {
      gsap.fromTo(
        heroVisual,
        { y: 80, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.15,
          ease: "power3.out",
        },
      );
    }

    gsap.utils
      .toArray(
        ".section-title, .section-subtitle, .service-card, .about-grid, .contact-panel, .gallery-item",
      )
      .forEach((element) => {
        gsap.fromTo(
          element,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
  }, []);

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

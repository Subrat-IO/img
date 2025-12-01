import React, { useEffect, useRef } from "react";
import HeroSection from "../Pages/Hero/Hero";
import TechStack from "../Pages/TechStack/TechStack";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import ContactPage from "../Pages/Contact/ContactPage";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import "./LandingPage.css";

function LandingPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          entry.target.classList.remove("section-fade-out");
        } else {
          // Fade out when scrolling past
          const rect = entry.boundingClientRect;
          if (rect.top < 0 && rect.bottom < window.innerHeight * 0.3) {
            entry.target.classList.add("section-fade-out");
            entry.target.classList.remove("section-visible");
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Parallax scroll effect
    const handleParallax = () => {
      const scrolled = window.scrollY;

      sectionsRef.current.forEach((section, index) => {
        if (section && section.classList.contains("section-visible")) {
          const rect = section.getBoundingClientRect();
          const scrollProgress =
            (window.innerHeight - rect.top) / window.innerHeight;

          // Subtle parallax movement
          if (scrollProgress > 0 && scrollProgress < 1.5) {
            const offset =
              (scrollProgress - 0.5) * 20 * (index % 2 === 0 ? 1 : -1);
            section.style.transform = `translateY(${offset}px)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleParallax);

    // Smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleParallax);
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Animated background */}
      <div className="page-bg-gradient"></div>
      <div className="page-particles">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      {/* Navbar stays fixed */}
      <Navbar />

      {/* Sections with scroll animations */}
      <section
        id="home"
        className="page-section hero-wrapper"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <HeroSection />
      </section>

      <section
        id="skills"
        className="page-section tech-wrapper"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <TechStack />
      </section>

      <section
        id="projects"
        className="page-section projects-wrapper"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <Projects />
      </section>

      <section
        id="experience"
        className="page-section experience-wrapper"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <Experience />
      </section>

      <section
        id="contact"
        className="page-section contact-wrapper"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <ContactPage />
      </section>

      <section
        className="page-section footer-wrapper"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <Footer />
      </section>

      {/* Scroll progress indicator */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar"></div>
      </div>
    </div>
  );
}

export default LandingPage;

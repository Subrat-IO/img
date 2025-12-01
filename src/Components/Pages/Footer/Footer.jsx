import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const footerRef = useRef(null);
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const dividerRef = useRef(null);
  const socialsRef = useRef(null);
  const copyRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Observe individual elements with lower threshold for footer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 0px 0px" } // More sensitive for footer
    );

    const elementsToObserve = [
      containerRef.current,
      aboutRef.current,
      linksRef.current,
      contactRef.current,
      dividerRef.current,
      socialsRef.current,
      copyRef.current,
    ].filter(Boolean);

    elementsToObserve.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <footer className="footer-section" ref={footerRef}>
        <div className="footer-bg-gradient"></div>
        <div className="footer-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="footer-container" ref={containerRef}>
          {/* ABOUT */}
          <div className="footer-about" ref={aboutRef}>
            <div className="logo-wrapper">
              <div className="logo-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="footer-name">Subrat</h3>
            </div>

            <p className="footer-bio">
              I'm Subrat Sethi, a passionate Full Stack Developer specializing
              in the MERN stack. I build modern, scalable, high-performance web
              applications with a focus on clean UI, efficient backends, and
              cloud-ready deployments.
            </p>

            <div className="footer-made">
              <span>Made with</span>
              <span className="heart">❤️</span>
              <span>by Subrat Sethi</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links" ref={linksRef}>
            <h4>
              <i className="fa-solid fa-link"></i>
              Quick Links
            </h4>
            <ul>
              <li>
                <a href="#home">
                  <i className="fa-solid fa-chevron-right"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa-solid fa-chevron-right"></i>
                  About
                </a>
              </li>
              <li>
                <a href="#skills">
                  <i className="fa-solid fa-chevron-right"></i>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i className="fa-solid fa-chevron-right"></i>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fa-solid fa-chevron-right"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-contact" ref={contactRef}>
            <h4>
              <i className="fa-solid fa-address-card"></i>
              Get In Touch
            </h4>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details">
                <p className="footer-label">Email</p>
                <p className="footer-value">subratsethi501@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <p className="footer-label">Phone</p>
                <p className="footer-value">+91 6372269905</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-details">
                <p className="footer-label">Location</p>
                <p className="footer-value">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" ref={dividerRef}></div>

        {/* Social Icons */}
        <div className="footer-socials" ref={socialsRef}>
          <a
            href="https://github.com/Subrat-IO"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <i className="fa-brands fa-github"></i>
            <span className="social-bg"></span>
          </a>
          <a
            href="https://linkedin.com/in/subratsethi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span className="social-bg"></span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitter"
          >
            <i className="fa-brands fa-twitter"></i>
            <span className="social-bg"></span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <i className="fa-brands fa-instagram"></i>
            <span className="social-bg"></span>
          </a>
        </div>

        <p className="footer-copy" ref={copyRef}>
          © 2025 Subrat Sethi. All rights reserved.
        </p>

        {/* SCROLL TO TOP BUTTON */}
        <button
          className={`scroll-top-btn ${showScrollTop ? "show" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
          <span className="btn-circle"></span>
        </button>
      </footer>
    </>
  );
}

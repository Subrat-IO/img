import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

export default function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  const heroRef = useRef(null);

  const texts = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Cloud Architect (AWS)",
    "Docker & Kubernetes Expert",
    "React & Next.js Specialist",
  ];

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenTexts = 2000;

    if (!currentText) return;

    let timer;

    if (!isDeleting && charIndex < currentText.length) {
      timer = window.setTimeout(() => {
        setTypingText(currentText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && charIndex > 0) {
      timer = window.setTimeout(() => {
        setTypingText(currentText.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Scroll‑in animation with Intersection Observer
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const downloadCV = (e) => {
    e.preventDefault();
    // replace with real file path later
    alert("CV download initiated!");
  };

  return (
    <>
      <div className="bg-circle circle-1" />
      <div className="bg-circle circle-2" />

      <section
        ref={heroRef}
        className={`hero ${visible ? "hero-visible" : "hero-hidden"}`}
      >
        <div className="hero-content">
          <div className="hero-text hero-slide-left">
            <div className="availability">
              <div className="green-dot"></div>
              <span className="availability-text">
                Available for work in Bengaluru
              </span>
            </div>

            <h1>Hi, I'm Subrat Sethi</h1>

            <div className="typing-container">
              <span className="typing-text">{typingText}</span>
              <span className="cursor"></span>
            </div>

            <p className="bio">
              Full Stack Developer with 1+ year of experience crafting scalable
              web applications using the MERN stack. Passionate about building
              production-ready systems with cloud infrastructure (AWS, Docker)
              and modern development practices. I transform ideas into elegant,
              high-performance digital solutions.
            </p>

            <div className="cta-buttons">
              <button
                className="btn btn-primary btn-pulse"
                onClick={downloadCV}
              >
                <span className="btn-glow" />
                <span className="btn-label">
                  <a href="/resume">📄 Download CV</a>
                </span>
              </button>
              <button className="btn btn-secondary btn-outline">
                💬 Let's Talk
              </button>
            </div>
          </div>

          <div className="hero-image hero-slide-right">
            <div className="floating-image">
              <div className="image-placeholder">
                <img src="/Subrat.jpeg" alt="Subrat" className="hero-photo" />
              </div>
              <div className="floating-icons icon-1">⚛️</div>
              <div className="floating-icons icon-2">🚀</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    const title = titleRef.current;
    const card = cardRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (title) obs.observe(title);
    if (card) obs.observe(card);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <section className="contact-section" ref={sectionRef}>
        <h2 className="contact-title" ref={titleRef}>
          <span className="title-text">Get In Touch</span>
          <div className="title-underline"></div>
        </h2>

        <div className="contact-card" ref={cardRef}>
          <div className="animated-bg"></div>

          <div className="contact-left">
            <div className="left-header">
              <div className="icon-circle">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <h3>Let's Connect</h3>
            </div>

            <p className="intro-text">
              Whether you want to discuss a project, collaborate, or just say
              hello — feel free to reach out anytime.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <p>subratsethi501@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <p>+91 6372269905</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <p>Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="contact-socials">
              <a
                href="https://github.com/Subrat-IO"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fa-brands fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/subratsethi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fa-brands fa-linkedin"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fa-brands fa-twitter"></i>
                <span className="social-tooltip">Twitter</span>
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/xjkkgewa"
            method="POST"
          >
            <div
              className={`input-group ${
                focusedInput === "name" ? "focused" : ""
              }`}
            >
              <input
                type="text"
                name="name"
                required
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
              />
              <label>Your Name</label>
              <div className="input-border"></div>
            </div>

            <div
              className={`input-group ${
                focusedInput === "email" ? "focused" : ""
              }`}
            >
              <input
                type="email"
                name="email"
                required
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
              <label>Email Address</label>
              <div className="input-border"></div>
            </div>

            <div
              className={`input-group textarea ${
                focusedInput === "message" ? "focused" : ""
              }`}
            >
              <textarea
                name="message"
                required
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
              ></textarea>
              <label>Your Message</label>
              <div className="input-border"></div>
            </div>

            <button className="contact-btn" type="submit">
              <span className="btn-content">
                <i className="fa-solid fa-rocket"></i>
                Send Message
              </span>
              <div className="btn-glow"></div>
              <div className="btn-particles">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

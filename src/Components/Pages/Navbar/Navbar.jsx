import React, { useState, useEffect } from "react";

import "./Navbar.css"
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟢 Automatically apply theme when darkMode changes
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode
      ? "bg-light text-dark"
      : "bg-dark text-light";
  };

  return (
    <>

      <nav
        className={`gentle-navbar ${isScrolled ? "scrolled" : ""}`}
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="navbar-content">
          <a href="#" className="navbar-brand">
            <div className="brand-circle">S</div>
            <span>Subrat.Dev</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => {
              const menu = document.querySelector(".nav-menu");
              menu.classList.toggle("active");
            }}
          >
            <div className="hamburger"></div>
          </button>

          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            
            <li>
              <div className="theme-switch" onClick={toggleTheme}>
                <div className={`switch-handle ${darkMode ? "dark" : "light"}`}>
                  {darkMode ? "🌙" : "☀️"}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Demo content to show navbar behavior
      <div style={{ paddingTop: "80px", minHeight: "200vh" }}>
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Gentle & Cool Navbar
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            Scroll down to see the navbar effect. Toggle between light and dark
            modes!
          </p>

          <div
            className="card"
            style={{ padding: "2rem", marginBottom: "2rem" }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Features:</h2>
            <ul style={{ lineHeight: "1.8" }}>
              <li>Smooth scroll effect with subtle shadow</li>
              <li>Animated underline on hover</li>
              <li>Cute toggle switch for theme switching</li>
              <li>Responsive mobile menu</li>
              <li>Brand circle with rotation on hover</li>
              <li>Clean and gentle design</li>
            </ul>
          </div>

          <div className="circle" style={{ margin: "2rem auto" }}>
            <span style={{ color: "white", fontSize: "2rem" }}>✨</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

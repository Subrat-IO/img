import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";

/* ==========================
   PROJECTS DATA
========================== */
const projects = [
  {
    title: "Jewellery Ecommerce Store",
    stack: "React · LocalStorage",
    description:
      "Ecommerce website with wishlist, authentication simulation, cart management using localStorage and UI-heavy product listings.",
    live: "https://jwellery-task.vercel.app/",
    repo: "https://github.com/Subrat-IO/JwelleryTask.git",
    gradient: "amber-yellow",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
  },
  {
    title: "Zerodha Clone (Stock Trading App)",
    stack: "React · Node · MongoDB",
    description:
      "A real-time trading interface inspired by Zerodha with graphs, live prices, trade execution UI, and authentication.",
    live: "https://stoktradingapp.vercel.app/",
    repo: "https://github.com/Subrat-IO/stoktradingapp.git",
    gradient: "blue-cyan",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
  },
  {
    title: "LinkedIn Clone",
    stack: "HTML · CSS · JS · React.JS · Node.JS · MongoDB · Express",
    description:
      "Minimal portfolio site for an astrologer with custom wheel graphics, animations, and mobile-first layout.",
    live: "https://web-surfer-nine.vercel.app/",
    repo: "https://github.com/Subrat-IO/Web_Surfer",
    gradient: "indigo-purple",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=500&fit=crop",
  },
  {
    title: "Airbnb Clone",
    stack: "HTML · CSS · JS · React.JS · Node.JS · MongoDB · Express",
    description:
      "Construction material listing, filters, and contact flows. Handles categories, search, and responsive layouts.",
    live: "https://travelgo-1wn1.onrender.com/listings",
    repo: "https://github.com/Subrat-IO/TravelGo",
    gradient: "orange-red",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
  },
  {
    title: "MAC Government Website Clone",
    stack: "React · Tailwind",
    description:
      "High-fidelity UI clone of MAC portal with responsive UI components, government-style layout, and utility-based access sections.",
    live: "https://mac-theta.vercel.app/",
    repo: "https://github.com/Subrat-IO/mac.git",
    gradient: "emerald-teal",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  },
  {
    title: "ChatGPT Clone",
    stack: "HTML · CSS · JS · React.JS · Node.JS · MongoDB · Express",
    description:
      "Portfolio + lead capture for interior design work with dynamic sections, scrolling animations, and admin tools.",
    live: "https://my-a-pp-theta.vercel.app/",
    repo: "https://github.com/Subrat-IO/JwelleryTask",
    gradient: "purple-pink",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
];

/* ==========================
   PROJECT CARD COMPONENT
========================== */
function ProjectCard({
  title,
  stack,
  description,
  live,
  repo,
  gradient,
  image,
  index,
}) {
  const [hover, setHover] = useState(false);
  const cardRef = useRef(null);

  // Parallax tilt effect on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    }
    setHover(false);
  };

  return (
    <div
      ref={cardRef}
      className={`project-card ${gradient}`}
      onMouseEnter={() => setHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="card-gradient" />

      {/* Animated corner accent */}
      <div className="card-corner-accent"></div>

      <div className="project-img-wrapper">
        <img src={image} className="project-img" alt={title} />

        <div className={`project-img-overlay ${hover ? "active" : ""}`}>
          <button className="zoom-btn">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
          <div className="scan-line"></div>
        </div>
      </div>

      <div className="project-content">
        <div className="title-wrapper">
          <h3>{title}</h3>
          <div className="pulse-dot"></div>
        </div>

        <div className="stack-tags">
          {stack.split(" · ").map((tech, i) => (
            <span key={i} className="stack-tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-description">{description}</p>

        <div className="project-links">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-live"
          >
            <i className="fa-solid fa-rocket"></i>
            <span>Live Demo</span>
            <div className="btn-shine"></div>
          </a>

          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            <i className="fa-brands fa-github"></i>
            <span>View Code</span>
            <div className="btn-shine"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ==========================
   MAIN PROJECTS SECTION
========================== */
export default function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");
    const title = titleRef.current;

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
    cards.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <section className="projects-section" ref={sectionRef}>
        <h2 className="projects-title" ref={titleRef}>
          <span className="title-text">Featured Projects</span>
          <div className="title-underline"></div>
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard {...p} key={i} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

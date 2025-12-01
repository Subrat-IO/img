import React, { useEffect, useRef } from "react";

const styles = `


/* SECTION */
.exp-section {
  width: 90%;
  max-width: 1400px;
  margin: auto;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

/* Floating particles background */
.exp-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  pointer-events: none;
  animation: pulse-bg 8s ease-in-out infinite;
}

@keyframes pulse-bg {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* TITLE */
.exp-header {
  text-align: center;
  font-size: 52px;
  font-weight: 900;
  margin-bottom: 80px;
  background: linear-gradient(135deg, var(--circle-pop), var(--circle-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
}

.exp-header::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--circle-pop), var(--circle-accent));
  border-radius: 2px;
  animation: expandWidth 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
  transform-origin: center;
  opacity: 0;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandWidth {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100px;
    opacity: 1;
  }
}

/* TIMELINE WRAPPER */
.exp-timeline {
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

/* VERTICAL LINE */
.exp-timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  width: 4px;
  background: linear-gradient(
    180deg,
    transparent,
    var(--circle-pop) 10%,
    var(--circle-accent) 90%,
    transparent
  );
  height: 100%;
  transform: translateX(-50%);
  opacity: 0;
  border-radius: 10px;
  animation: growLine 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s;
  box-shadow: 0 0 20px var(--circle-pop);
}

@keyframes growLine {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100%;
    opacity: 0.6;
  }
}

/* TIMELINE CARDS */
.exp-card {
  width: 45%;
  position: relative;
  margin-bottom: 80px;
  padding: 30px;
  background: var(--card-bg);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 40px var(--shadow);
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

/* Glow effect on hover */
.exp-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
  transition: left 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.exp-card:hover::before {
  left: 100%;
}

/* Pulsing glow */
.exp-card::after {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--circle-pop), var(--circle-accent));
  border-radius: 16px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease;
  filter: blur(15px);
}

.exp-card:hover::after {
  opacity: 0.5;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Reveal */
.exp-card.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Positioning */
.exp-card.left {
  margin-right: auto;
}

.exp-card.right {
  margin-left: auto;
}

/* Hover lift */
.exp-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--circle-pop);
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.4);
}

/* DOT */
.exp-card .dot {
  position: absolute;
  top: 20px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: var(--circle-pop);
  box-shadow: 0 0 20px var(--circle-accent);
  z-index: 10;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    box-shadow: 0 0 20px var(--circle-accent);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px var(--circle-accent), 0 0 40px var(--circle-pop);
    transform: scale(1.1);
  }
}

/* Dot positioning */
.exp-card.left .dot {
  right: -11px;
}

.exp-card.right .dot {
  left: -11px;
}

/* Dot rings */
.exp-card .dot::before,
.exp-card .dot::after {
  content: "";
  position: absolute;
  inset: -8px;
  border: 2px solid var(--circle-pop);
  border-radius: 50%;
  animation: ripple 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.exp-card .dot::after {
  animation-delay: 1s;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* CONTENT */
.content {
  position: relative;
  z-index: 1;
}

.content h3 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, var(--circle-pop), var(--circle-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
}

.exp-card:hover .content h3 {
  transform: translateX(5px);
}

/* COMPANY + DATE */
.company,
.date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  margin-top: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.exp-card:hover .company,
.exp-card:hover .date {
  color: var(--text-primary);
  transform: translateX(3px);
}

.company i,
.date i {
  color: var(--circle-pop);
  transition: transform 0.3s ease;
}

.exp-card:hover .company i,
.exp-card:hover .date i {
  transform: rotate(360deg);
}

/* LIST */
.exp-card ul {
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
}

.exp-card li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
}

/* Staggered list animation */
.exp-card.show li {
  animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.exp-card.show li:nth-child(1) { animation-delay: 0.2s; }
.exp-card.show li:nth-child(2) { animation-delay: 0.3s; }
.exp-card.show li:nth-child(3) { animation-delay: 0.4s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.exp-card:hover li {
  color: var(--text-primary);
  transform: translateX(5px);
}

.exp-card li i {
  color: var(--circle-accent);
  font-size: 12px;
  margin-top: 4px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.exp-card:hover li i {
  color: var(--circle-pop);
  transform: scale(1.2);
}

/* COLOR VARIANTS */
.blue {
  border-color: rgba(0, 180, 216, 0.5);
}

.blue .dot {
  background: #00b4d8;
  box-shadow: 0 0 20px #00b4d8;
}

.blue:hover {
  border-color: #00b4d8;
  box-shadow: 0 20px 60px rgba(0, 180, 216, 0.4);
}

.emerald {
  border-color: rgba(16, 185, 129, 0.5);
}

.emerald .dot {
  background: #10b981;
  box-shadow: 0 0 20px #10b981;
}

.emerald:hover {
  border-color: #10b981;
  box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);
}

.amber {
  border-color: rgba(251, 191, 36, 0.5);
}

.amber .dot {
  background: #fbbf24;
  box-shadow: 0 0 20px #fbbf24;
}

.amber:hover {
  border-color: #fbbf24;
  box-shadow: 0 20px 60px rgba(251, 191, 36, 0.4);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .exp-header {
    font-size: 42px;
  }

  .exp-card {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 50px;
  }

  .exp-timeline::before {
    left: 15px;
  }

  .exp-card .dot {
    left: -11px !important;
    right: auto !important;
  }
}

@media (max-width: 600px) {
  .exp-section {
    padding: 80px 0;
  }

  .exp-header {
    font-size: 36px;
    margin-bottom: 60px;
  }

  .exp-card {
    padding: 20px;
    padding-left: 40px;
    margin-bottom: 50px;
  }

  .content h3 {
    font-size: 20px;
  }

  .company,
  .date {
    font-size: 14px;
  }

  .exp-card li {
    font-size: 14px;
  }
}
`;

export default function Experience() {
  const secRef = useRef(null);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "AdSquare Tech Solutions",
      date: "Nov 2025 – Present · Bengaluru",
      desc: [
        "Developing MERN applications & scalable UI systems.",
        "Building reusable React components & API integrations.",
        "Improving performance, SEO, and system reliability.",
      ],
      color: "blue",
    },
    {
      role: "Software Trainee",
      company: "Apna College",
      date: "May 2025 – Nov 2025 · Remote",
      desc: [
        "Completed MERN real-world assignments.",
        "Built production-ready components & mini apps.",
        "Learned Docker, Git, and deployment pipelines.",
      ],
      color: "emerald",
    },
    {
      role: "Full Stack Developer",
      company: "Nirmalya Metropolis",
      date: "Apr 2024 – Mar 2025 · Bhubaneswar",
      desc: [
        "Maintained production websites with React and MongoDB.",
        "Improved UI/UX and optimized SEO rankings.",
        "Managed server workflows & admin integrations.",
      ],
      color: "amber",
    },
  ];

  useEffect(() => {
    const cards = secRef.current.querySelectorAll(".exp-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="exp-section" id="experience" ref={secRef}>
        <h2 className="exp-header">
          <span>Experience</span>
        </h2>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div
              className={`exp-card ${i % 2 === 0 ? "left" : "right"} ${
                exp.color
              }`}
              key={i}
            >
              <span className="dot" />
              <div className="content">
                <h3>{exp.role}</h3>
                <p className="company">
                  <i className="fa-solid fa-building"></i>
                  {exp.company}
                </p>
                <p className="date">
                  <i className="fa-solid fa-calendar-days"></i>
                  {exp.date}
                </p>

                <ul>
                  {exp.desc.map((d, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check"></i>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

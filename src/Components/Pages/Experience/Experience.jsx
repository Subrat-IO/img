import React, { useEffect, useRef } from "react";
import "./Experience.css";

export default function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "AdSquare Tech Solutions",
      date: "Nov 2025 – Present · Bengaluru",
      bullets: [
        "Building and maintaining MERN stack applications (React, Node, Express, MongoDB).",
        "Developing scalable REST APIs and reusable UI components.",
        "Optimizing performance & improving Lighthouse metrics.",
        "Collaborating with cross-functional engineering teams.",
      ],
      gradient: "blue-cyan",
    },
    {
      role: "Software Trainee",
      company: "Apna College",
      date: "May 2025 – Nov 2025 · Remote",
      bullets: [
        "Hands-on MERN training through real-world assignments.",
        "Created full-stack mini-projects and reusable components.",
        "Worked with Docker, Git, React, and Express.",
        "Strengthened deployment & version control fundamentals.",
      ],
      gradient: "emerald-teal",
    },
    {
      role: "Full Stack Developer",
      company: "Nirmalya Metropolis",
      date: "Apr 2024 – Mar 2025 · Bhubaneswar",
      bullets: [
        "Developed, maintained and optimized production websites.",
        "Worked with React, API integrations & responsive layouts.",
        "Improved UX, SEO & website stability.",
        "Managed server operations and admin workflows.",
      ],
      gradient: "amber-yellow",
    },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".exp-card");
    const title = titleRef.current;
    const timeline = timelineRef.current;

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
    if (timeline) obs.observe(timeline);
    cards.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section className="experience-section" ref={sectionRef}>
      <h2 className="experience-title" ref={titleRef}>
        <span className="title-text">Experience</span>
        <div className="title-underline"></div>
      </h2>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line"></div>

        {experiences.map((exp, i) => (
          <div
            className={`exp-card ${i % 2 === 0 ? "left" : "right"} ${
              exp.gradient
            }`}
            key={i}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div className="card-glow"></div>
            <span className="exp-dot">
              <span className="dot-pulse"></span>
            </span>

            <div className="exp-content">
              <div className="role-wrapper">
                <h3>{exp.role}</h3>
                <div className="role-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
              </div>

              <p className="company">
                <i className="fa-solid fa-building"></i>
                {exp.company}
              </p>

              <p className="date">
                <i className="fa-solid fa-calendar-days"></i>
                {exp.date}
              </p>

              <ul>
                {exp.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    style={{ transitionDelay: `${i * 0.2 + 0.4 + idx * 0.1}s` }}
                  >
                    <span className="bullet-icon">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

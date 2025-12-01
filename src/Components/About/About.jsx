import React, { useState, useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  const techStack = [
    {
      category: "Frontend",
      icon: "fa-solid fa-palette",
      items: [
        "HTML5, CSS3, JavaScript",
        "React.js, Next.js",
        "Tailwind CSS, Redux, Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: "fa-solid fa-gears",
      items: ["Node.js, Express.js", "REST API, JWT", "WebSockets"],
    },
    {
      category: "Databases",
      icon: "fa-solid fa-database",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Cloud & DevOps",
      icon: "fa-brands fa-docker",
      items: ["Docker, Kubernetes", "AWS, Render", "CI/CD Pipelines"],
    },
    {
      category: "Tools",
      icon: "fa-solid fa-wrench",
      items: ["Git, Linux", "VS Code", "Agile Methodology"],
    },
  ];

  const experience = [
    {
      role: "Full Stack Dev",
      company: "Nirmalya Metropolis",
      period: "Apr 2024 – Mar 2025",
      type: "work",
      highlights: [
        "Maintained frontend of CSKart ensuring responsive, user-friendly design",
        "Managed server operations, cPanel configurations, and deployment pipelines",
        "Collaborated with backend and UI/UX teams to optimize performance and UX",
      ],
    },
    {
      role: "Full Stack Development Training",
      company: "Apna College",
      period: "May 2025 – Present",
      type: "training",
      highlights: [
        "Built LinkedIn and ChatGPT clone projects featuring secure authentication, interactive UI, and responsive design",
        "Gained hands-on experience deploying Dockerized applications to cloud platforms with monitoring and CI/CD integration",
      ],
    },
  ];

  const strengths = [
    {
      text: "Strong analytical and problem-solving skills",
      icon: "fa-solid fa-brain",
    },
    { text: "Clean, modular, maintainable coding", icon: "fa-solid fa-code" },
    {
      text: "Focused on scalable architecture and performance",
      icon: "fa-solid fa-rocket",
    },
    {
      text: "Quick learner of new technologies and frameworks",
      icon: "fa-solid fa-book-open",
    },
    {
      text: "Excellent communication and collaboration skills",
      icon: "fa-solid fa-handshake",
    },
  ];

  const filteredExperience =
    activeTab === "all"
      ? experience
      : experience.filter((exp) => exp.type === activeTab);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elementsRef.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [activeTab]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <div className="about-container" ref={sectionRef}>
        <section className="about-section">
          {/* Header */}
          <div
            className="section-header"
            ref={(el) => (elementsRef.current[0] = el)}
          >
            <div className="header-content">
              <div className="header-icon">
                <i className="fa-solid fa-user-circle"></i>
              </div>
              <div>
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">
                  A bit of background, my stack, and how I like to work.
                </p>
              </div>
            </div>
            <div className="tech-badges">
              <span className="badge">Frontend</span>
              <span className="badge">Backend</span>
              <span className="badge">Cloud</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bio-card" ref={(el) => (elementsRef.current[1] = el)}>
            <div className="bio-glow"></div>
            <div className="bio-content">
              <p className="bio-lead">
                I'm Subrat Sethi, a Full Stack Developer from Bengaluru, India
                with 1+ years of experience designing, developing, and deploying
                scalable applications using the MERN stack and cloud
                infrastructure.
              </p>
              <p>
                I've worked on diverse projects including interior design
                platforms, construction marketplaces, property booking systems,
                and professional networking clones. My expertise spans from
                building responsive UIs with React and Next.js to architecting
                robust backend APIs with Node.js and Express.
              </p>
              <p>
                I care about small details: fluid interactions, consistent
                spacing, and code that's pleasant to maintain. My happy place is
                building clean UIs backed by solid, well-structured APIs
                deployed in Dockerized environments.
              </p>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div
            className="tech-grid"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            {techStack.map((section, idx) => (
              <div
                key={section.category}
                className="tech-card"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="tech-header">
                  <div className="tech-icon-wrapper">
                    <i className={section.icon}></i>
                  </div>
                  <h3 className="tech-title">{section.category}</h3>
                </div>
                <ul className="tech-list">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div
            className="experience-section"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <h3 className="section-heading">
              <i className="fa-solid fa-briefcase"></i>
              Experience
            </h3>

            <div className="tab-filters">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                <i className="fa-solid fa-list"></i>
                All Experience
              </button>
              <button
                className={`tab-btn ${activeTab === "work" ? "active" : ""}`}
                onClick={() => setActiveTab("work")}
              >
                <i className="fa-solid fa-building"></i>
                Work
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "training" ? "active" : ""
                }`}
                onClick={() => setActiveTab("training")}
              >
                <i className="fa-solid fa-graduation-cap"></i>
                Training
              </button>
            </div>

            <div className="experience-grid">
              {filteredExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="exp-card"
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  <div className="exp-corner"></div>
                  <div className="exp-header">
                    <div>
                      <h4 className="exp-role">{exp.role}</h4>
                      <p className="exp-company">
                        <i className="fa-solid fa-building"></i>
                        {exp.company}
                      </p>
                    </div>
                    <span className="exp-period">
                      <i className="fa-solid fa-calendar"></i>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="exp-list">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>
                        <span className="bullet-icon">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Strengths */}
          <div
            className="bottom-grid"
            ref={(el) => (elementsRef.current[4] = el)}
          >
            <div className="card education-card">
              <div className="card-header">
                <i className="fa-solid fa-user-graduate"></i>
                <h3 className="card-title">Education</h3>
              </div>
              <div className="education-content">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <p className="institution">
                  <i className="fa-solid fa-school"></i>
                  Gandhi Engineering College, Bhubaneswar
                </p>
                <div className="education-meta">
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>
                    2020 – 2024
                  </span>
                  <span className="cgpa">
                    <i className="fa-solid fa-star"></i>
                    CGPA: 8.5 / 10
                  </span>
                </div>
              </div>
              <div className="cert-section">
                <h4>
                  <i className="fa-solid fa-certificate"></i>
                  Certifications
                </h4>
                <p>
                  Full Stack Web Development with React and Node.js (Apna
                  College)
                </p>
              </div>
            </div>

            <div className="card strengths-card">
              <div className="card-header">
                <i className="fa-solid fa-star"></i>
                <h3 className="card-title">Core Strengths</h3>
              </div>
              <ul className="strengths-list">
                {strengths.map((strength, idx) => (
                  <li
                    key={idx}
                    className="strength-item"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <div className="strength-icon">
                      <i className={strength.icon}></i>
                    </div>
                    <span>{strength.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div
            className="languages-card"
            ref={(el) => (elementsRef.current[5] = el)}
          >
            <div className="card-header">
              <i className="fa-solid fa-language"></i>
              <h3 className="card-title">Languages</h3>
            </div>
            <div className="languages-list">
              <div className="language-tag">
                <i className="fa-solid fa-globe"></i>
                English (Fluent)
              </div>
              <div className="language-tag">
                <i className="fa-solid fa-globe"></i>
                Hindi (Fluent)
              </div>
              <div className="language-tag">
                <i className="fa-solid fa-globe"></i>
                Odia (Native)
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

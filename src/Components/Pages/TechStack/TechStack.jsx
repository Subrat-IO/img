import React, { useEffect } from "react";
import "./TechStack.css";

const tech = [
  
  {
    title: "Frontend",
    items: [
      { icon: "fa-brands fa-html5", name: "HTML5" },
      { icon: "fa-brands fa-css3-alt", name: "CSS3" },
      { icon: "fa-brands fa-js", name: "JavaScript (ES6+)" },
      { icon: "fa-brands fa-react", name: "React.js" },
      { icon: "fa-brands fa-react", name: "Next.js" },
      { icon: "fa-brands fa-redux", name: "Redux" },
      { icon: "fa-brands fa-css3-alt", name: "Tailwind CSS" },
      { icon: "fa-brands fa-bootstrap", name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "fa-brands fa-node-js", name: "Node.js" },
      { icon: "fa-solid fa-gears", name: "Express.js" },
      { icon: "fa-solid fa-key", name: "JWT Auth" },
      { icon: "fa-solid fa-wifi", name: "WebSockets" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: "fa-solid fa-database", name: "MongoDB" },
      { icon: "fa-solid fa-database", name: "MySQL" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { icon: "fa-brands fa-docker", name: "Docker" },
      { icon: "fa-brands fa-aws", name: "AWS EC2" },
      { icon: "fa-solid fa-cloud", name: "Render" },
      { icon: "fa-brands fa-linux", name: "Linux" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: "fa-brands fa-git-alt", name: "Git" },
      { icon: "fa-brands fa-github", name: "GitHub" },
      { icon: "fa-solid fa-code", name: "VS Code" },
      { icon: "fa-solid fa-server", name: "cPanel" },
    ],
  },
  {
    title: "Languages",
    items: [
      { icon: "fa-solid fa-language", name: "English (Fluent)" },
      { icon: "fa-solid fa-language", name: "Hindi (Fluent)" },
      { icon: "fa-solid fa-language", name: "Odia (Native)" },
    ],
  },
];

export default function TechStack() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-item");

    const revealOnScroll = () => {
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
          setTimeout(() => {
            el.classList.add("active");
          }, index * 120); // stagger reveal
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const reveal = () => {
      items.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section className="tech-section">
      <h2 className="tech-title reveal">Tech Stack</h2>

      <div className="tech-container">
        {tech.map((category, idx) => (
          <div key={idx} className="tech-box reveal">
            <h3>{category.title}</h3>

            <div className="tech-items">
              {category.items.map((t, i) => (
                <div className="tech-item" key={i}>
                  <i className={`${t.icon} tech-icon`} />
                  <p>{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

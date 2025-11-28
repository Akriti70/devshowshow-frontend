import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <style>{`
        .skills-section {
          min-height: 80vh;
          background-color: #f5f5f5;
          padding: 64px 24px;
          font-family: Arial, sans-serif;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .skills-title {
          font-size: 36px;
          font-weight: bold;
          margin: 0;
        }

        .skills-subtitle {
          margin-top: 12px;
          font-size: 18px;
          color: #555;
        }

        .skills-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .skill-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: 1px solid #e0e0e0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .skill-card h3 {
          font-size: 18px;
          color: #4f46e5;
          margin-bottom: 12px;
        }

        .skill-card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 12px;
        }

        .skill-badge {
          margin-bottom: 12px;
        }

        .badge-label {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 4px;
          color: #444;
        }

        .badge-bar {
          width: 100%;
          height: 8px;
          background-color: #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .badge-fill {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #818cf8);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .contact-button {
          display: inline-block;
          margin-top: 40px;
          background-color: #4f46e5;
          color: white;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .contact-button:hover {
          transform: scale(1.03);
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-header">
          <h1 className="skills-title">Akriti Sharma</h1>
          <p className="skills-subtitle">Full-Stack Developer</p>
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <SkillCard
            title="Programming Languages"
            description="JavaScript · TypeScript · Python · SQL"
            skills={[
              { name: "JavaScript", level: 95 },
              { name: "TypeScript", level: 85 },
              { name: "Python", level: 75 },
              { name: "SQL", level: 80 },
            ]}
          />

          {/* Frontend */}
          <SkillCard
            title="Frontend Development"
            description="React.js · Next.js · HTML5 · CSS3 · Material-UI"
            skills={[
              { name: "React", level: 95 },
              { name: "Next.js", level: 80 },
              { name: "CSS3", level: 90 },
              { name: "Material-UI", level: 75 },
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend & APIs"
            description="Node.js · Express · Django · REST · GraphQL"
            skills={[
              { name: "Node.js", level: 85 },
              { name: "Express", level: 80 },
              { name: "Django", level: 70 },
              { name: "GraphQL", level: 60 },
            ]}
          />

          {/* Databases */}
          <SkillCard
            title="Databases"
            description="MongoDB · PostgreSQL · SQL Server"
            skills={[
              { name: "MongoDB", level: 80 },
              { name: "PostgreSQL", level: 75 },
              { name: "SQL Server", level: 70 },
            ]}
          />

          {/* DevOps & Tools */}
          <SkillCard
            title="DevOps & Tools"
            description="Git · Docker · Kubernetes · Jenkins · CI/CD"
            skills={[
              { name: "Git", level: 90 },
              { name: "Docker", level: 75 },
              { name: "Kubernetes", level: 50 },
            ]}
          />

          {/* Testing & Cloud */}
          <SkillCard
            title="Testing & Cloud"
            description="Jest · Cypress · AWS · Azure"
            skills={[
              { name: "Jest", level: 75 },
              { name: "Cypress", level: 65 },
              { name: "AWS", level: 60 },
            ]}
          />

          {/* Methodologies */}
          <SkillCard
            title="Methodologies & Concepts"
            description="Agile · OOP · Web Accessibility"
            skills={[
              { name: "Agile", level: 85 },
              { name: "OOP", level: 80 },
              { name: "Accessibility", level: 70 },
            ]}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="contact-button"
          >
            Get in touch
          </motion.a>
        </div>
      </section>
    </>
  );
}

function SkillCard({ title, description, skills }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {skills.map((s) => (
        <SkillBadge key={s.name} name={s.name} level={s.level} />
      ))}
    </motion.div>
  );
}

function SkillBadge({ name, level }) {
  return (
    <div className="skill-badge">
      <div className="badge-label">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="badge-bar">
        <div className="badge-fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

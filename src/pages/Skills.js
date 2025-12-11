import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <style>{`
        .skills-section {
          min-height: 90vh;
          background: linear-gradient(135deg, rgb(44, 62, 80), rgb(20, 28, 38));
          padding: 64px 24px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .skills-title {
          font-size: 40px;
          font-weight: 900;
          margin: 0;
          color: #facc15;
        }

        .skills-subtitle {
          margin-top: 12px;
          font-size: 18px;
          color: #ccc;
        }

        .skills-grid {
          display: grid;
          gap: 28px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .skill-card {
          background: #1f1f1f;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.5);
          border: 1px solid rgba(250,204,21,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 25px rgba(250,204,21,0.5);
        }

        .skill-card h3 {
          font-size: 20px;
          color: #facc15;
          margin-bottom: 10px;
        }

        .skill-card p {
          font-size: 14px;
          color: #ccc;
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
          color: #ddd;
        }

        .badge-bar {
          width: 100%;
          height: 10px;
          background-color: #333;
          border-radius: 6px;
          overflow: hidden;
        }

        .badge-fill {
          height: 100%;
          background: linear-gradient(90deg, #facc15, #eab308);
          border-radius: 6px;
          transition: width 0.8s ease;
        }

        .contact-button {
          display: inline-block;
          margin-top: 40px;
          background: #facc15;
          color: #0f0f0f;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 25px;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(250,204,21,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-button:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 25px rgba(250,204,21,0.6);
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-header">
          <h1 className="skills-title">Akriti Sharma</h1>
          <p className="skills-subtitle">Full-Stack Developer</p>
        </div>

        <div className="skills-grid">
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
          <SkillCard
            title="Databases"
            description="MongoDB · PostgreSQL · SQL Server"
            skills={[
              { name: "MongoDB", level: 80 },
              { name: "PostgreSQL", level: 75 },
              { name: "SQL Server", level: 70 },
            ]}
          />
          <SkillCard
            title="DevOps & Tools"
            description="Git · Docker · Kubernetes · Jenkins · CI/CD"
            skills={[
              { name: "Git", level: 90 },
              { name: "Docker", level: 75 },
              { name: "Kubernetes", level: 50 },
            ]}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
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

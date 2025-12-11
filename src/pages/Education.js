import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    degree: "Ironhack Web Development Bootcamp",
    school: "Berlin, Germany",
    period: "June 2025 – Nov 2025",
    description: "Intensive full-stack web development program with hands-on projects.",
    modules: [
      "Frontend: React.js, Next.js, TypeScript, Material-UI",
      "Backend: Node.js, Express, Django, Flask",
      "CI/CD with Docker & Jenkins",
      "Team projects with clean architecture & TDD",
    ],
  },
  {
  degree: "Master’s Degree in Information Technology",
  school: "HTW Berlin – Hochschule für Technik und Wirtschaft",
  period: "Oct 2021 – Sep 2023",
  description:
    "Advanced IT and web development studies with focus on full-stack applications and digital solutions.",
  modules: [
    // Updated modules

    "• Data Science",
    "• Cloud Computing",
    "• Mobile Computing",
    "• Internet of Things",
   "• Data Ethics, Privacy and Governance",
    "• Enterprise Architecture Management",
    "• IT Security",
    "• Requirements Engineering",
  ],
},{
    degree: "Postgraduate Diploma in Computer Science",
    school: "CDAC – Centre for Development of Advanced Computing, Hyderabad",
    period: "Jul 2017",
    description: "Advanced computing and programming curriculum with practical projects.",
    modules: [
      "Advanced Programming (C++, Java, Python)",
      "Database Management & SQL",
      "Web Development Basics",
      "Software Engineering Principles",
    ],
  },
  {
    degree: "Bachelor of Engineering in Electronics",
    school: "Dr. A.P.J. Abdul Kalam Technical University, India",
    period: "Sep 2012 – Jun 2016",
    description: "Core electronics and engineering fundamentals with practical lab work.",
    modules: [
      "Electronics & Communication Systems",
      "Signal Processing & Control Systems",
      "Embedded Systems & Microcontrollers",
      "Project Work & Engineering Design",
    ],
  },
];

// Separate component for each Education Card
function EducationCard({ edu }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const styles = {
    eduCard: {
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "15px",
      padding: "25px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      position: "relative",
      overflow: "hidden",
      textAlign: "left",
      transition: "all 0.6s ease-out",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(50px)",
    },
    eduCardBefore: {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "6px",
      height: "100%",
      background: "#facc15",
      borderRadius: "8px 0 0 8px",
    },
    eduHeader: { marginBottom: "15px" },
    degree: { fontSize: "1.6rem", fontWeight: "700", marginBottom: "5px" },
    school: { fontSize: "1.1rem", fontWeight: "500", color: "#facc15", marginBottom: "5px" },
    period: { fontSize: "0.9rem", color: "#ccc", marginBottom: "10px" },
    description: { fontSize: "1rem", lineHeight: "1.6", color: "#eee", marginBottom: "10px" },
    modules: { fontSize: "0.95rem", color: "#ffd700", marginTop: "10px", listStyle: "inside disc" },
  };

  return (
    <div ref={ref} style={styles.eduCard}>
      <div style={styles.eduCardBefore}></div>
      <div style={styles.eduHeader}>
        <h3 style={styles.degree}>{edu.degree}</h3>
        <span style={styles.school}>{edu.school}</span>
        <span style={styles.period}> | {edu.period}</span>
      </div>
      <p style={styles.description}>{edu.description}</p>
      <ul style={styles.modules}>
        {edu.modules.map((module, i) => (
          <li key={i}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  const styles = {
    section: {
      minHeight: "100vh",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "900",
      color: "#facc15",
      marginBottom: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
    },
    timeline: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      maxWidth: "900px",
      margin: "0 auto",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        <FaGraduationCap style={{ fontSize: "2.5rem" }} /> Education
      </h2>

      <div style={styles.timeline}>
        {educationData.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </div>
    </section>
  );
}

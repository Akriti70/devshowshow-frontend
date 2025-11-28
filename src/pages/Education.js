// src/pages/Education.js
import React from "react";

const educationList = [
  {
    degree: "Ironhack Web Development Bootcamp",
    location: "Berlin, Germany",
    period: "June 2025 – Nov 2025",
    highlights: [
      "Frontend: React.js, Next.js, TypeScript, Material-UI",
      "Backend: Node.js, Express, Django, Flask",
      "CI/CD with Docker & Jenkins",
      "Team projects with clean architecture & TDD",
    ],
  },
  {
    degree: "Master’s Degree in Information Technology",
    location: "HTW – Hochschule für Technik und Wirtschaft, Berlin",
    period: "Oct 2021 – Sep 2023",
    highlights: [],
  },
  {
    degree: "Postgraduate Diploma in Computer Science",
    location: "CDAC – Centre for Development of Advanced Computing, Hyderabad",
    period: "Jul 2017",
    highlights: [],
  },
  {
    degree: "Bachelor of Engineering in Electronics",
    location: "Dr. A.P.J. Abdul Kalam Technical University, India",
    period: "Sep 2012 – Jun 2016",
    highlights: [],
  },
];

export default function Education() {
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "80px auto 50px",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#eee",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#facc15",
    },
    eduCard: {
      backgroundColor: "#1f1f1f",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    },
    degree: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "5px" },
    location: { fontSize: "1.2rem", fontWeight: "500", color: "#facc15" },
    period: { fontSize: "0.9rem", color: "#aaa", marginBottom: "10px" },
    ul: { paddingLeft: "20px" },
    li: { marginBottom: "6px", lineHeight: "1.5" },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} style={styles.eduCard}>
          <div style={styles.degree}>{edu.degree}</div>
          <div style={styles.location}>{edu.location}</div>
          <div style={styles.period}>{edu.period}</div>
          {edu.highlights.length > 0 && (
            <ul style={styles.ul}>
              {edu.highlights.map((point, i) => (
                <li key={i} style={styles.li}>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

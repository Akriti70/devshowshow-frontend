// src/pages/Work.js
import React from "react";

const experiences = [
  {
    title: "Software Working Student",
    company: "Getsafe GmbH",
    location: "Berlin, Germany",
    period: "Nov 2022 – Mar 2024",
    responsibilities: [
      "Developed robust APIs with SQL integration to streamline customer data access.",
      "Automated testing with Jest, significantly reducing bugs and improving release stability.",
      "Redesigned the e-commerce platform using React.js, Redux, and Material-UI, boosting conversion rates by 50%.",
      "Participated in Agile ceremonies, code reviews, and pair programming.",
      "Optimized performance, scalability, and security using Docker and Kubernetes.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Vertex Infotech Services",
    location: "India",
    period: "Aug 2017 – Sept 2019",
    responsibilities: [
      "Built responsive web and mobile apps using JavaScript, TypeScript, Node.js, and Vue.js.",
      "Integrated RESTful APIs and optimized queries for performance with MongoDB and SQL Server.",
      "Collaborated with cross-functional teams for requirement gathering and testing.",
      "Maintained documentation and contributed to code reviews.",
      "Supported post-deployment issue resolution using Flask and Django.",
    ],
  },
];

export default function Work() {
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
    jobCard: {
      backgroundColor: "#1f1f1f",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    },
    jobTitle: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "5px" },
    company: { fontSize: "1.2rem", fontWeight: "500", color: "#facc15" },
    period: { fontSize: "0.9rem", color: "#aaa", marginBottom: "10px" },
    ul: { paddingLeft: "20px" },
    li: { marginBottom: "6px", lineHeight: "1.5" },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Work Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} style={styles.jobCard}>
          <div style={styles.jobTitle}>{job.title}</div>
          <div style={styles.company}>
            {job.company} | {job.location}
          </div>
          <div style={styles.period}>{job.period}</div>
          <ul style={styles.ul}>
            {job.responsibilities.map((resp, i) => (
              <li key={i} style={styles.li}>
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

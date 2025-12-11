import React from "react";
import { FaBriefcase } from "react-icons/fa";

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
    section: {
      minHeight: "100vh",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
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
    jobCard: {
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "15px",
      padding: "25px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    jobCardBefore: {
      content: "''",
      position: "absolute",
      left: "0",
      top: "0",
      width: "6px",
      height: "100%",
      background: "#facc15",
      borderRadius: "8px 0 0 8px",
    },
    jobCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
    },
    jobHeader: {
      marginBottom: "15px",
      textAlign: "left",
    },
    jobTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "6px",
    },
    jobCompany: {
      display: "block",
      fontSize: "1.1rem",
      fontWeight: "500",
      color: "#facc15",
      marginBottom: "6px",
    },
    jobPeriod: {
      display: "block",
      fontSize: "0.9rem",
      color: "#ccc",
      marginBottom: "10px",
    },
    responsibilities: {
      textAlign: "left",
      paddingLeft: "20px",
      listStyleType: "disc",
    },
    responsibilityItem: {
      marginBottom: "8px",
      lineHeight: "1.6",
      transition: "color 0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        <FaBriefcase style={{ fontSize: "2.5rem" }} /> Work Experience
      </h2>

      <div style={styles.timeline}>
        {experiences.map((job, index) => (
          <div
            key={index}
            style={styles.jobCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ ...styles.jobCardBefore, position: "absolute", left: 0, top: 0, width: "6px", height: "100%", background: "#facc15", borderRadius: "8px 0 0 8px" }}></div>
            <div style={styles.jobHeader}>
              <h3 style={styles.jobTitle}>{job.title}</h3>
              <span style={styles.jobCompany}>
                {job.company} | {job.location}
              </span>
              <span style={styles.jobPeriod}>{job.period}</span>
            </div>
            <ul style={styles.responsibilities}>
              {job.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  style={styles.responsibilityItem}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#facc15")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

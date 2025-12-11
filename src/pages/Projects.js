import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Apartment Rentals App",
      tech: "React, JS, HTML5, CSS3",
      description: "CRUD apartment listings with bookmarking, modular components, and responsive UI.",
      link: "https://reactapartment.netlify.app/",
    },
    {
      title: "Pizza Ordering SPA",
      tech: "React, JS, Mock Backend",
      description: "Cart, checkout, and admin CRUD with mock API integration.",
      link: "https://pizaaareact.netlify.app/",
    },
    {
      title: "DevShowcase",
      tech: "MERN (MongoDB, Express, React, Node.js)",
      description: "Full-stack portfolio platform with authentication, project uploads, and profile management.",
      link: "https://devshowcaseportfolio.netlify.app/",
    },
    {
      title: "Job Tracker App",
      tech: "MERN Stack",
      description: "Job tracking dashboard with status updates, REST APIs, and dynamic React UI.",
      link: "https://job-track-app-express.netlify.app/",
    },
    {
      title: "2D Space Defender",
      tech: "JavaScript, Canvas, CSS",
      description: "Browser-based 2D shooter game with physics, animations, scoring, and mobile responsiveness.",
      link: "https://spacedefender-game.netlify.app/",
    },
    {
      title: "Automated Keyword Extraction",
      tech: "Python, NLTK, Scikit-learn",
      description: "NLP pipeline to extract and classify trending social media keywords (HTW Berlin).",
      link: "#",
    },
  ];

  const styles = {
    section: {
      padding: "80px 20px",
      background: "linear-gradient(135deg, rgb(44, 62, 80), rgb(20, 28, 38))",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
    },
    card: {
      backgroundColor: "#1f1f1f",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      minHeight: "250px", // ensures no overlapping
    },
    title: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#facc15",
    },
    tech: {
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "12px",
      color: "#ccc",
    },
    description: {
      fontSize: "16px",
      color: "#b5b5b5",
      lineHeight: "1.6",
      marginBottom: "15px",
      flexGrow: 1,
    },
    link: {
      color: "#facc15",
      fontWeight: "600",
      textDecoration: "none",
      marginTop: "auto",
    },
  };

  return (
    <section style={styles.section}>
      <h2
        style={{
          ...styles.title,
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "50px",
        }}
      >
        My Projects
      </h2>
      <div style={styles.container}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.tech}>{project.tech}</p>
            <p style={styles.description}>{project.description}</p>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

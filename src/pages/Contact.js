import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css"; // We'll create this CSS file for animations

export default function Contact() {
  const buttonStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "12px 25px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#0077cc",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <section style={{
      padding: "50px",
      textAlign: "center",
      backgroundColor: "#f0f8ff",
      minHeight: "80vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        <span className="waving-hand">👋</span> Say Hello!
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        I love connecting with awesome people! Reach out to me anytime ✨
      </p>

      <div>
        <a href="mailto:akritisharma41@gmail.com" style={buttonStyle}>✉️ Email Me</a>
        <a href="tel:+4917683211760" style={buttonStyle}>📞 Call Me Maybe</a>
        <a href="/AkritiCV.pdf" download style={buttonStyle}>📄 Download My CV</a>
        <a href="https://github.com/Akriti70" target="_blank" rel="noopener noreferrer" style={buttonStyle}>🐱 GitHub</a>
        <a href="https://www.linkedin.com/in/akriti-sharma-314899157" target="_blank" rel="noopener noreferrer" style={buttonStyle}>💼 LinkedIn</a>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Link to="/projects" style={{ ...buttonStyle, backgroundColor: "#ff7f50" }}>🚀 View Projects</Link>
        <Link to="/" style={{ ...buttonStyle, backgroundColor: "#32cd32" }}>🏠 Back Home</Link>
      </div>
    </section>
  );
}

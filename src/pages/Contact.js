import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Let's Connect!</h1>
      <p className="contact-subtitle">
        I love collaborating and connecting with awesome people. Reach out anytime! ✨
      </p>

      <div className="contact-cards">
        <a href="mailto:akritisharma41@gmail.com" className="contact-card email">
          <FaEnvelope className="icon" />
          Email Me
        </a>
        <a href="tel:+4917683211760" className="contact-card phone">
          <FaPhone className="icon" />
          Call Me
        </a>
        <a href="/AkritiCV.pdf" download className="contact-card cv">
          <FaFileDownload className="icon" />
          Download CV
        </a>
        <a href="https://github.com/Akriti70" target="_blank" rel="noopener noreferrer" className="contact-card github">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/akriti-sharma-314899157" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
      </div>

      <div className="contact-navigation">
        <Link to="/projects" className="nav-btn projects">🚀 View Projects</Link>
        <Link to="/" className="nav-btn home">🏠 Back Home</Link>
      </div>

      <footer className="footer">
        <p>© 2025 Akriti Sharma | Full Stack Developer</p>
        <div className="footer-links">
          <a href="https://github.com/Akriti70" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akriti-sharma-314899157" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/AkritiCV.pdf" download>CV</a>
        </div>
      </footer>
    </section>
  );
}

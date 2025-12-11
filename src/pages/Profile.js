// src/pages/Profile.js
import React from "react";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaShareAlt,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

export default function Profile() {
  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(135deg, rgb(44, 62, 80), rgb(20, 28, 38))",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      flexDirection: "column",
    },
    container: {
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "50px",
    },
    text: { flex: "1 1 400px" },
    title: {
      fontSize: "48px",
      fontWeight: "900",
      marginBottom: "10px",
      lineHeight: 1.2,
    },
    highlight: { color: "#facc15" },
    subtitle: { fontSize: "24px", fontWeight: "500", color: "#ccc" },
    description: {
      fontSize: "18px",
      color: "#b5b5b5",
      marginTop: "15px",
      lineHeight: 1.6,
    },
    hireButton: {
      marginTop: "25px",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "#facc15",
      color: "#0f0f0f",
      padding: "14px 30px",
      borderRadius: "30px",
      fontWeight: "700",
      textDecoration: "none",
      cursor: "pointer",
      boxShadow: "0px 8px 20px rgba(250,204,21,0.4)",
    },
    imageWrapper: {
      flex: "1 1 300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    gradientBorder: {
      position: "absolute",
      width: "260px",
      height: "260px",
      borderRadius: "50%",
      background:
        "conic-gradient(#6366f1, #a855f7, #ec4899, #facc15, #6366f1)",
      filter: "blur(30px)",
      animation: "rotate 15s linear infinite",
      zIndex: -1,
    },
    image: {
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid #0f0f0f",
      boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
    },
    socialIcons: {
      display: "flex",
      gap: "20px",
      fontSize: "26px",
      marginTop: "30px",
      color: "#facc15",
    },

    aboutSection: {
      width: "100%",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #121821, #0c1015)",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
    },
    aboutContainer: {
      maxWidth: "900px",
      textAlign: "center",
    },
    aboutTitle: {
      fontSize: "38px",
      fontWeight: "700",
      color: "#facc15",
      marginBottom: "20px",
    },
    aboutText: {
      fontSize: "18px",
      color: "#b5b5b5",
      lineHeight: 1.7,
    },

    servicesSection: {
      width: "100%",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #1a1f27, #0d1117)",
      color: "#fff",
      textAlign: "center",
    },
    servicesGrid: {
      maxWidth: "1200px",
      margin: "40px auto 0",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
    },
    serviceCard: {
      padding: "25px",
      background: "linear-gradient(135deg, #ff9966, #ff5e62)",
      borderRadius: "15px",
      color: "#fff",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    },

    portfolioSection: {
      width: "100%",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #2c3e50, #141c26)",
      color: "#fff",
      textAlign: "center",
    },
    portfolioGrid: {
      maxWidth: "1200px",
      margin: "40px auto 0",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    portfolioItem: {
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    },
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section style={styles.section}>
        <div style={styles.container}>
          {/* LEFT TEXT */}
          <motion.div
            style={styles.text}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p style={{ color: "#facc15", fontSize: "20px", fontWeight: "600" }}>
              Hi, I'm
            </p>
            <h1 style={styles.title}>
              <span style={styles.highlight}>Akriti Sharma</span>
            </h1>
            <h2 style={styles.subtitle}>Full Stack Developer & UI/UX Enthusiast</h2>
            <p style={styles.description}>
              I build modern, responsive web applications with smooth user
              experiences and scalable backend logic.
            </p>

            <motion.a
              href="#contact"
              style={styles.hireButton}
              whileHover={{ scale: 1.05 }}
            >
              👜 Hire Me
            </motion.a>

            {/* SOCIAL ICONS */}
            <div style={styles.socialIcons}>
              <a href="https://github.com/Akriti70"><FaGithub /></a>
              <a href="https://github.com/Akriti70"><FaLinkedin /></a>
              <a href="https://github.com/Akriti70"><FaTwitter /></a>
              <a href="mailto:akriti@example.com"><FaEnvelope /></a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={styles.imageWrapper}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={styles.gradientBorder}></div>
            <motion.img
              src={profilePic}
              alt="Akriti Sharma"
              style={styles.image}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <h2 style={styles.aboutTitle}>About Me</h2>
          <motion.p
            style={styles.aboutText}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I'm a passionate Full Stack Developer with a deep love for creating seamless, visually appealing, and high‑performance digital experiences. I specialize in modern frontend development using React, Tailwind, and Framer Motion, and I enjoy crafting smooth animations, responsive layouts, and clean UI designs.

Beyond frontend, I also work with scalable backend technologies like Node.js and Django. I love solving real‑world problems, building creative interfaces, and transforming ideas into functional products. My goal is to build meaningful, user‑focused experiences that leave an impact.
          </motion.p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={styles.servicesSection}>
        <h2 style={{ fontSize: "38px", fontWeight: "700", color: "#facc15" }}>
          My Best Services
        </h2>

        <div style={styles.servicesGrid}>
          {[{
            icon: <FaLaptopCode size={30} />, title: "Website Design", text: "Creating beautiful and user-friendly websites."
          },{
            icon: <FaShoppingCart size={30} />, title: "E-commerce Solutions", text: "Secure and scalable online store development."
          },{
            icon: <FaMobileAlt size={30} />, title: "Mobile Development", text: "Building smooth and modern mobile applications."
          },{
            icon: <FaShareAlt size={30} />, title: "Content Marketing", text: "Social content that boosts engagement."
          },{
            icon: <FaSearch size={30} />, title: "SEO", text: "Boosting your website's visibility with optimization."
          },{
            icon: <FaBullhorn size={30} />, title: "Digital Marketing", text: "Marketing strategies that grow your brand."},
          {
            icon: <FaLaptopCode size={30} />, title: "10+ Projects", text: "Completed more than 10 real-world, fully functional web projects."
          }].map((s, i) => (
            <div key={i} style={styles.serviceCard}>
              <div style={{ fontSize: "35px", marginBottom: "10px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700" }}>{s.title}</h3>
              <p style={{ marginTop: "10px" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      
          {/* FOOTER SECTION */}
      <footer style={{
        width: "100%",
        padding: "50px 20px",
        background: "linear-gradient(135deg, #0d1117, #1a1f27)",
        color: "#fff",
        textAlign: "center",
        marginTop: "40px",
        borderTop: "2px solid #facc15",
        boxShadow: "0 -4px 25px rgba(0,0,0,0.4)"
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#facc15" }}>
          Thank You for Visiting!
        </h2>
        <p style={{ marginTop: "10px", fontSize: "16px", color: "#ccc" }}>
          Let's build something amazing together. Feel free to reach out anytime!
        </p>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "25px", fontSize: "26px", color: "#facc15" }}>
          <a href="https://github.com/Akriti70"><FaGithub /></a>
          <a href="https://github.com/Akriti70"><FaLinkedin /></a>
          <a href="https://github.com/Akriti70"><FaTwitter /></a>
          <a href="mailto:akriti@example.com"><FaEnvelope /></a>
        </div>

        <p style={{ marginTop: "25px", fontSize: "14px", color: "#888" }}>
          © 2025 Akriti Sharma. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

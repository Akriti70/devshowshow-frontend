import React from "react";
import profilePic from "../assets/profile.jpg";
import { useInView } from "react-intersection-observer";

export default function Profile() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  const styles = {
    section: { width: "100%", minHeight: "100vh", background: "#0f0f0f", color: "#fff", display: "flex", alignItems: "center", padding: "60px 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", flexDirection: "column" },
    container: { maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "1fr", gap: "50px" },
    containerMd: { display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "50px" },
    text: { textAlign: "center" },
    textMd: { textAlign: "left", paddingRight: "40px" },
    hello: { color: "#f0f0f0", fontSize: "20px", marginBottom: "15px" },
    title: { fontSize: "52px", fontWeight: "900", marginBottom: "10px", lineHeight: 1.2, color: "#fff" },
    highlight: { color: "#facc15" },
    subtitle: { fontSize: "24px", fontWeight: "500", marginBottom: "20px", color: "#ccc" },
    description: { color: "#b5b5b5", fontSize: "18px", maxWidth: "500px", margin: "0 auto 30px", lineHeight: "1.6" },
    hireButton: { display: "inline-flex", alignItems: "center", gap: "10px", background: "#facc15", color: "#0f0f0f", padding: "14px 30px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0px 8px 20px rgba(250, 204, 21, 0.4)", transition: "all 0.3s ease" },
    imageWrapper: { position: "relative", width: "320px", margin: "auto" },
    imageWrapperMd: { width: "420px", marginLeft: "auto" },
    glow: { position: "absolute", inset: "0", background: "rgba(250, 204, 21, 0.2)", filter: "blur(50px)", borderRadius: "20px", zIndex: "-1" },
    image: { width: "100%", borderRadius: "25px", objectFit: "cover", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.5)" },

    // What I Do Section
    servicesSection: { background: "#121212", color: "#fff", padding: "80px 20px", width: "100%" },
    servicesContainer: { maxWidth: "1000px", margin: "0 auto" },
    sectionTitle: { fontSize: "32px", fontWeight: "700", marginBottom: "50px", textAlign: "center", color: "#facc15" },
    servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" },
    serviceCard: { background: "#1f1f1f", padding: "30px", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.5)", textAlign: "center", transition: "all 0.3s ease" },

    // Stats/Info Boxes
    statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "50px" },
    statBox: { background: "#1f1f1f", padding: "20px", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.5)", textAlign: "center", fontWeight: "600", fontSize: "18px", color: "#facc15", transition: "all 0.6s ease" },

    cta: { marginTop: "60px", textAlign: "center" },
    ctaButton: { background: "#facc15", color: "#121212", padding: "15px 35px", fontSize: "18px", fontWeight: "700", borderRadius: "30px", textDecoration: "none", boxShadow: "0px 8px 20px rgba(250, 204, 21, 0.4)", transition: "all 0.3s ease" },
  };

  const isDesktop = window.innerWidth >= 768;

  return (
    <div>
      {/* Profile Section */}
      <section style={styles.section}>
        <div style={isDesktop ? styles.containerMd : styles.container}>
          <div style={isDesktop ? styles.textMd : styles.text}>
            <p style={styles.hello}>Hi, I'm</p>
            <h1 style={styles.title}><span style={styles.highlight}>Akriti</span></h1>
            <h2 style={styles.subtitle}>Full Stack Developer</h2>
            <p style={styles.description}>
              I build end-to-end web applications that are scalable, performant, and user-friendly.
              From front-end interfaces to backend APIs and full-stack solutions, I deliver modern and reliable applications.
            </p>
            <a href="/contact" style={styles.hireButton}>👜 Hire Me</a>
          </div>
          <div style={isDesktop ? styles.imageWrapperMd : styles.imageWrapper}>
            <div style={styles.glow}></div>
            <img src={profilePic} alt="Profile" style={styles.image} />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesContainer}>
          <h2 style={styles.sectionTitle}>What I Do</h2>
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <h3>Frontend Development</h3>
              <p>React, TypeScript, HTML, CSS – building responsive and interactive UIs.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Backend & APIs</h3>
              <p>Node.js, Express, MongoDB – creating robust and scalable backend solutions.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Full Stack Architecture</h3>
              <p>Integrating front-end and back-end into reliable, production-ready applications.</p>
            </div>
          </div>

          {/* Animated Stats/Info Boxes */}
          <div style={styles.statsGrid}>
            <div ref={ref1} style={{ ...styles.statBox, opacity: inView1 ? 1 : 0, transform: inView1 ? "translateY(0)" : "translateY(50px)" }}>10+ Projects</div>
            <div ref={ref2} style={{ ...styles.statBox, opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(50px)" }}>3 Years Experience</div>
            <div ref={ref3} style={{ ...styles.statBox, opacity: inView3 ? 1 : 0, transform: inView3 ? "translateY(0)" : "translateY(50px)" }}>Master in IT / Web Developer Bootcamp</div>
          </div>

          {/* Call to Action */}
          <div style={styles.cta}>
            <a href="/contact" style={styles.ctaButton}>🚀 Let's Build Something Great</a>
          </div>
        </div>
      </section>
    </div>
  );
}

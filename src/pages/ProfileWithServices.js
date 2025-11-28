import React from "react";
import Profile from "./Profile";
import { useInView } from "react-intersection-observer";

export default function ProfileWithServices() {
  // Intersection Observer hook for scroll animation
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div>
      {/* Existing Profile Component */}
      <Profile />

      {/* What I Do Section */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesContainer}>
          <h2 style={styles.sectionTitle}>What I Do</h2>
          <div style={styles.servicesGrid}>

            {/* Frontend */}
            <div
              ref={ref1}
              style={{
                ...styles.serviceCard,
                opacity: inView1 ? 1 : 0,
                transform: inView1 ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <h3>Frontend Development</h3>
              <p>
                I create responsive, modern, and user-friendly interfaces with React, TypeScript, and CSS.
              </p>
            </div>

            {/* Backend */}
            <div
              ref={ref2}
              style={{
                ...styles.serviceCard,
                opacity: inView2 ? 1 : 0,
                transform: inView2 ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              <h3>Backend & APIs</h3>
              <p>
                I build robust backend systems with Node.js, Express, and databases, ensuring scalable solutions.
              </p>
            </div>

            {/* Full Stack */}
            <div
              ref={ref3}
              style={{
                ...styles.serviceCard,
                opacity: inView3 ? 1 : 0,
                transform: inView3 ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.6s ease-out 0.4s",
              }}
            >
              <h3>Full Stack Architecture</h3>
              <p>
                I integrate front-end and back-end seamlessly, building complete end-to-end applications.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={styles.cta}>
            <a href="/contact" style={styles.ctaButton}>
              🚀 Let’s Build Something Great
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  servicesSection: {
    background: "#121212",
    color: "#ffffff",
    padding: "80px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  servicesContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "50px",
    textAlign: "center",
    color: "#facc15",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  serviceCard: {
    background: "#1f1f1f",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
    textAlign: "center",
  },
  cta: {
    marginTop: "60px",
    textAlign: "center",
  },
  ctaButton: {
    background: "#facc15",
    color: "#121212",
    padding: "15px 35px",
    fontSize: "18px",
    fontWeight: "700",
    borderRadius: "30px",
    textDecoration: "none",
    boxShadow: "0px 8px 20px rgba(250, 204, 21, 0.4)",
    transition: "all 0.3s ease",
  },
};

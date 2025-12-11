// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaUserCircle,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 50,
      background: "linear-gradient(135deg, rgb(44, 62, 80), rgb(20, 28, 38))", // updated gradient
      boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
      backdropFilter: "blur(6px)",
    },
    wrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "14px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      color: "#facc15",
      fontSize: "26px",
      fontWeight: "bold",
      textDecoration: "none",
      letterSpacing: "1px",
    },
    desktopMenu: {
      display: "flex",
      gap: "24px",
      fontWeight: "500",
      alignItems: "center",
    },
    link: (active) => ({
      color: active ? "#facc15" : "#fff",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      backgroundColor: active ? "rgba(250,204,21,0.1)" : "transparent",
      fontSize: "16px",
      fontWeight: "500",
    }),
    mobileBtn: {
      color: "#fff",
      fontSize: "28px",
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "block",
    },
    mobileMenu: {
      background: "linear-gradient(135deg, rgb(44, 62, 80), rgb(20, 28, 38))",
      width: "90%",
      margin: "10px auto",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      borderRadius: "12px",
      color: "#fff",
      fontWeight: "500",
      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    },
  };

  const menuItems = [
    { name: "Profile", path: "/", icon: <FaUserCircle /> },
    { name: "Skills", path: "/skills", icon: <FaTools /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Work", path: "/work", icon: <FaBriefcase /> },
    { name: "Contact", path: "/contact", icon: <FaUserCircle /> },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.wrapper}>
        <Link to="/" style={styles.logo}>
          DevShowcase
        </Link>

        {isDesktop ? (
          <div style={styles.desktopMenu}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={styles.link(location.pathname === item.path)}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        ) : (
          <>
            <button
              style={styles.mobileBtn}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isOpen && (
              <div style={styles.mobileMenu}>
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={styles.link(location.pathname === item.path)}
                  >
                    {item.icon} {item.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

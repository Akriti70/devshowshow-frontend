// src/components/Navbar.js
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  FaUserCircle,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsOpen(false);
  };

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
      background: "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    },
    wrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      textDecoration: "none",
    },
    desktopMenu: {
      display: "flex",
      gap: "20px",
      fontWeight: "500",
      alignItems: "center",
    },
    link: {
      color: "white",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "0.3s",
    },
    buttonLogin: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "#facc15",
      color: "black",
      padding: "8px 16px",
      borderRadius: "20px",
      textDecoration: "none",
      fontWeight: "600",
      transition: "0.3s",
    },
    buttonLogout: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "#dc2626",
      color: "white",
      padding: "8px 16px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s",
    },
    mobileBtn: {
      color: "white",
      fontSize: "28px",
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "block",
    },
    mobileMenu: {
      background: "linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)",
      width: "100%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      color: "white",
      fontWeight: "500",
    },
  };

  const menuItems = [
    { name: "Profile", path: "/profile", icon: <FaUserCircle /> },
    { name: "Skills", path: "/skills", icon: <FaTools /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Work", path: "/work", icon: <FaBriefcase /> },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.wrapper}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          DevShowcase
        </Link>

        {/* Desktop Menu */}
        {isDesktop && (
          <div style={styles.desktopMenu}>
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} style={styles.link}>
                {item.icon} {item.name}
              </Link>
            ))}

            {user ? (
              <button onClick={handleLogout} style={styles.buttonLogout}>
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <Link to="/login" style={styles.buttonLogin}>
                <FaSignInAlt /> Login
              </Link>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        {!isDesktop && (
          <button
            style={styles.mobileBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {!isDesktop && isOpen && (
        <div style={styles.mobileMenu}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={styles.link}
            >
              {item.icon} {item.name}
            </Link>
          ))}

          {user ? (
            <button onClick={handleLogout} style={styles.buttonLogout}>
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              style={styles.buttonLogin}
            >
              <FaSignInAlt /> Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

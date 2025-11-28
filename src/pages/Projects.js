import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import API from "../api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get("/projects");
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "40px", color: "#666" }}>
        Loading projects...
      </p>
    );

  if (projects.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "40px", color: "#666" }}>
        No projects found.
      </p>
    );

  return (
    <div style={{ padding: "60px 20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", fontSize: 36, marginBottom: 50 }}>
        My Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 30,
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p._id}
            whileHover={{ y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {/* Clickable Project Title */}
            <Link
              to={`/projects/${p._id}/comments`}
              style={{ fontSize: 22, fontWeight: 600, marginBottom: 10, color: "#4f46e5", textDecoration: "none" }}
            >
              {p.title}
            </Link>

            <p style={{ color: "#555", marginBottom: 10 }}>{p.description}</p>

            {p.techStack && (
              <p style={{ fontSize: 14, color: "#777", marginBottom: 15 }}>
                <strong>Tech:</strong> {p.techStack.join(", ")}
              </p>
            )}

            <div style={{ display: "flex", gap: 15, marginTop: "auto" }}>
              {p.githubLink && (
                <a href={p.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5", textDecoration: "none" }}>
                  GitHub
                </a>
              )}
              {p.liveLink && (
                <a href={p.liveLink} target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5", textDecoration: "none" }}>
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

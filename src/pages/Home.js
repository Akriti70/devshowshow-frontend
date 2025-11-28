import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get("/projects");
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: 50 }}>Loading projects...</p>;

  if (projects.length === 0)
    return <p style={{ textAlign: "center", marginTop: 50 }}>No projects found.</p>;

  return (
    <div style={{ padding: "60px 20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", fontSize: 36, fontWeight: "bold", marginBottom: 50 }}>
        My Projects
      </h1>

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
          <div
            key={p._id} // Unique key
            style={{
              background: "#2c2c2c",
              borderRadius: 12,
              padding: 20,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <Link
              to={`/projects/${p._id}`} // Fixed route
              style={{ fontSize: 22, fontWeight: 600, marginBottom: 10, color: "#facc15", textDecoration: "none" }}
            >
              {p.title}
            </Link>

            <p style={{ color: "#ccc", marginBottom: 10 }}>{p.description}</p>

            {p.techStack && (
              <p style={{ fontSize: 14, color: "#999", marginBottom: 15 }}>
                <strong>Tech:</strong> {p.techStack.join(", ")}
              </p>
            )}

            <div style={{ display: "flex", gap: 15, marginTop: "auto" }}>
              {p.githubLink && (
                <a href={p.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: "#facc15" }}>
                  GitHub
                </a>
              )}
              {p.liveLink && (
                <a href={p.liveLink} target="_blank" rel="noopener noreferrer" style={{ color: "#facc15" }}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

export default function ProjectDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: projectData } = await API.get(`/projects/${id}`);
        setProject(projectData);

        const { data: commentsData } = await API.get(`/comments/project/${id}`);
        setComments(
          (commentsData || []).map((c) => ({
            _id: c._id || Math.random().toString(36).substring(2, 9),
            text: c.text || "",
            userId: c.userId || { name: c.userName || "Anonymous" },
            createdAt: c.createdAt || new Date().toISOString(),
          }))
        );

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load project or comments.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleComment = async (e) => {
    e.preventDefault();
    if (!text || !user) return;

    try {
      const { data } = await API.post(
        "/comments",
        { text, project: project._id },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      const newComment = {
        _id: data._id || Math.random().toString(36).substring(2, 9),
        text,
        userId: { name: user.name },
        createdAt: new Date().toISOString(),
      };

      setComments([newComment, ...comments]);
      setText("");
    } catch (err) {
      console.error(err);
      alert("Failed to post comment. Make sure you are logged in.");
    }
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: 50 }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: 50, color: "red" }}>{error}</p>;
  if (!project) return <p style={{ textAlign: "center", marginTop: 50 }}>Project not found</p>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "Arial", color: "#eee" }}>
      <h2 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>{project.title}</h2>
      <p style={{ marginBottom: 10 }}>{project.description}</p>
      {project.techStack?.length > 0 && (
        <p style={{ marginBottom: 10 }}>
          <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </p>
      )}
      <div style={{ marginBottom: 20 }}>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer" style={{ color: "#facc15", marginRight: 10 }}>
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ color: "#facc15" }}>
            GitHub
          </a>
        )}
      </div>

      <hr style={{ borderColor: "#444", margin: "20px 0" }} />

      {/* Comments Section */}
      <h3 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>Comments</h3>

      {user ? (
        <form onSubmit={handleComment} style={{ display: "flex", marginBottom: 20 }}>
          <input
            type="text"
            placeholder={`${user.name}, add a comment...`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 8,
              border: "1px solid #555",
              marginRight: 10,
              backgroundColor: "#1f1f1f",
              color: "#fff",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              backgroundColor: "#facc15",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Post
          </button>
        </form>
      ) : (
        <p style={{ color: "#aaa", marginBottom: 20 }}>Please login to post comments.</p>
      )}

      {comments.length === 0 ? (
        <p style={{ color: "#aaa" }}>No comments yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {comments.map((c) => (
            <div key={c._id} style={{ padding: 10, backgroundColor: "#222", borderRadius: 8 }}>
              <strong>{c.userId?.name || "Anonymous"}</strong>: {c.text}
              <div style={{ fontSize: 12, color: "#888" }}>{new Date(c.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

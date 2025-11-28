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

        const { data: commentsData } = await API.get(`/projects/${id}/comments`);
        setComments(commentsData || []);
      } catch (err) {
        console.error("Error loading project details:", err);
        setError("Failed to load project or comments.");
      } finally {
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
        `/projects/${id}/comments`,
        { text },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      setComments([data, ...comments]);
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
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.techStack && <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>}

      <hr style={{ margin: "20px 0" }} />

      <h3>Comments</h3>

      {user ? (
        <form onSubmit={handleComment} style={{ display: "flex", marginBottom: 20 }}>
          <input
            type="text"
            placeholder={`Add a comment...`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ flex: 1, marginRight: 10, padding: 10 }}
          />
          <button type="submit">Post</button>
        </form>
      ) : (
        <p>Please login to post comments.</p>
      )}

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} style={{ padding: 10, background: "#eee", marginBottom: 10 }}>
            <strong>{c.createdBy?.name || "Anonymous"}</strong>: {c.text}
            <div style={{ fontSize: 12 }}>{new Date(c.createdAt).toLocaleString()}</div>
          </div>
        ))
      )}
    </div>
  );
}

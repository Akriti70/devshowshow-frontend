import { useState, useEffect, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
    image: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects
  useEffect(() => {
    if (!user || user.role !== "admin") return;
    const fetchProjects = async () => {
      try {
        const { data } = await API.get("/projects");
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects");
        setLoading(false);
        console.error(err);
      }
    };
    fetchProjects();
  }, [user]);

  if (!user || user.role !== "admin") return <p>Access denied. Admins only.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new project
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const techArray = form.techStack.split(",").map(t => t.trim());
      const { data } = await API.post("/projects", { ...form, techStack: techArray });
      setProjects([data, ...projects]);
      setForm({ title: "", description: "", techStack: "", githubLink: "", liveLink: "", image: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add project");
      console.error(err);
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await API.delete(`/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      alert("Failed to delete project");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <h3>Add New Project</h3>
      <form onSubmit={handleAdd} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="techStack"
          placeholder="Tech stack (comma separated)"
          value={form.techStack}
          onChange={handleChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="githubLink"
          placeholder="GitHub Link"
          value={form.githubLink}
          onChange={handleChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="liveLink"
          placeholder="Live Demo Link"
          value={form.liveLink}
          onChange={handleChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>Add Project</button>
      </form>

      <h3>Existing Projects</h3>
      {projects.length === 0 ? <p>No projects yet.</p> : (
        <div>
          {projects.map(p => (
            <div key={p._id} style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}>
              <h4>{p.title}</h4>
              <p>{p.description.substring(0, 100)}...</p>
              <button onClick={() => handleDelete(p._id)} style={{
                padding: "5px 10px",
                backgroundColor: "#f00",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

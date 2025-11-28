
    // src/pages/Register.js
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api"; // Axios instance with baseURL
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/users/register", { name, email, password });
      login(data); // Save token and user in context
      navigate("/"); // redirect after register
    } catch (err) {
      console.error(err);
      // Safely read message to avoid undefined errors
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#1d1d1d",
      color: "#fff",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      fontFamily: "Arial, sans-serif",
    },
    title: { textAlign: "center", marginBottom: "20px", fontSize: "1.8rem" },
    error: { color: "red", textAlign: "center", marginBottom: "10px" },
    form: { display: "flex", flexDirection: "column", gap: "10px" },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #555",
      fontSize: "1rem",
      backgroundColor: "#2a2a2a",
      color: "#fff",
    },
    button: {
      padding: "10px",
      backgroundColor: "#4f46e5",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

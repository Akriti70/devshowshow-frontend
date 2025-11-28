import React from "react";

export default function Comment({ comment }) {
  const { text, user, createdAt } = comment;
  const date = new Date(createdAt).toLocaleString();

  return (
    <div style={{
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#1f1f1f",
      border: "1px solid #555",
    }}>
      <div style={{ marginBottom: 5 }}>
        <strong style={{ color: "#facc15" }}>{user?.name || "Anonymous"}</strong>{" "}
        <span style={{ fontSize: 12, color: "#aaa" }}>{date}</span>
      </div>
      <div style={{ color: "#eee" }}>{text}</div>
    </div>
  );
}

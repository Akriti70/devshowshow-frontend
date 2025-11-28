import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileWithServices from "./pages/ProfileWithServices";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar appears on all pages */}

      <div className="pt-24">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-with-services" element={<ProfileWithServices />} />

          {/* Project details page */}
          {/* Changed path to match clickable links in Home/Projects */}
          <Route path="/projects/:id/comments" element={<ProjectDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

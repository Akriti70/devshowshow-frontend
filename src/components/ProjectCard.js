import React from "react";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.liveLink || project.githubLink || "#"}
      target="_blank"
      rel="noreferrer"
      className="group block bg-[#2a2a2a] rounded-2xl shadow-xl overflow-hidden flex flex-col 
                 hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>
        <p className="text-gray-400 text-sm">
          <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </p>
      </div>

      {/* Links */}
      <div className="px-6 pb-6 flex gap-4 z-10 relative">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 font-semibold hover:underline transition-colors duration-300"
            onClick={(e) => e.stopPropagation()} // prevents parent link from triggering
          >
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 font-semibold hover:underline transition-colors duration-300"
            onClick={(e) => e.stopPropagation()} // prevents parent link from triggering
          >
            Live Demo
          </a>
        )}
      </div>
    </a>
  );
}

import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce React App",
      description:
        "A fully responsive e-commerce platform built with React, featuring product filtering, cart functionality, and user authentication.",
      technologies: ["React", "CSS3", "JavaScript", "Context API"],
      category: "react",
      image: "project1",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      category: "javascript",
      image: "project2",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "Productivity application for task management with drag-and-drop functionality, deadlines, and team collaboration features.",
      technologies: ["React", "Bootstrap", "Local Storage", "JavaScript"],
      category: "react",
      image: "project3",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "AI-Powered Chat Interface",
      description:
        "Modern chat interface with AI integration, real-time messaging, and smart response suggestions using basic AI concepts.",
      technologies: ["JavaScript", "AI Basics", "CSS3", "WebSockets"],
      category: "javascript",
      image: "project4",
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "react", label: "React" },
    { key: "javascript", label: "JavaScript" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-filter">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.image}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      Live Demo
                    </a>
                    <a href={project.github} className="project-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

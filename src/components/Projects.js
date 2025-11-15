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
      image: "/images/project-1.png",
      link: "https://beauty-bliss-shop.vercel.app/",
      github: "https://github.com/refiilwemotaung-cpu/E-commerce-React-App",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      category: "javascript",
      image: "/images/project-2.png",
      link: "https://breeze-tracker.vercel.app/",
      github: "https://github.com/refiilwemotaung-cpu/react-weather-app",
    },
    {
      id: 3,
      title: "AI Powered Smart Planner",
      description:
        "An intelligent task management application that uses AI to prioritize tasks, suggest optimal schedules, and provide productivity insights. Features smart reminders, goal tracking, and automated scheduling.",
      technologies: [
        "React",
        "AI Integration",
        "Machine Learning",
        "Local Storage",
        "JavaScript",
        "CSS3",
      ],
      category: "react",
      image: "images/project-3.png",
      link: "https://ai-powered-smart-planner.vercel.app/",
      github: "https://github.com/refiilwemotaung-cpu/ai-powered-smart-planner",
    },
    {
      id: 4,
      title: "Recipe Finder App",
      description:
        "A comprehensive recipe discovery platform that helps users find meals based on available ingredients, dietary restrictions, and cooking time. Features advanced filtering and step-by-step instructions.",
      technologies: ["JavaScript", "CSS3", "HTML5", "Responsive Design"],
      category: "javascript",
      image: "/images/project-4.png",
      link: "https://cupboardcuisine.vercel.app/",
      github: "https://github.com/refiilwemotaung-cpu/Recipe-Finder-App",
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="image-placeholder">
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "AI Basics",
  ];

  const resumePdfUrl = "/files/Refilwe Motaung Junior UX Frontend Resume.pdf";

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate junior front-end developer with expertise in
              modern web technologies. I love creating beautiful, functional web
              experiences that make a difference. My journey in web development
              started with curiosity and has evolved into a passion for building
              user-centric applications.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <h4>My Approach</h4>
                <p>
                  Clean code, responsive design, and user-focused solutions are
                  at the heart of everything I build.
                </p>
              </div>

              <div className="detail-item">
                <h4>My Passion</h4>
                <p>
                  I'm constantly learning and exploring new technologies to stay
                  at the forefront of web development.
                </p>
              </div>
            </div>

            <div className="resume-section">
              <h4>My Resume</h4>
              <p>
                Looking for a detailed overview of my experience and skills?
              </p>

              <div className="resume-preview">
                <div className="preview-container">
                  <div className="preview-placeholder">
                    <span className="preview-icon">📄</span>
                    <span className="preview-text">Resume Preview</span>
                    <span className="preview-subtext">
                      Click buttons below to view or download
                    </span>
                  </div>
                  <div className="preview-actions">
                    <button
                      className="preview-btn"
                      onClick={() => window.open(resumePdfUrl, "_blank")}
                    >
                      👀 Quick Preview
                    </button>
                  </div>
                </div>
              </div>

              <div className="resume-formats">
                <h5>Download Formats:</h5>
                <div className="resume-actions">
                  <a
                    href={resumePdfUrl}
                    className="btn primary resume-btn"
                    download="Refilwe-Motaung-Resume.pdf"
                  >
                    📄 PDF Version
                  </a>

                  <a
                    href={resumePdfUrl}
                    className="btn secondary resume-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 View in Browser
                  </a>
                </div>
              </div>

              <p className="resume-note">
                All formats are printable and optimized for best viewing
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technologies I Work With</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

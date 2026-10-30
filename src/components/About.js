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
              I'm a Junior Frontend Developer and UX Design enthusiast with a
              background in financial services and administration. I enjoy
              creating responsive, accessible, and user-friendly digital
              experiences that bring together thoughtful design and functional
              development. Having completed the Google UX Design Professional
              Certificate and SheCodes Foundation web development training, I've
              developed a foundation in user research, wireframing, prototyping,
              usability testing, and frontend technologies such as HTML, CSS,
              JavaScript, and React. My professional journey also includes
              experience at First National Bank and Liberty Corporate, where I
              worked across banking operations, quality assurance, and pension
              fund administration. These experiences strengthened my attention
              to detail, analytical thinking, problem-solving abilities, and
              understanding of structured business processes. I bring these
              different perspectives into my approach to digital development,
              with an interest in creating solutions that are not only
              technically functional but also intuitive and meaningful to the
              people who use them. I'm continually developing my skills through
              practical projects, exploring new technologies, and expanding my
              understanding of UX and frontend development.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <h4>My Approach</h4>
                <p>
                  I believe great digital experiences begin with understanding
                  the people who use them. I combine user-centred design
                  principles with clean, responsive frontend development to
                  create accessible, intuitive, and functional interfaces.
                </p>
              </div>

              <div className="detail-item">
                <h4>My Passion</h4>
                <p>
                  I'm passionate about the intersection of UX design and
                  frontend development. I enjoy exploring how research,
                  thoughtful design decisions, and technology can work together
                  to solve problems and improve everyday digital experiences.
                  I'm always looking for opportunities to learn, experiment, and
                  grow.
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
                    download="Refilwe Motaung Junior UX Frontend Resume.pdf"
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

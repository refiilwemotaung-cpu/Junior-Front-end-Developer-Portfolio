import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <span>Refilwe Motaung</span>
            </div>
            <p className="footer-text">
              Junior Front-End Developer specializing in React, JavaScript, and
              modern web technologies. Passionate about creating beautiful,
              functional user experiences.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>{" "}
              <a href="#contact">Contact</a>
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              <a
                href="https://github.com/refiilwemotaung-cpu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/refilwe-motaung/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/@fiilweMotaung"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <a
                href="https://instagram.com/web_dev_enthusiast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>

            <div className="link-group">
              <h4>Resources</h4>
              <a href="/files/Refilwe-Motaung-Resume.pdf" download>
                Download Resume
              </a>
              <a href="#certifications">View Certificates</a>{" "}
              <a href="#contact">Get In Touch</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Refilwe Motaung. All rights reserved.</p>
          <div className="footer-credits">
            <span>Built with React & passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

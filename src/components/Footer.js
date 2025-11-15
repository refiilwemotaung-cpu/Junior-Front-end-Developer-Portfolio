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
              <span>Portfolio</span>
            </div>
            <p className="footer-text">
              Creating beautiful digital experiences with modern technologies
              and passionate development.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              <a href="https://github.com/yourusername">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
              <a href="https://twitter.com/yourusername">Twitter/X</a>
              <a href="https://instagram.com/yourusername">Instagram</a>
            </div>

            <div className="link-group">
              <h4>Resources</h4>
              <a href="#resume">Resume</a>
              <a href="#blog">Blog</a>
              <a href="#certifications">Certifications</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="footer-credits">
            <span>Built with React & passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

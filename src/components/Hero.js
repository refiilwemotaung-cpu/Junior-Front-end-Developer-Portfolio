import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="accent-line"></div>
            <h1>
              <span className="name-line">Your Name</span>
              <span className="title-line">Front-End Developer</span>
            </h1>
            <p className="hero-description">
              Crafting digital experiences with modern technologies.
              Specializing in React, JavaScript, and responsive design.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Work
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-container">
              <div className="main-image">
                <div className="image-placeholder">
                  <span>Your Photo</span>
                </div>
              </div>
              <div className="image-frame"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
              <span className="name-line">Refilwe Motaung</span>
              <span className="title-line">
                Junior Front-End Developer | UX Design
              </span>
            </h1>
            <p className="hero-description">
              I build responsive, user-friendly web experiences using HTML, CSS,
              JavaScript, and React. With a background in financial services and
              a Google UX Design Professional Certificate, I bring together
              technical skills, structured problem-solving, and an interest in
              designing digital experiences around users' needs. I'm continuing
              to grow my skills through practical projects and exploring how
              thoughtful UX design and frontend development can work together to
              create useful digital products.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Projects
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-container">
              <div className="main-image">
                <img
                  src="/images/Refilwe.PNG"
                  alt="Refilwe Motaung - Junior Frontend Developer"
                  className="profile-photo"
                />
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

import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Bootstrap", level: 70 },
    { name: "AI Basics", level: 60 },
  ];

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
            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

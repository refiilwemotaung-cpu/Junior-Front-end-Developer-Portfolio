import React from "react";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      name: "Introduction to Coding",
      issuer: "SheCodes",
      date: "2024",
      file: "introduction-to-coding.png",
      skills: ["HTML", "CSS", "JavaScript", "VS Code"],
    },
    {
      name: "Introduction to Web Development",
      issuer: "SheCodes",
      date: "2025",
      file: "intoduction-to-web-development.png",
      skills: ["HTML", "CSS", "JavaScript", "VS Code"],
    },
    {
      name: "Web Development",
      issuer: "SheCodes",
      date: "2024",
      file: "web-development.png",
      skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Hosting"],
    },
    {
      name: "Introduction to Artificial Intelligence",
      issuer: "SheCodes",
      date: "2025",
      file: "intoduction-to-artificial-intelligence.png",
      skills: [],
    },
    {
      name: "Advanced Web Development",
      issuer: "SheCodes",
      date: "2025",
      file: "advanced-web-development.png",
      skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Hosting"],
    },
    {
      name: "Responsive Web Development",
      issuer: "SheCodes",
      date: "2025",
      file: "responsive-web-development.png",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "SEQ", "Hosting"],
    },
    {
      name: "Advanced Responsive Web Development",
      issuer: "SheCodes",
      date: "2025",
      file: "advanced-responsive-web-development.png",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "SEQ", "Hosting"],
    },
    {
      name: "React Development",
      issuer: "SheCodes",
      date: "2025",
      file: "react-development.png",
      skills: ["React"],
    },
    {
      name: "Advanced React Development",
      issuer: "SheCodes",
      date: "2025",
      file: "advanced-react-development.png",
      skills: ["React"],
    },
    {
      name: "Google IT Support",
      issuer: "Coursera",
      date: "2025",
      file: "google-it-support.pdf",
      skills: [
        "Troubleshooting",
        "Networking",
        "Customer Service",
        "Operating Systems",
        "System Administration",
        "Security",
      ],
    },
    {
      name: "Foundations of User Experience (UX) Design",
      issuer: "Coursera",
      date: "2025",
      file: "foundations-of-ux.pdf",
      skills: ["Foundations of User Experience (UX) Design"],
    },
    {
      name: "Full Stack Development",
      issuer: "IT Varsity",
      date: "2025",
      file: "fnb-app-academy.pdf",
      skills: [
        "App Strategies",
        "Design Thinking",
        "Business Development",
        "Backend Development Intro",
        "Build an API",
        "AI in Development Business Funding",
      ],
    },
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Validated skills and continuous learning through recognized
          certifications
        </p>
        <br />
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-header">
                <div className="cert-icon">
                  {cert.issuer === "SheCodes"
                    ? "👩‍💻"
                    : cert.issuer === "Coursera"
                    ? "🎓"
                    : cert.issuer === "IT Varsity"
                    ? "🏫"
                    : "📜"}
                </div>
                <div className="cert-info">
                  <h3>{cert.name}</h3>
                  <div className="cert-meta">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="date">{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="cert-skills">
                {cert.skills && cert.skills.length > 0 ? (
                  cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="no-skills">No specific skills listed</span>
                )}
              </div>

              <div className="cert-actions">
                <a
                  href={`/certificates/${cert.file}`}
                  className="btn primary cert-btn"
                  download={`${cert.name} - ${cert.issuer}.pdf`}
                >
                  📄 Download
                </a>
                <a
                  href={`/certificates/${cert.file}`}
                  className="btn secondary cert-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👀 View
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="download-instructions">
          <h3>📂 All Certificates Available for Download</h3>
          <p>
            Click "Download" to save certificates to your device, or "View" to
            open in browser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

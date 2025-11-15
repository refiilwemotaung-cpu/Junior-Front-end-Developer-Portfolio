import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Message from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
    `.trim();

    const mailtoLink = `mailto:refiilwemotaung@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    alert(
      "Your email client is opening. Please send the pre-filled email to contact me!"
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Have a project in mind or want to chat? I'd love to hear from you.
        </p>
        <br />
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <p>
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how we can work together to bring
                your ideas to life.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <a href="mailto:refiilwemotaung@gmail.com">
                      refiilwemotaung@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Location</div>
                    <span>Johannesburg, South Africa</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div>
                    <div className="contact-label">Status</div>
                    <span>Available for projects</span>
                  </div>
                </div>
              </div>

              <div className="direct-contact">
                <h4>Quick Contact</h4>
                <p>Prefer to email directly?</p>
                <a
                  href="mailto:refiilwemotaung@gmail.com?subject=Portfolio Inquiry&body=Hello Refilwe, I saw your portfolio and would like to connect..."
                  className="btn primary"
                >
                  📧 Email Me Directly
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/refiilwemotaung-cpu"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/refilwe-motaung/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/@fiilweMotaung"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>X</span>
                </a>
                <a
                  href="https://instagram.com/web_dev_enthusiast"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, questions, or how we can work together..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary">
              📧 Open Email to Send
            </button>

            <p className="form-note">
              * This will open your email client with a pre-filled message
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

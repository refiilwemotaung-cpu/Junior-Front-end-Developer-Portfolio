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
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Create Something Amazing</h3>
            <p>
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, I'd
              love to hear from you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:your.email@example.com">
                  your.email@example.com
                </a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Your City, Country</span>
              </div>
              <div className="contact-item">
                <strong>Available for:</strong>
                <span>Freelance & Full-time</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/yourusername" className="social-link">
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="social-link"
              >
                Twitter/X
              </a>
              <a
                href="https://instagram.com/yourusername"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

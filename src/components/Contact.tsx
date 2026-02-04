import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h3 className="hero-title">Get In <span className="gradient-text">Touch</span></h3>
        <p className="contact-description">Feel free to reach out. I'm always open to new opportunities and collaborations!</p>
        <div className="contact-links">
          <a href="mailto:santhiyamittal@gmail.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span className="contact-text">santhiyamittal@gmail.com</span>
          </a>
          <a href="tel:+919003855372" className="contact-link">
            <span className="contact-icon">📱</span>
            <span className="contact-text">+91 9003855372</span>
          </a>
          <a href="https://github.com/sanmittal" className="contact-link">
            <span className="contact-icon">💻</span>
            <span className="contact-text">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/santhiya-mittal" className="contact-link">
            <span className="contact-icon">🔗</span>
            <span className="contact-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
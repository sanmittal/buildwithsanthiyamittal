import React from "react";
import "./Email.css";

const Email: React.FC = () => {
  return (
    <section id="contact" className="email-section">
      <div className="email-container">
        <h3 className="hero-title">
          Have a project in mind?{" "}
          <span className="gradient-text">Let's talk!</span>
        </h3>

        <form
          className="email-form"
          action="https://formsubmit.co/santhiyamittal@gmail.com"
          method="POST"
        >
          {/* REQUIRED CONFIG */}
          <input type="hidden" name="_subject" value="New Portfolio Contact!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* OPTIONAL: Redirect after submit */}
          {/* <input type="hidden" name="_next" value="https://buildwithsanthiya.vercel.app" /> */}

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Santhiya Mittal"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="santhiyamittal@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Discussion"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;

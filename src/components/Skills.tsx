import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills: string[] = ["React", "TypeScript", "Node JS", "JavaScript","GraphQL","Express","NPM","Angular JS","Next.js", "HTML/CSS",  "Nginx","Web3 JS", "Binance Smart Chain",  "Wallet Integration","MongoDB", "MySQL","Solr","Redis","AWS","GitHub", "Bitbucket","VsCode","Stripe","Razorpay"];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h3 className="hero-title"><span className="gradient-text">Skills</span> & Technologies</h3>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-badge">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-blur"></div>
      <div className="hero-blur blur-2"></div>
      <div className="hero-content">
        <h2 className="hero-title">Hi, I'm <span className="gradient-text">Santhiya Mittal</span> 👋</h2>
        <p className="hero-subtitle">Backend Developer | Full-Stack Developer</p>
        <p className="hero-description">I have 6+ years of experience in building scalable and high-performance web applications using Node.js, AngularJS, ReactJS, TypeScript, and GraphQL. Experienced in blockchain development and integration using Web3, Binance Smart Chain (BSC), and smart contracts. Skilled at backend architecture, database optimization, and creating seamless user experiences through efficient API and data design.</p>
        <a href="#projects" className="btn-primary hero-btn">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
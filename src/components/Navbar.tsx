import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Santhiya Mittal</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
          <li className="navbar-item"><a href="#skills" className="navbar-link">Skills</a></li>
          <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
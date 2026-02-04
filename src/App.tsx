import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Email from "./components/Email";
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Email />
      <footer className="footer">
        <p>&copy; 2026 Santhiya mittal. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
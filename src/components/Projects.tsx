import React from "react";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "MatrimonyBiodata (2025)",
      description: "Led and worked hands-on with the backend team to build a scalable system with Node.js microservices architecture, ensuring modularity and high availability. Implemented GraphQL to handle complex, optimized queries and reduce over-fetching. Used MySQL for transactional data storage, Redis for caching and performance optimization, and Apache Solr for fast and efficient search capabilities. Integrated the Biodata application with Bharat Matrimony to enable real-time data synchronization, improving system reliability and data consistency.",
      tech: ["Node.js","React.Js", "TypeScript", "GraphQL", "MySQL", "Redis", "Solr", "Microservices Architecture"],
      url: "https://www.matrimonybiodata.com/",
    },
    {
      title: "Luv.com (2024–2025)",
      description: "Led and actively contributed to backend development for an Indian dating platform using Node.js microservices. Implemented GraphQL for optimized data fetching, Redis for caching, and Solr for advanced search. Enabled live user data synchronization to support real-time interactions and high concurrency.",
      tech: ["Node Js","React JS", "TypeScript", "React.js", "GraphQL", "MySQL", "Redis", "Solr", "Microservices Architecture"],
      url: "https://luv.com",
    },
    {
      title: "MeraLuv (2023–2024)",
      description: "Led and contributed hands-on to backend services for a large-scale American dating platform. Optimized API performance and query execution using GraphQL, improved response times with Redis caching, and handled high-traffic workloads with scalable service design.",
      tech: ["Node.js", "TypeScript", "GraphQL", "MySQL", "Redis", "Solr", "Microservices Architecture"],
      url: "https://meraluv.com",
    },
    {
      title: "Bharat Matrimony Revamp (2022–2023)",
      description: "Re-architected backend services using Node.js microservices architecture and optimized database layers to improve scalability and maintainability. Enhanced GraphQL resolvers and backend workflows, resulting in 40% performance improvement and significantly reduced application load times.",
      tech: ["Node.js", "TypeScript", "GraphQL", "MySQL", "Redis", "Solr", "Microservices Architecture"],
      url: "https://bharatmatrimony.com",
    },
    {
      title: "Bitconia Lottery System (2021–2022)",
      description: "Designed and developed a decentralized lottery DApp with smart contract integration. Implemented secure RNG-based winner selection and blockchain-backed prize distribution. Built backend services using Node.js monolithic architecture to handle transaction validation and system integrity.",
      tech: ["Blockchain", "Node.js", "MongoDB", "Smart Contracts","Monolithic Architecture"],
      url: "",
    },
    {
      title: "N2Coin (2020–2021)",
      description: "Built an ICO presale and token management platform with Binance Smart Chain integration. Implemented wallet connectivity, token allocation and vesting logic, and secure blockchain transaction handling for fundraising operations.",
      tech: ["Blockchain", "Node.js", "MongoDB", "Binance Smart Chain","Monolithic Architecture"],
      url: "",
    },
    {
      title: "Doodem (2020)",
      description: "Developed a content subscription platform supporting pay-per-view (PPV) access and tip-based monetization. Implemented secure APIs, subscription management, and scalable backend services using Node.js monolithic architecture for creator-driven content delivery.",
      tech: ["Node.js", "MongoDB", "Express","Crypto Payments","Razorpay","Monolithic Architecture"],
      url: "",
    },
    {
      title: "Phonoart (2020)",
      description: "Implemented a cart-less shopping system using QR code scanning and virtual currency payments. Designed a Node.js microservices-based backend to support seamless checkout flows and real-time transaction processing with high reliability.",
      tech: ["Node.js", "MongoDB", "Express", "Microservices","Crypto Payments","Monolithic Architecture"],
      url: "",
    },
    {
      title: "Blockchain Firm (2019)",
      description: "Developed responsive, SEO-optimized marketing websites and dynamic web pages. Focused on performance, cross-browser compatibility, and clean UI for blockchain-focused products.",
      tech: ["AngularJS", "HTML", "CSS"],
      url: "https://www.blockchainfirm.io",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h3 className="hero-title">
          My <span className="gradient-text">Projects</span>
        </h3>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="card project-card">
              <div className="project-header">
                <h4 className="project-title">{p.title}</h4>
              </div>
              <p className="project-description">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
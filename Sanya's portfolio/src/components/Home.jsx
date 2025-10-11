import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-section">
      <div className="hero-content">
        <div className="portfolio-title">
          <h1 className="hero-title">SANYA<br/>BANSAL</h1>
          <p className="hero-subtitle">JUNIOR DATA SCIENCE, AI & ML ENGINEER</p>
        </div>
        <p className="mission-statement">
          Passionate Data Science professional specializing in Artificial Intelligence and Machine Learning. 
          Experienced in Python programming, data analysis, statistical modeling, and machine learning algorithms. 
          Skilled in data visualization, predictive analytics, and transforming complex datasets into actionable insights. 
          Combining technical expertise with creative problem-solving to drive data-driven decision making and innovation.
        </p>
        <div className="cta-buttons">
          <Link to="/about" className="btn btn-primary">About Me</Link>
          <Link to="/projects" className="btn btn-secondary">View My Work</Link>
          <a href="./Sanya Bansal-AI Resume .pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Download Resume</a>
        </div>
        <div className="author-name">
          <h3>DATA SCIENTIST • AI/ML ENGINEER • PROBLEM SOLVER</h3>
        </div>
      </div>
      
      <div className="decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
}
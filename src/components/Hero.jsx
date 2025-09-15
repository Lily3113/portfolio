import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImage from '../components/logo back.png'; 
import './Hero.css';

function Hero() {
  const socialLinks = {
    github: "https://github.com/sharon-mutemaringa",
    linkedin: "https://www.linkedin.com/in/sharon-mutemaringa/",
    email: "mwandurasharone@gmail.com"
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <span className="availability">Available for Opportunities</span>
        <h1>Hi, I'm Sharon</h1>
        <h2>Web Developer, Digital Marketer, UI/UX Designer & Cybersecurity Analyst</h2>
        <p className="professional-summary">
          Self-motivated and adaptable professional with a strong foundation in modern front-end technologies (React, Firebase, JavaScript) and a creative eye for user-centered design. Skilled in digital marketing, user research, and responsive development. Known for a strong work ethic, empathy, and a fast learning curve.
        </p>
        <div className="hero-actions">
          <a href={`mailto:${socialLinks.email}`} className="btn-primary">Get In Touch</a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Portfolio</a>
        </div>
        <div className="social-links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href={`mailto:${socialLinks.email}`}><FaEnvelope /></a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Sharon Mwandura" />
      </div>
    </section>
  );
}

export default Hero;
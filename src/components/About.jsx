import React from 'react';
import { FaCode, FaPaintBrush, FaBullhorn, FaUsers, FaLock } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <h3>Creating Digital Experiences That Are Safe and Seamless</h3>
      <p>
        Self-motivated and adaptable professional with a diverse skill set spanning **Web Development**, **UI/UX Design**, **Digital Marketing**, and **Cybersecurity**. Known for a strong work ethic, empathy in design, and a fast learning curve.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon"><FaCode /></div>
          <h4>Web Development</h4>
          <p>Proficient in React, JavaScript, HTML, and CSS to build modern and responsive applications.</p>
        </div>
        <div className="about-card">
          <div className="card-icon"><FaPaintBrush /></div>
          <h4>UI/UX Design</h4>
          <p>Skilled in Figma for wireframing, prototyping, and creating user-centered interfaces.</p>
        </div>
        <div className="about-card">
          <div className="card-icon"><FaBullhorn /></div>
          <h4>Digital Marketing</h4>
          <p>Experienced in social media strategy, content creation, and Search Engine Optimization (SEO).</p>
        </div>
        <div className="about-card">
          <div className="card-icon"><FaLock /></div>
          <h4>Cybersecurity Analysis</h4>
          <p>Focused on identifying vulnerabilities and implementing best practices for secure digital solutions.</p>
        </div>
      </div>
      <div className="about-details">
        <div className="about-column">
          <h4>My Journey</h4>
          <p>
            My journey into technology began at Uncommon.org, where I gained hands-on experience in web development and UI/UX design. Through continuous learning and diverse roles, I've cultivated a unique blend of technical and creative skills, with a recent focus on cybersecurity.
          </p>
          <p>
            Currently, I'm contributing to the community as a Youth Coding Mentor at Uncommon.org, teaching basic coding concepts and helping organize tech workshops for underprivileged youth.
          </p>
        </div>
        <div className="about-column">
          <h4>Core Values</h4>
          <ul>
            <li>Create user-centered designs with empathy.</li>
            <li>Write clean, maintainable, and secure code.</li>
            <li>Embrace continuous learning and adaptability.</li>
            <li>Mentor and uplift the next generation in tech.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
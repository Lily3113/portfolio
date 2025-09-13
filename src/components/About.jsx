import React from 'react';
import { FaCode, FaPaintBrush, FaBullhorn, FaUsers } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <h3>Crafting Digital Solutions With Purpose</h3>
      <p>
        Self-motivated Web Developer & UI/UX Designer with a strong foundation in modern front-end technologies and a creative eye for user-centered design. Known for adaptability, empathy in design, and a fast learning curve.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon"><FaCode /></div>
          <h4>Web Development</h4>
          <p>React, JavaScript, HTML, CSS, and modern frameworks.</p>
        </div>
        <div className="about-card">
          <div className="card-icon"><FaPaintBrush /></div>
          <h4>UI/UX Design</h4>
          <p>Figma, wireframing, prototyping, and user research.</p>
        </div>
        <div className="about-card">
          <div className="card-icon"><FaBullhorn /></div>
          <h4>Digital Marketing</h4>
          <p>Social media strategy, content creation, and SEO.</p>
        </div>
        <div className="about-card">
          <div className="card-icon"><FaUsers /></div>
          <h4>Community Impact</h4>
          <p>Youth mentoring and coding education through Uncommon.org.</p>
        </div>
      </div>
      <div className="about-details">
        <div className="about-column">
          <h4>My Journey</h4>
          <p>
            My passion for technology started at Uncommon.org, where I learned web development, UI/UX design, and digital marketing. Through hands-on experience and diverse roles, I've developed a unique blend of technical and creative skills.
          </p>
          <p>
            Currently, I'm giving back to the community as a Youth Coding Mentor at Uncommon.org, teaching children basic coding concepts and helping organize weekend tech sessions for underprivileged youth.
          </p>
        </div>
        <div className="about-column">
          <h4>Core Values</h4>
          <ul>
            <li>Create user-centered designs with empathy</li>
            <li>Write clean, maintainable, and accessible code</li>
            <li>Embrace continuous learning and growth</li>
            <li>Mentor and uplift the next generation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
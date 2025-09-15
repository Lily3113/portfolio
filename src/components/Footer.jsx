import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-amplitux">
      <div className="footer-top">
        <div className="footer-col-main">
          <h3>Sharon</h3>
          <p>UI/UX Designer, Web Developer, Digital Marketer & Cybersecurity Analyst</p>
          <p>
            A self-motivated UI/UX Designer, Web Developer, Digital Marketer & Cybersecurity Analyst with a strong foundation in modern front-end technologies and a creative eye for user-centered design.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">&copy; {currentYear} Sharon. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/sharon-mutemaringa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/263774xxxxxx" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://github.com/sharon-mutemaringa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
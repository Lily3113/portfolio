import React from 'react';
// import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Footer.css';
import sharonLogo from './logo back.png'; // Import your logo image here

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-mimic">
      <div className="footer-top-mimic">
        <div className="footer-col-mimic">
          <img src={sharonLogo} alt="Sharon Logo" className="footer-logo" />
          <p className="footer-bio">
            A self-motivated UI/UX Designer, Web Developer, Digital Marketer & Cybersecurity Analyst with a strong foundation in modern front-end technologies and a creative eye for user-centered design.
          </p>
        </div>
        <div className="footer-col-mimic">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col-mimic">
          <h4>Contact</h4>
          <p>
            2234 Some St.<br />
            Harare, Zimbabwe<br />
            +263 774 xxx xxx<br />
            <a href="mailto:mwandurasharone@gmail.com">mwandurasharone@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom-mimic">
        {/* <div className="footer-socials-mimic">
          <a href="https://www.linkedin.com/in/sharon-mutemaringa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/263774xxxxxx" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://github.com/sharon-mutemaringa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div> */}
        <p className="copyright-mimic">&copy; {currentYear} Sharon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="www.linkedin.com/in/sharon-e-mwandura-3a576234b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/(+263) 777 742 901" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href=" https://github.com/Lily3113 " target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <p>&copy; {currentYear} Sharon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
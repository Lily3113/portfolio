import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Wave SVG */}
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="url(#waveGradient)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,229.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#ff6347', stopOpacity: 0.7}} />
              <stop offset="100%" style={{stopColor: '#9932CC', stopOpacity: 0.7}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; {currentYear} Sharon Mwandura. All Rights Reserved.</p>
        </div>
        <div className="footer-social-icons">
          {/* Updated social links with your information */}
          <a href="https://www.linkedin.com/in/sharon-e-mwandura-3a576234b" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:mwandurasharone@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://wa.me/263777742901" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
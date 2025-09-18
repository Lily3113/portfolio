import React from 'react';
import './Contact.css';

// Import the eye logo
import eyeIcon from './sem.png'; 

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-main">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="heading">
            <div className="get-in">GET IN</div>
            <div className="touch-line">
              <img src={eyeIcon} alt="Logo" className="logo-icon" />
              <span className="touch">TOUCH</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <p className="intro-text">
            Blending creativity and security — I design user-friendly interfaces, build secure web solutions,
            analyze cyber risks, and drive digital growth through strategic marketing.
          </p>
          <div className="social-section">
            <p className="social-label">SOCIAL LINKS</p>
            <a href="https://www.linkedin.com/in/sharon-e-mwandura-3a576234b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Lily3113" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:mwandurasharone@gmail.com">Email</a>
            <a href="https://wa.me/263777742901" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* EMAIL LINK BELOW */}
      <a href="mailto:mwandurasharone@gmail.com" className="email-link">
        mwandurasharone@gmail.com
      </a>
    </section>
  );
}

export default Contact;

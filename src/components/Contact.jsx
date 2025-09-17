import React from 'react';
import './Contact.css';

// Correctly importing the image file
import eyeIcon from './logo back.png'; 

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-main">
        <div className="contact-left">
          <h1>
            GET IN<br />
            TOUCH
          </h1>
          {/* Using the imported image variable */}
          <img src={eyeIcon} alt="Logo" className="logo-icon" />
        </div>
        <div className="contact-right">
          <p className="intro-text">
            Blending creativity and security — I design user-friendly interfaces, build secure web solutions, analyze cyber risks, and drive digital growth through strategic marketing.
          </p>
          <div className="social-section">
            <p className="social-label">SOCIAL LINKS</p>
            {/* Updated with your actual LinkedIn URL, adding 'https://' for a valid link */}
            <a href="https://www.linkedin.com/in/sharon-e-mwandura-3a576234b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* Updated with your actual GitHub URL */}
            <a href="https://github.com/Lily3113" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {/* Updated with your actual email, using 'mailto:' for a valid link */}
            <a href="mailto:mwandurasharone@gmail.com">Email</a>
            {/* Updated with your actual WhatsApp number, removing parentheses */}
            <a href="https://wa.me/263777742901" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      <a href="mailto:mwandurasharone@gmail.com" className="email-link">
        mwandurasharone@gmail.com
      </a>
    </section>
  );
}

export default Contact;
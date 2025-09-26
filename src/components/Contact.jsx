import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left side: Contact Info Panel (Text, Logo, Contact Details, Social Links) */}
        <div className="contact-info-panel">
          <h2 className="contact-title">Contact Me</h2>
          {/* <p className="contact-description">
            I'm committed to processing the information in order to contact you and talk about your project.
          </p> */}

          {/* New custom descriptive text */}
          <p className="intro-text">
            Blending creativity and security — I design user-friendly interfaces, build secure web solutions,
            analyze cyber risks, and drive digital growth through strategic marketing.
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <FaEnvelope className="detail-icon" />
              <span>mwandurasharone@gmail.com</span>
            </div>
           
          </div>

          <div className="social-links-block">
            <p className="social-label">SOCIAL LINKS</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sharon-e-mwandura-3a576234b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Lily3113" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://wa.me/263777742901" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="contact-form-panel">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="url" id="website" name="website" placeholder="Website" />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

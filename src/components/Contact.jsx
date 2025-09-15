import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! This form is a placeholder and doesn't send emails yet.");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info-container">
          <p className="contact-intro">
            I'm currently available for new opportunities. Feel free to send me a message!
          </p>
          <ul className="contact-details">
            <li><FaMapMarkerAlt /> Harare, Zimbabwe</li>
            <li><FaPhone /> (+263) 777 742 901</li>
            <li><FaEnvelope /> mwandurasharone@gmail.com</li>
          </ul>
          <div className="social-links-contact">
            <a href="www.linkedin.com/in/sharon-e-mwandura-3a576234b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/(+263) 777 742 901" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://github.com/Lily3113" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
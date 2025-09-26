import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close menu after clicking a link

    if (link === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections on the page. Ensure these IDs match your section IDs in the HTML.
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      let currentActive = 'hero'; // Default to 'hero' if nothing else is active

      // Loop through sections in reverse to handle scrolling up
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section's top is in or above the viewport
          if (rect.top <= window.innerHeight / 2) {
            currentActive = sectionId;
            break; 
          }
        }
      }

      // Update the active link state if it has changed
      if (currentActive !== activeLink) {
        setActiveLink(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  return (
    <nav className="navbar-pill">
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={() => handleLinkClick('hero')} className={activeLink === 'hero' ? 'active-link' : ''}>Home</a></li>
        <li><a href="#about" onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'active-link' : ''}>About</a></li>
        <li><a href="#skills" onClick={() => handleLinkClick('skills')} className={activeLink === 'skills' ? 'active-link' : ''}>Skills</a></li>
        <li><a href="#experience" onClick={() => handleLinkClick('experience')} className={activeLink === 'experience' ? 'active-link' : ''}>Experience</a></li>
        <li><a href="#projects" onClick={() => handleLinkClick('projects')} className={activeLink === 'projects' ? 'active-link' : ''}>Projects</a></li>
        <li><a href="#contact" onClick={() => handleLinkClick('contact')} className={activeLink === 'contact' ? 'active-link' : ''}>Contact</a></li>
      </ul>
      
      <div className="navbar-cta">
        <a href="/assets/sharon cv.pdf" download className="cta-button">Resume</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;

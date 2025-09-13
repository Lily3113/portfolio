import React, { useState, useEffect } from 'react';
import { FaDownload, FaShareAlt, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Sharon</div>

      {/* Desktop menu */}
      <ul className="navbar-links">
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>

      <div className="navbar-actions">
        {/* This is the corrected download link */}
        <a href={process.env.PUBLIC_URL + '/Sharon cv.pdf'} download="Sharon-Mwandura-CV.pdf" className="download-btn">
          <FaDownload /> Download CV
        </a>
        <button className="share-btn">
          <FaShareAlt /> Share
        </button>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile toggle button */}
      <button className="menu-toggle-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="navbar-actions">
          <a href={process.env.PUBLIC_URL + '/Sharon cv.docx'} download="Sharon-Mwandura-CV.docx" className="download-btn">
            <FaDownload /> Download CV
          </a>
          <button className="share-btn">
            <FaShareAlt /> Share
          </button>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
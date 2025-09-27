import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'; // Added FaLink icon
import './Projects.css';

// Assuming these paths are correct for your file structure
import project1Image from './leaf-logo.png';
import project2Image from './about-page-2.png';
import project3Image from './about-page.png';
import project4Image from './logo.png';

const projectsData = [
  {
    image: project4Image,
    title: 'ZimRights',
    description: 'ZimRights is a web app that simplifies legal rights in Zimbabwe, offering clear, accessible, and multilingual guidance to help citizens confidently navigate justice.',
    vercelLink: 'https://zim-rights.vercel.app/', // Corrected to use 'vercelLink'
    // Optional: Add a placeholder for GitHub link if it exists
  },
  
  {
    image: project3Image,
    title: 'Parksmart for Car Parks',
    description: 'A solution for car park management, designed to streamline parking and payment processes.',
    vercelLink: 'https://park-smart-one.vercel.app/', // Corrected to use 'vercelLink'
    // Optional: Add a placeholder for GitHub link if it exists
  },

  {
    image: project1Image,
    title: 'Eco Basket an Online Musika',
    description: 'Developed a sustainable products marketplace using HTML & CSS, connecting local sellers with customers.',
    vercelLink: 'https://market-weld-kappa.vercel.app/',
    // Optional: Add a placeholder for Vercel link if it exists
  },
    {
    image: project2Image,
    title: 'Car Rental App (Group Project)',
    description: 'A collaborative project to build a car rental application, showcasing teamwork and front-end development skills.',
    githubLink: 'https://github.com/Lily3113/rent.git',
    // Optional: Add a placeholder for Vercel link if it exists
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
      </div>

      <div className="project-spreads-container">
        {projectsData.map((project, index) => (
          <div key={index} className="book-spread">
            {/* Left Page (Details and Links) */}
            <div className="book-page left-page">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {/* Conditional Rendering for Links */}
              <div className="project-links">
                {/* GitHub Link */}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link link-button">
                    <FaGithub /> GitHub
                  </a>
                )}
                
                {/* Vercel Link (Live Demo) */}
                {project.vercelLink && (
                  <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="vercel-link link-button">
                    <FaLink /> Live Demo
                  </a>
                )}
              </div> {/* End project-links */}
              
            </div> {/* End left-page */}

            {/* Right Page (Image) */}
            <div className="book-page right-page">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
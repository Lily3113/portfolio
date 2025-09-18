import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

// Import your images from the assets folder
import project1Image from './leaf-logo.png';
import project2Image from './about-page-2.png';
import project3Image from './about-page.png';
import project4Image from './logo.png';

const projectsData = [
  {
    image: project1Image,
    title: 'Eco Basket an Online Musika',
    description: 'A platform for sustainable products and an online marketplace, connecting local sellers with customers.',
    githubLink: 'https://github.com/sharon/eco-basket-project'
  },
  {
    image: project2Image,
    title: 'Car Rental App (Group Project)',
    description: 'A collaborative project to build a car rental application, showcasing teamwork and front-end development skills.',
    githubLink: 'https://github.com/sharon/car-rental-app'
  },
  {
    image: project3Image,
    title: 'Parksmart for Car Parks',
    description: 'A solution for car park management, designed to streamline parking and payment processes.',
    githubLink: 'https://github.com/sharon/parksmart-app'
  },
  {
    image: project4Image,
    title: 'CyberShield Academy (WIP)',
    description: 'A gamified cybersecurity learning platform aimed at educating users on recognizing phishing, weak passwords, social engineering, and safe internet habits through quizzes and mini-games.',
    githubLink: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
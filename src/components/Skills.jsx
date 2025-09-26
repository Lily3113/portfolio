import React from 'react';
import { FaLaptopCode, FaPalette, FaChartBar, FaHandsHelping } from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    skills: ['React', 'Firebase', 'Supabase','Python', 'Nextjs', 'Tailwind', 'HTML', 'CSS', 'GitHub']
  },
  {
    icon: <FaPalette />,
    title: 'UI/UX Design',
    skills: ['Wireframing', 'Prototyping', 'Figma', 'User Research']
  },
  {
    icon: <FaChartBar />,
    title: 'Digital Marketing',
    skills: ['Social Media Strategy', 'Content Creation', 'Basic SEO']
  },
  {
    icon: <FaHandsHelping />, // New icon for community impact
    title: 'Community Impact',
    skills: ['Youth Mentorship', 'Community Engagement', 'Teaching']
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-container">
              {skill.icon}
            </div>
            <h3>{skill.title}</h3>
            <ul className="skill-list">
              {skill.skills.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
import React from 'react';
import './Experience.css';

const experienceData = [
 
 
  {
    role: 'Agent (Team Leader)',
    company: 'Agricultural Finance Corporation (AFC)',
    date: 'March 2022 – August 2022',
    description: [
      'Facilitated deposits, loan payments, and other transactions.',
      'Assisted clients with account inquiries.',
      'Led a small team to deliver daily banking services.'
    ]
  },
 
  {
    role: 'Salesperson',
    company: 'CN Baazar (Cosmetic Shop)',
    date: 'February 2023 – June 2023',
    description: [
      'Served in-store customers and met monthly targets.',
      'Promoted beauty products within CBD.',
      'Processed client orders in and around Harare.'
    ]
  },
 {
    role: 'Shop Assistant',
    company: 'Rira Logistics',
    date: 'June 2023 – December 2023',
    description: [
      'Received, stocked, and arranged inventory.',
      'Guided customers and offered product suggestions.',
      'Assisted in pricing audits and issue resolution.'
    ]
  },

 
  {
    role: 'Youth Coding Mentor',
    company: 'Uncommon.org / Community Projects',
    date: '2024 – Present',
    description: [
      'Taught children basic coding concepts using Scratch and beginner-friendly tools.',
      'Helped organize weekend tech sessions for underprivileged youth.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Experience</h2>
      <div className="experience-container">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{job.role}</h3>
              <p className="experience-date">{job.date}</p>
            </div>
            <p className="experience-company">{job.company}</p>
            <ul className="experience-description">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
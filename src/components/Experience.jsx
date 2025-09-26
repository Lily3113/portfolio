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
    role: 'Youth Coding Mentor',
    company: 'Uncommon.org / Community Projects',
    date: '2025 – Present',
    description: [
      'Taught children basic coding concepts using Scratch and beginner-friendly tools.',
      'Helped organize weekend tech sessions for underprivileged youth.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-main-heading">My Experience</h2>
      <div className="experience-main-container">
        <div className="experience-left">
          <h2 className="section-title">Career Highlights</h2>
          <p className="intro-text">
            Blending creativity and security — I design user-friendly interfaces, build secure web solutions, analyze cyber risks, and drive digital growth through strategic marketing.
          </p>
          <div className="awards-box">
            <h4>Certificates</h4>
             <p>Work Readiness</p>
            <p>Business Planning</p>
            <p>ICT Digital Literacy</p>
            <p>CPR, AED and First Aid</p>
            <p>Internet and Social Media Safety</p>
            <p>Effective Communication in the Workplace</p>
          </div>
        </div>
        <div className="experience-timeline-container">
          {experienceData.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-content">
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <ul className="description-list">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
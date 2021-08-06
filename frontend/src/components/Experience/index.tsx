import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './Experience.scss';

function Experience() {
  return (
    <div className="experience">
      <h2>EXPERIENCE</h2>
      {RESUME_DATA.experience.map((job) => (
        <div>
          <span>{job.startDate}</span>
          <span>{job.endDate}</span>
          <span>{job.title}</span>
          <span>{job.company}</span>
          <span>{job.description}</span>
        </div>
      ))}
      <div />
    </div>
  );
}

export default Experience;

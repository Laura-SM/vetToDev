import React from 'react';
import RESUME_DATA from '../../../constants/resumeData';
import './style.scss';

function Experience() {
  return (
    <div className="experience" id="experience">
      <h2>EXPERIENCE</h2>
      {RESUME_DATA.experience.map((job) => (
        <div className="job">
          <div className="job__date">
            {job.startDate}
            -
            {job.endDate}
          </div>
          <div className="job__info">
            <span className="job__title">{job.title}</span>
            <span className="job__company">{job.company}</span>
            <ul className="job__description">{job.description.map((description) => (<li>{description}</li>))}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;

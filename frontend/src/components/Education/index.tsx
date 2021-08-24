import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './style.scss';

function Education() {
  return (
    <div className="education" id="education">
      <h2>EDUCATION</h2>
      {RESUME_DATA.education.map((studies) => (
        <div className="studies">
          <div className="studies__date">
            {studies.startDate}
            -
            {studies.endDate}
          </div>
          <div className="studies__info">
            <span className="studies__school">{studies.school}</span>
            <span className="studies__degree">{studies.degree}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;

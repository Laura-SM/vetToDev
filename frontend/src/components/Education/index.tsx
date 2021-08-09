import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './Education.scss';

function Education() {
  return (
    <div className="education" id="education">
      <h2>EDUCATION</h2>
      <div className="studies">
        {RESUME_DATA.education.map((study) => (
          <div className="study">
            <div className="study__date">
              {study.startDate}
              -
              {study.endDate}
            </div>
            <div className="study__info">
              <span className="study__school">{study.school}</span>
              <span className="study__degree">{study.degree}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './Awards.scss';

function Awards() {
  return (
    <div className="awards" id="awards">
      <h2>AWARDS</h2>
      {RESUME_DATA.awards.map((award) => (
        <div className="award">
          <span className="award__title">{award.title}</span>
          <span className="award__description">{award.description}</span>
          <span className="award__date">{award.date}</span>

        </div>
      ))}
    </div>

  );
}

export default Awards;

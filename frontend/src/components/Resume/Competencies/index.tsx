import React from 'react';
import RESUME_DATA from '../../../constants/resumeData';
import './style.scss';

function Competencies() {
  return (
    <div className="competencies" id="competencies">
      <h2>COMPETENCIES</h2>
      <ul className="competencies__list">
        {RESUME_DATA.competencies.map((competencie) => (
          <li className="competencies__item">
            <span className="material-icons-outlined done">
              done
            </span>
            <span className="competencie">
              {competencie}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competencies;

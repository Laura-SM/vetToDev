import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './style.scss';

function Languages() {
  return (
    <div className="languages" id="languages">
      <h2>LANGUAGES</h2>
      {RESUME_DATA.languages.map((language) => (
        <div className="language">
          <span>{language.language}</span>
          <div className="language__level">
            <div className="language__levelDots">
              { Array(language.levelNumber).fill(<span className="material-icons md-light">circle</span>) }
              { Array(10 - language.levelNumber).fill(<span className="material-icons-outlined md-light">circle</span>) }
            </div>
            <span>{language.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Languages;

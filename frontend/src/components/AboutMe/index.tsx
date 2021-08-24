import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './style.scss';

function AboutMe() {
  return (
    <div className="aboutMe" id="aboutMe">
      <h2>ABOUT ME</h2>
      <p>{RESUME_DATA.aboutMe}</p>
    </div>
  );
}

export default AboutMe;

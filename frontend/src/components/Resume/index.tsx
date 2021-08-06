import React from 'react';
import Card from '../Card';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import './Resume.scss';

function Resume() {
  return (
    <div className="global-container">
      <div className="card-container">
        <Card />
      </div>
      <div className="resume-container">
        <AboutMe />
        <Experience />
      </div>
    </div>
  );
}

export default Resume;

import React from 'react';
import Card from '../Card';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Education from '../Education';
import LateralNavigator from '../LateralNavigator';
import Awards from '../Awards';
import './Resume.scss';

function Resume() {
  return (
    <div className="globalContainer">
      <div className="cardContainer">
        <Card />
      </div>
      <div className="sectionsContainer">
        <AboutMe />
        <Experience />
        <Education />
        <Awards />
      </div>
      <div className="lateralNavigatorContainer">
        <LateralNavigator />
      </div>
    </div>
  );
}

export default Resume;

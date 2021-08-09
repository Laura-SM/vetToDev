import React from 'react';
import Card from '../Card';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import './Resume.scss';
import LateralNavigator from '../LateralNavigator';

function Resume() {
  return (
    <div className="globalContainer">
      <div className="cardContainer">
        <Card />
      </div>
      <div className="sectionsContainer">
        <AboutMe />
        <Experience />
      </div>
      <div className="lateralNavigatorContainer">
        <LateralNavigator />
      </div>
    </div>
  );
}

export default Resume;

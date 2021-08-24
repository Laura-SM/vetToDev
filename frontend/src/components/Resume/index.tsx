import React from 'react';
import Card from './Card';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education';
import Competencies from './Competencies';
import Languages from './Languages';
import Awards from './Awards';
import Blog from './Blog';
import Contact from './Contact';
import Navigator from '../Navigator';
import './style.scss';

function Resume() {
  return (
    <div className="resume">
      <div className="resume__card">
        <Card />
      </div>
      <div className="resume__sections">
        <AboutMe />
        <Experience />
        <Education />
        <Competencies />
        <Languages />
        <Awards />
        <Blog />
        <Contact />
      </div>
      <div className="resume__navigator">
        <Navigator />
      </div>
    </div>
  );
}

export default Resume;

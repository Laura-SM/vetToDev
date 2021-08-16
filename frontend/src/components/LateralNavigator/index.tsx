import React from 'react';
import './LateralNavigator.scss';

function LateralNavigator() {
  return (

    <ul className="lateralNavigator">
      <li className="lateralNavigator__item">
        <a href="#aboutMe">
          <img className="lateralNavigator__image" src="lauraSabater.jpeg" alt="Laura Sabater" />
        </a>
        <span className="lateralNavigator__tooltip">About me</span>
      </li>
      <li className="lateralNavigator__item">
        <a href="#experience">
          <span className="material-icons-outlined md-36">
            business_center
          </span>
        </a>
        <span className="lateralNavigator__tooltip">Experience</span>
      </li>
      <li className="lateralNavigator__item">
        <a href="#education">
          <span className="material-icons-outlined md-36">
            school
          </span>
        </a>
        <span className="lateralNavigator__tooltip">Education</span>
      </li>
      <li className="lateralNavigator__item">
        <a href="#awards">
          <span className="material-icons-outlined md-36">
            emoji_events
          </span>
        </a>
        <span className="lateralNavigator__tooltip">Awards</span>
      </li>
      <li className="lateralNavigator__item">
        <a href="#blog">
          <span className="material-icons-outlined md-36">
            speaker_notes
          </span>
        </a>
        <span className="lateralNavigator__tooltip">Blog</span>
      </li>
      <li className="lateralNavigator__item">
        <a href="#contact">
          <span className="material-icons-outlined md-36">
            email
          </span>
        </a>
        <span className="lateralNavigator__tooltip">Contact</span>
      </li>
    </ul>

  );
}

export default LateralNavigator;

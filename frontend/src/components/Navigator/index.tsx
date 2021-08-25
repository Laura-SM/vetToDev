import React from 'react';
import lauraSabater from '../../assets/lauraSabater.jpeg';
import './style.scss';

function Navigator() {
  return (
    <nav className="navigator">
      <ul className="navigator__list">
        <li className="navigator__item">
          <a href="#aboutMe">
            <img className="navigator__image" src={lauraSabater} alt="Laura Sabater" />
          </a>
          <span className="navigator__tooltip">About me</span>
        </li>
        <li className="navigator__item">
          <a href="#experience">
            <span className="material-icons-outlined md-36">
              business_center
            </span>
          </a>
          <span className="navigator__tooltip">Experience</span>
        </li>
        <li className="navigator__item">
          <a href="#education">
            <span className="material-icons-outlined">
              school
            </span>
          </a>
          <span className="navigator__tooltip">Education</span>
        </li>
        <li className="navigator__item">
          <a href="#competencies">
            <span className="material-icons-outlined md-36">
              verified
            </span>
          </a>
          <span className="navigator__tooltip">Competencies</span>
        </li>
        <li className="navigator__item">
          <a href="#languages">
            <span className="material-icons-outlined md-36">
              language
            </span>
          </a>
          <span className="navigator__tooltip">Languages</span>
        </li>
        <li className="navigator__item">
          <a href="#awards">
            <span className="material-icons-outlined md-36">
              emoji_events
            </span>
          </a>
          <span className="navigator__tooltip">Awards</span>
        </li>
        <li className="navigator__item">
          <a href="#blog">
            <span className="material-icons-outlined md-36">
              speaker_notes
            </span>
          </a>
          <span className="navigator__tooltip">Blog</span>
        </li>
        <li className="navigator__item">
          <a href="#contact">
            <span className="material-icons-outlined md-36">
              email
            </span>
          </a>
          <span className="navigator__tooltip">Contact</span>
        </li>
      </ul>
    </nav>

  );
}

export default Navigator;

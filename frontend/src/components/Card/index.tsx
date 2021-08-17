/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './Card.scss';

function Card() {
  return (
    <div className="card">
      <img className="card__image" alt="Laura Sabater" src="lauraSabater.jpeg" />
      <span className="card__name">{RESUME_DATA.name.toUpperCase()}</span>
      <span className="card__profession">{RESUME_DATA.profession}</span>
      <div className="card__icons">
        <a href="https://github.com/Laura-SM" target="_blank" aria-label="github-link" title="Laura's gitHub" rel="noreferrer">
          <i className="fab fa-github fa-lg" />
        </a>
        <a href="https://linkedin.com/in/laura-sabater-musach" target="_blank" aria-label="linkedin-link" title="Laura's linkedIn" rel="noreferrer">
          <i className="fab fa-linkedin fa-lg" />
        </a>
      </div>
    </div>
  );
}

export default Card;

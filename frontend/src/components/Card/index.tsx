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
        <i className="fab fa-github fa-lg" />
        <i className="fab fa-linkedin fa-lg" />
      </div>
    </div>
  );
}

export default Card;

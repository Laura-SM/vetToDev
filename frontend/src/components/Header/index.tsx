import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <span className="logo">vetToDev</span>
      <ul className="top-nav">
        <li className="top-nav__item">home</li>
        <li className="top-nav__item">blog</li>
      </ul>
    </header>
  );
}

export default Header;

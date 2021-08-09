import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <span className="logo">vetToDev</span>
      <ul className="topNavigator">
        <li className="topNavigator__item">home</li>
        <li className="topNavigator__item">blog</li>
      </ul>
    </header>
  );
}

export default Header;

import React from 'react';
import Navigator from '../Navigator';
import './style.scss';

function Header() {
  return (
    <>
      <header className="header">
        <span className="header__logo">vetToDev</span>
      </header>
      <div className="header__navigator">
        <Navigator />
      </div>
    </>
  );
}

export default Header;

import React from 'react';
import LateralNavigator from '../LateralNavigator';
import './style.scss';

function Header() {
  return (
    <>
      <header className="header">
        <span className="header__logo">vetToDev</span>
      </header>
      <div className="header__navigator">
        <LateralNavigator />
      </div>
    </>
  );
}

export default Header;

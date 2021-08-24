import React, { useState } from 'react';
import './style.scss';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="goToTop"
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <span className="material-icons-outlined md-30">
        arrow_upward
      </span>
    </button>
  );
}

export default ScrollToTopButton;

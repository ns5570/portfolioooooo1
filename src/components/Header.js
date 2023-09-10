import React, { useEffect } from 'react';
import './Header.css'; // Create a CSS file for your header styles

function Header() {
  const toggleDarkMode = () => {
    // Toggle dark mode logic
  };

  // Add an effect to set dark mode in local storage
  useEffect(() => {
    // Dark mode effect logic
  }, []); // Empty dependency array to run the effect only once

  // Load dark mode preference from local storage
  useEffect(() => {
    // Load dark mode preference logic
  }, []); // Empty dependency array to run the effect only once

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Nishant Singh</h1>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          Dark Mode
        </button>
        <nav className="nav">
          <ul className="nav-list-horizontal">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

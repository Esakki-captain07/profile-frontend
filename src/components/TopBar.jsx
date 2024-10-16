import React, { useState } from 'react';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="topbar">
      

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"><i class={`bi ${menuOpen? 'bi-x-lg':'bi-grid'}`}></i></div>
      </div>
    </header>
  );
};

export default TopBar;

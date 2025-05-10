import React, { useState } from 'react';
import '../style/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar my-10 bg-gray-900">
      <div className="info">
        <div className="left-info">
          <div className="image-container">
            <img src="/src/assets/photo/arjun_photo.png" alt="loading" />
          </div>
          <h1 className="text-2xl font-bold">Arjun Singh</h1>
        </div>
        <div className="menu-toggleBtn">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

      </div>


      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#">Dark Mode Toggle</a></li>
      </ul>
    </div>
  );
};

export default Header;

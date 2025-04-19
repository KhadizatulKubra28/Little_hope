import React, { useState } from 'react';
import '../Navbar/HamMenu.css';
import { Link } from 'react-router-dom';

function HamMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div id="menuToggle">
      <input type="checkbox" checked={isOpen} onChange={toggleMenu} />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu" className={isOpen ? "open" : ""}>
        <li><Link to="home" onClick={closeMenu}>Home</Link></li>
        <li><Link to="about" onClick={closeMenu}>Project</Link></li>
        <li><Link to="volunteer" onClick={closeMenu}>Volunteer</Link></li>
        <li><Link to="donation" onClick={closeMenu}>Donation</Link></li>
      </ul>
    </div>
  );
}

export default HamMenu;

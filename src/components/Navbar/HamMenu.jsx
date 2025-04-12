import React from 'react';
import '../Navbar/HamMenu.css';
import { Link } from 'react-router-dom';

function HamMenu() {
  return (
    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li><Link to="home">Home</Link></li>
        <li><Link to="about">Project</Link></li>
        <li><Link to="volunteer">Volunteer</Link></li>
        <li><Link to="donation">Donation</Link></li>
      </ul>
    </div>
  );
}

export default HamMenu;
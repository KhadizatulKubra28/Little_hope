import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import ScrollToTop from './scrollToTop';
import HamMenu from './HamMenu';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="ham-menu">
          <HamMenu />
        </div>

        <div className="main-button">
          <IconContext.Provider value={{}}>
            <Link to="home">
              <h1>Little Hope</h1>
            </Link>
          </IconContext.Provider>
        </div>

        <div className="center-buttons">
          <Link to="home"><button>Home</button></Link>
          <Link to="about"><button>Project</button></Link>
          <Link to="volunteer"><button>Volunteer</button></Link>
        </div>

        <div className="right-buttons">
          <Link to="donation">
            <button id="donate-btn">Donate Now</button>
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </nav>
  );
}

export default Navbar;
import React from 'react';
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-text">
          <img className="logo" src="assets/images/playbutton.png" alt="logo"/>
          <span className="text">YouTube</span>
      </div>
    </nav>
  );
}

export default NavBar;
import React from 'react';
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
          <img src="assets/images/playbutton.png" alt="logo"/>
          <span>YouTube</span>
      </div>
    </nav>
  );
}

export default NavBar;
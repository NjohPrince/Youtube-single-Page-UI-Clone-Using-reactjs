import React from 'react';
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-text">
        <MenuIcon className="menu-icon"/>
        <img className="logo" src="assets/images/playbutton.png" alt="logo"/>
        <span className="text">YouTube</span>
      </div>
    </nav>
  );
}

export default NavBar;
import React from 'react';
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-text">
        <MenuIcon className="menu-icon"/>
        <img className="logo" src="assets/images/playbutton.png" alt="logo"/>
        <span className="text">YouTube</span>
      </div>
      <div className="input-section">
          <input type="text" placeholder="Search"/>
          <button className="btn">
            <SearchIcon className="search-icon"/>
          </button>
      </div>
      <div className="action-section">
          
      </div>
    </nav>
  );
}

export default NavBar;
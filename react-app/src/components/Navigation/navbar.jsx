import React from 'react';
import './navbar.css'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-text">
        <MenuIcon className="menu-icon" />
        <img className="logo" src="assets/images/playbutton.png" alt="logo" />
        <span className="text">YouTube</span>
      </div>
      <div className="input-section">
        <input type="text" placeholder="Search" />
        <button className="btn">
          <SearchIcon className="search-icon" />
        </button>
        <MicIcon className="mic-icon" />
      </div>
      <div className="action-section">
        <VideoCallIcon className="video-call-icon" />
        <AppsIcon className="app-icon" />
        <NotificationsIcon className="notification-icon" />
      </div>
    </nav>
  );
}

export default NavBar;
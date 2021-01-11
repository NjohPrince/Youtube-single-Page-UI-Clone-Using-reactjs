import React from 'react';
import './staticSideBar.css'

import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

const StaticSideBar = () => {
  return (
    <div className="side-bar-container">
      <div className="link">
          <HomeIcon className="sub-link"/>
          <div className="label">Home</div>
      </div>
      <div className="link">
          <WhatshotIcon className="sub-link"/>
          <div className="label">Trending</div>
      </div>
      <div className="link">
          <SubscriptionsIcon className="sub-link"/>
          <div className="label">Subscription</div>
      </div>
      <div className="link">
          <VideoLibraryIcon className="sub-link"/>
          <div className="label">Library</div>
      </div>
    </div>
  );
}

export default StaticSideBar;
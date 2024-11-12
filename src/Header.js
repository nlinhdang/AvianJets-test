
import React, { memo } from 'react';
import searchIcon from './img/search-normal.svg';
import notiIcon from './img/notification.svg'
import userPhoto from './img/Photo.svg'
import { useAppContext } from './context/AppContext';

const Header = () => {
  const { activeMenuName } = useAppContext();

  return (
    <div className="header">
      <div className="left">
        <div className="menu-name">
          {activeMenuName}
        </div>
      </div>

      <div className="right">

        <div className="search-bar">
          <input type="text" className="search-input" placeholder='Search...' />
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
        </div>

        <div className="user-account">
          <div className="noti-container">
            <img src={notiIcon} alt="Notification Icon" className="noti-icon" />
            <span className="dot-noti-icon" />
          </div>
          <img src={userPhoto} alt="User" className="user-account-photo" />
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
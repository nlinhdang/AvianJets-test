import searchIcon from './img/search-normal.png';
import notiIcon from './img/notification.png'
import dotNotiIcon from './img/Ellipse 2.png'
import userPhoto from './img/Photo.png'
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
            <img src={dotNotiIcon} alt="A green dot on Notification" className="dot-noti-icon" />
          </div>
          <img src={userPhoto} alt="User" className="user-account-photo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
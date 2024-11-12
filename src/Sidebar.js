import { useAppContext } from './context/AppContext';
import logo from './img/Logo.png'
import menus from './data/menus'
import { ReactSVG } from 'react-svg';
const Sidebar = () => {

  const { activeIndex, setActiveIndex, setActiveMenuName } = useAppContext();

  const handleClick = (index, menuName) => {
    setActiveIndex(index === activeIndex ? null : index)
    setActiveMenuName(menuName)
  }
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="top-menu">
          {menus.map((menu, index) => (
            <div key={index} className='menu-block'>
              <div className={`${activeIndex === index ? 'active' : ''} ${menu.name}-container`}
                onClick={() => {
                  handleClick(index, menu.name)
                }}>
                <ReactSVG src={menu.icon} className='menu-icon' />
                <p className={menu.name}>{menu.name}</p>
              </div>

              <div className={`yellow-space ${activeIndex === index ? 'show' : ''}`}></div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Sidebar;
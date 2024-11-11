import logo from './img/Logo.png'
import dashboard from './img/element-3.svg'
import trans from './img/wallet-2.svg'
import wallet from './img/wallet-minus.svg'
import analytics from './img/presention-chart.svg'
import personal from './img/user.svg'
import sms from './img/sms.svg'
import setting from './img/setting-2.svg'
import { useState } from 'react'
import Dashboard from './Dashboard'
import Transactions from './Transactions'
import Wallet from './Wallet'
import Analytics from './Analytics'
import Personal from './Personal'
import Message from './Message'
import Setting from './Setting'

import { ReactSVG } from 'react-svg';


const Sidebar = ({ setActiveMenuName }) => {

  const menus = [
    {
      name: 'Dashboard',
      icon: dashboard,
      component: <Dashboard />
    },
    {
      name: 'Transactions',
      icon: trans,
      component: <Transactions />
    },
    {
      name: 'Wallet',
      icon: wallet,
      component: <Wallet />
    },
    {
      name: 'Analytics',
      icon: analytics,
      component: <Analytics />
    },
    {
      name: 'Personal',
      icon: personal,
      component: <Personal />
    },
    {
      name: 'Message',
      icon: sms,
      component: <Message />
    },
    {
      name: 'Setting',
      icon: setting,
      component: <Setting />
    }
  ]

  const [active, setActive] = useState(null)
  const handleClick = (index, menuName) => {
    setActive(index === active ? null : index)
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
              <div className={`${active === index ? 'active' : ''} ${menu.name}-container`}
                onClick={() => {
                  handleClick(index, menu.name)
                }}>
                <ReactSVG src={menu.icon} className='menu-icon' />
                <p className={menu.name}>{menu.name}</p>
              </div>

              <div className={`yellow-space ${active === index ? 'show' : ''}`}></div>

            </div>
          ))}
        </div>

      </div>

      <div className="content">
        {active !== null && menus[active].component}
      </div>
    </>
  );
}

export default Sidebar;
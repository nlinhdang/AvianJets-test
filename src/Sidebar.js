import logo from './img/Logo.png'
import dashboard from './img/element-3.png'
import trans from './img/wallet-2.png'
import wallet from './img/wallet-minus.png'
import walletTest from './img/wallet-minus.svg'

import analytics from './img/presention-chart.png'
import personal from './img/user.png'
import sms from './img/sms.png'
import setting from './img/setting-2.png'
import { useState } from 'react'
import Dashboard from './Dashboard'


const Sidebar = () => {

  const menus = [
    {
      name: 'Dashboard',
      icon: dashboard
    },
    {
      name: 'Transactions',
      icon: trans
    },
    {
      name: 'Wallet',
      icon: wallet
    },
    {
      name: 'Analytics',
      icon: analytics
    },
    {
      name: 'Personal',
      icon: personal
    },
    {
      name: 'Message',
      icon: sms
    },
    {
      name: 'Setting',
      icon: setting
    }
  ]

  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (index) => {
    setIsClicked(true)
    
  }
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="top-menu">
          {menus.map((menu, index) => (
            <div
              key={index}
              className={`${menu.name}-container`}
              onClick={() => {
                handleClick(index)
              }}
            >
              <img src={menu.icon} alt={menu.name} className={menu.icon}/>
              <p className={menu.name}>{menu.name}</p>
              
            </div>
          ))}
        </div>

        {isClicked && <Dashboard />}
      </div>

      

    
    </>
  );
}
 
export default Sidebar;
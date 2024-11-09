import logo from './img/Logo.png'
import dashboard from './img/element-3.png'
import trans from './img/wallet-2.svg'
import wallet from './img/wallet-minus.png'
import analytics from './img/presention-chart.png'
import personal from './img/user.png'
import sms from './img/sms.png'
import setting from './img/setting-2.png'
import { useState } from 'react'
import Dashboard from './Dashboard'
import Transactions from './Transactions'
import Wallet from './Wallet'
import Analytics from './Analytics'
import Personal from './Personal'
import Message from './Message'
import Setting from './Setting'


const Sidebar = () => {

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
  const handleClick = (index) => {
    setActive(index === active ? null : index)

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

              className={`menu-container ${active === index ? 'active' : ''} ${menu.name}-container`}
              onClick={() => {
                handleClick(index)
              }}>
              <img src={menu.icon} alt={menu.name} className={menu.icon} />
              <p className={menu.name}>{menu.name}</p>
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
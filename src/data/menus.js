import dashboard from '../img/element-3.svg'
import trans from '../img/wallet-2.svg'
import wallet from '../img/wallet-minus.svg'
import analytics from '../img/presention-chart.svg'
import personal from '../img/user.svg'
import sms from '../img/sms.svg'
import setting from '../img/setting-2.svg'
import Dashboard from '../Dashboard'
import Transactions from '../Transactions'
import Wallet from '../Wallet'
import Analytics from '../Analytics'
import Personal from '../Personal'
import Message from '../Message'
import Setting from '../Setting'
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

export default menus
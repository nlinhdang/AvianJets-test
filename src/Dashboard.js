import balance from './img/wallet-3.png'
import income from './img/wallet.png'
import expenses from './img/card.png'
import savings from './img/dollar-circle.png'


const Dashboard = () => {
  const dashboardItems = [
    {
      title: 'Balance',
      icon: balance,
      amount: 41210
    },
    {
      title: 'Income',
      icon: income,
      amount: 41210
    },
    {
      title: 'Expenses',
      icon: expenses,
      amount: 41210
    },
    {
      title: 'Savings',
      icon: savings,
      amount: 41210
    },
  ]
  return (
    <>
      <div className="dashboard-item-container">
        {dashboardItems.map((dashboardItem, index) => (
          <div className='dashboard-item'>
            
            <i className="dashboard-item-icon-container">
              <img src ={dashboardItem.icon} alt={dashboardItem.title} className='dashboard-item-icon' />
            </i>
            
            <div className="dashboard-item-info">
              <div className='dashboard-item-title'>
                {dashboardItem.title}
              </div>
              <div className='dashboard-item-amount'>
                ${dashboardItem.amount.toLocaleString()}
              </div>
            </div>

          </div>
          
        
        ))}
      </div>
    </>
  );
}
 
export default Dashboard;
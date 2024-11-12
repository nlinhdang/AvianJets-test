import dashboardItems from './data/dashboardItems'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-item-container">
        {dashboardItems.map((dashboardItem, index) => (
          <div className='dashboard-item'>

            <i className="dashboard-item-icon-container">
              <img src={dashboardItem.icon} alt={dashboardItem.title} className='dashboard-item-icon' />
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
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <div className="content">
          {/* <Dashboard />  */}
        </div>
      </div>
    </>
  );
}

export default App;

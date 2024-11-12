import './App.css';
import { AppProvider } from './context/AppContext';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <Sidebar />
        <Content />
      </div>
    </AppProvider>
  );
}

export default App;

import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {

  const [activeMenuName, setActiveMenuName] = useState('');

  return (
    <>
      <div className="container">
        <Header activeMenuName={activeMenuName} />
        <Sidebar setActiveMenuName={setActiveMenuName} />
      </div>
    </>
  );
}

export default App;

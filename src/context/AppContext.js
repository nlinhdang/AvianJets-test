import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [activeMenuName, setActiveMenuName] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <AppContext.Provider value={{ activeMenuName, setActiveMenuName, activeIndex, setActiveIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

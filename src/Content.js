import menus from './data/menus'
import { useAppContext } from './context/AppContext';

const Content = () => {

  const { activeIndex } = useAppContext();

  return (
    <div className="content">
      {activeIndex !== null && menus[activeIndex].component}
    </div>
  );
}

export default Content;
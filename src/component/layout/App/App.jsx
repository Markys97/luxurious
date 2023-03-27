import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Catalog from '../../../pages/Catalog/Catalog';

import './app.css'
import Home from '../../../pages/Home/Home';
function App() {
  const isDarkMode = useSelector(state=> state.setting.isDarkMode)
  let router = createBrowserRouter([
    {
      path:'/',
      element : <Home/>,  
    },
    {
      path:'/catalog',
      element : <Catalog/>,  
    },
  ])
  return (
      <div className={`app${isDarkMode? ' app--dark ':''}`}>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;

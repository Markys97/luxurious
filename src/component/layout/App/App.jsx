 import { 
    createBrowserRouter,
    RouterProvider,

  } from 'react-router-dom';
  import { useSelector } from 'react-redux';

import './app.css'
import Home from '../../../pages/Home/Home';
function App() {
  const isDarkMode = useSelector(state=> state.setting.isDarkMode)
  let router = createBrowserRouter([
    {
      path:'/',
      element : <Home/>
    },
  ])
  return (
      <div className={`app ${isDarkMode? 'app--dark':null}`}>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;

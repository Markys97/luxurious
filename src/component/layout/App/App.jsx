 import { 
    createBrowserRouter,
    RouterProvider,
    Link 
  } from 'react-router-dom';
  import { useSelector } from 'react-redux';

import './app.css'
import Index from '../Index/Index';
function App() {
  const isDarkMode = useSelector(state=> state.setting.isDarkMode)
  let router = createBrowserRouter([
    {
      path:'/',
      element : <Index/>
    },
  ])
  return (
      <div className={`app ${isDarkMode? 'app--dark':null}`}>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;

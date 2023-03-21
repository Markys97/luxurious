 import { 
    createBrowserRouter,
    RouterProvider,
    Link 
  } from 'react-router-dom';

import './app.css'
import Index from '../Index/Index';
function App() {

  let router = createBrowserRouter([
    {
      path:'/',
      element : <Index/>
    },
  ])
  return (
      <div className="app">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;

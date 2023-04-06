import { createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes
} from 'react-router-dom';
import LaoutPage from '../LaoutPage/LaoutPage';
import { useSelector } from 'react-redux';
import Catalog from '../../../pages/Catalog/Catalog';

import './app.css'
import Home from '../../../pages/Home/Home';
function App() {
  const isDarkMode = useSelector(state=> state.setting.isDarkMode)
  let router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<LaoutPage/>}>
      <Route index element={<Home/>} />
      <Route path='catalog' element={<Catalog/>}/>
      <Route path='brands' element={<Catalog/>}/>
  </Route>
 )
  )
  return (
      <div className={`app${isDarkMode? ' app--dark ':''}`}>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;

// [
//   {
//     path:'/',
//     children:[
//       {
//         index:true,
//         path:'home',
//         element : <Home/>,
//       },
//       {
//         path:'catalog',
//         element : <Catalog/>, 
//       }
//     ]
//   },

// ]

import { useEffect } from 'react';
import { createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LaoutPage from '../LaoutPage/LaoutPage';
import { useSelector } from 'react-redux';
import Catalog from '../../../pages/Catalog/Catalog';
import './app.css'
import Home from '../../../pages/Home/Home';
function App() {
  // useEffect(function(){
  //   fetch('https://luxurious-server.onrender.com/listProduct')
  //   .then(res => res.json())
  //   .then(res=> console.log(res))
  // },[])
  const isDarkMode = useSelector(state=> state.setting.isDarkMode)
  let router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<LaoutPage/>}>
      <Route index element={<Home/>} />

      <Route  path='catalog' element={<Catalog/>}>
          <Route path=':filtre' element={<Catalog/>} />
      </Route>
      <Route path='brands' element={<Catalog/>}>
        <Route path=':category' element={<Catalog/>} />
      </Route>
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



import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AllProducts from './pages/AllProducts/AllProducts';
import Registro from './pages/Registro/Registro';
import Product from './pages/BuyProduct/BuyProduct';


function RouterJsx() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' index element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/register' element={<Registro />} />
        <Route path='/produtos' element={<AllProducts />}/>

        <Route  path='/produtos/prod' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterJsx

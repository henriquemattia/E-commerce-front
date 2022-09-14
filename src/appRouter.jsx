import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';

// Parte dos produtos
import AllProducts from './pages/AllProducts/AllProducts';
import Product from './pages/BuyProduct/BuyProduct';
//produtos individuais
import Masculino from './pages/Sessions/Masculino/Masculino';
import Feminino from './pages/Sessions/Feminino/Feminino';
import Infaltil from './pages/Sessions/Infaltil/Infantil';
import Esportes from './pages/Sessions/Esportes/Esportes';
// sub pages
import BuyMascu from './pages/Sessions/Masculino/BuyMascu';



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' index element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/register' element={<Registro />} />
         
             {/* PRODUTOS */}
        <Route path='/masculino' element={<Masculino />}/>
        <Route path='/feminino' element={<Feminino/>}/>
        <Route path='/esportes' element={<Infaltil />}/>
        <Route path='/infantil' element={<Esportes />}/>


        <Route path='/produtos' element={<AllProducts />}/>
        


        {/* <Route  path='/produtos/:id' element={<Product/>} /> */}
        <Route  path='/:categoria/:id' element={<Product/>} />
        {/* <Route  path='/masculino/:id' element={<BuyMascu />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

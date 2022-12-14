import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Login e registro
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import Sair from './components/Sair/Sair';

// Parte dos produtos
import AllProducts from './pages/AllProducts/AllProducts';
import Product from './pages/BuyProduct/BuyProduct';

//produtos individuais
import Masculino from './pages/Sessions/Masculino/Masculino';
import Feminino from './pages/Sessions/Feminino/Feminino';
import Calcados from './pages/Sessions/Calcados/Calcados';
import Acessorios from './pages/Sessions/Acessorios/Acessorios';

//Carrinho
import Cart from './pages/Cart/Cart';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' index element={<Home />} />

                {/* LOGIN E REGISTRO */}
        <Route  path='/login' element={<Login />} />
        <Route  path='/register' element={<Registro />} />
        <Route  path='/logout' element={<Sair />} />
        
         
                {/* PRODUTOS POR CATEGORIA*/}
        <Route path='/masculino' element={<Masculino />}/>
        <Route path='/feminino' element={<Feminino />}/>
        <Route path='/acessorios' element={<Acessorios />}/>
        <Route path='/calcados' element={<Calcados />}/>

                {/* TODOS OS PRODUTOS */}
        <Route path='/produtos' element={<AllProducts />}/>
        

                {/* PAGINA DE COMPRA DE PRODUTO */}
        <Route path='/:category/:route' element={<Product/>} />
        <Route path='/carrinho' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

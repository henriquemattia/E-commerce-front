import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';


function RouterJsx() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' index element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/register' element={<Registro />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouterJsx

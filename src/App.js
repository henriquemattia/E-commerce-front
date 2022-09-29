import React from 'react';


import AppRouter from './appRouter';
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <>
    <CartProvider>
    <AppRouter>
    
    </AppRouter>
      </CartProvider>
    
    </>
  )
}

export default App

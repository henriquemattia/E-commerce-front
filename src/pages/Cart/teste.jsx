import React from 'react';
import Topbar from '../../components/NavBar/NavBar';
import Post from '../../components/Posts/Post/Post';

import Card from 'react-bootstrap/Card'


import './style.css';
import { useCart } from 'react-use-cart';

function Cart() {


  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

    // CARRINHO VAZIO
  if (isEmpty) {
    return (
      <>
        <Topbar />
        <p>Your cart is empty</p>
        <h1>va comrpar mais coisas, ATGOR!!</h1>
      </>

    );
  }
    // CARRINHO COM ALGUMA COISA DENTRO 
  return (
    <>
      <Topbar />

      <div className='container_body'>

        <h1>Total de itens no carrinho ({totalUniqueItems})</h1>

        <ul>
          {items.map((item) => (

            <li key={item.id}>
              <h2>{item.nome}</h2>
              <h3>{item.quantity}</h3>
              <Card.Img src={item.img_main} alt="" />
              <h2>{item.price}</h2>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>

            </li>
            
          ))}
          <h3>{cartTotal}</h3>

        </ul>

      </div>

    </>
  );
}

export default Cart;
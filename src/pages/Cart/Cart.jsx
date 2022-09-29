import React from 'react';
import Topbar from '../../components/NavBar/NavBar';
import Post from '../../components/Posts/Post/Post';


import './style.css';
import { useCart } from 'react-use-cart';

function Cart() {


  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty){
     return (
      <>
      <Topbar />
      <p>Your cart is empty</p>
     <h1>va comrpar mais coisas, ATGOR!!</h1>
      </>
     
     );
    }

  return (
    <>
    <Topbar />
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          
          <li key={item.id}>
            <h2>{item.nome}</h2>
            <h3>{item.quantity}</h3>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
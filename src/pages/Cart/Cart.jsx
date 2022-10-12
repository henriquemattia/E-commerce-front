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
        <h1>CARRINHO</h1>
        <div className='container_produtos'>
            {items.map((prod) => {
              const price = prod.price
              const price_correct = price.toString().replace(".", ",")
  
              // const desc_price = prod.desc_price
              // const desc_price_correct = desc_price.toString().replace(".", ",")
  
              return (
              <>
              

                <div key={prod.id} className='contianer_main'>
                  <div className='left_content'>
                    <img className='product_image' src={prod.img_main} alt="" />
                  </div>
                  <div className='center_content'>
                    <p>{prod.name}</p>
                    <p>1x de <span>{price_correct}</span></p>
                  </div>
                  <div className='rigth_content'>
                      <button className='close_button' onClick={() => removeItem(prod.id)}>&times;</button>
                    <div className='button_content'>
                      <button className='button_quantity' onClick={() => updateItemQuantity(prod.id, prod.quantity + 1)}> + </button>
                      <p>{prod.quantity}</p>
                      <button className='button_quantity' onClick={() => updateItemQuantity(prod.id, prod.quantity - 1)}> - </button>
                    </div>
                  </div>
                </div>
              </>

              )

            })}

        </div>



      </div>

    </>
  );
}

export default Cart;
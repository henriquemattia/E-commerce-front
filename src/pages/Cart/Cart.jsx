import React from 'react';
import Topbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import './style.css';
import { useCart } from 'react-use-cart';
import Container from 'react-bootstrap/esm/Container';

import { useNavigate } from 'react-router-dom'


function Cart() {
  const navigate = useNavigate()


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
        <Container>
          <Topbar />
          <div className='container_body'></div>
          <h1 className='cart_empty'>Seu carrinho está vazio :( </h1>
          <div className='cart_desc'>
            <h5 className='cart_title' >TOTAL NO CARRINHO</h5>

            <div className='cart_subtotal'>
              <span style={{ color: 'gray' }}>Subtotal</span><span>R$ {Math.round(cartTotal)},00</span>
            </div>

            <div className='cart_entrega'>
              <span>Entrega</span><span>Calcular entrega</span>
            </div>

            <div className='cart_total'>
              <span style={{ color: 'gray' }}>Total</span><span>R$ {Math.round(cartTotal)},00</span>
            </div>
          </div>
          <div className='container_button'>
            <button className='button_finish' onClick={() => { navigate('/') }}>IR PARA AS COMPRAS</button>
          </div>

        </Container>
        <Footer />
      </>


    );
  }
  return (
    <>
      <Topbar />

      <div className='container_body'>
        <h1>CARRINHO</h1>
        <div className='container_produtos'>
          {items.map((prod) => {
            const price = prod.price
            const price_correct = price.toString().replace(".", ",")
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
        <div className='cart_desc'>
          <h5 className='cart_title' >TOTAL NO CARRINHO</h5>

          <div className='cart_subtotal'>
            <span style={{ color: 'gray' }}>Subtotal</span><span>R$ {Math.round(cartTotal)},00</span>
          </div>

          <div className='cart_entrega'>
            <span>Entrega</span><span>Calcular entrega</span>
          </div>

          <div className='cart_total'>
            <span style={{ color: 'gray' }}>Total</span><span>R$ {Math.round(cartTotal)},00</span>
          </div>
        </div>
        <div className='container_button'>
          <button className='button_finish'>FINALIZAR COMPRA</button>
        </div>

      </div>
      <Footer />

    </>
  );
}

export default Cart;
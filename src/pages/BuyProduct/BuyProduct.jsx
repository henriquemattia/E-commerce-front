import React, { useState, useEffect } from 'react';

//Styles
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image'
import './styles.css'

//Components
import Topbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';

//API / use cart
import { api } from '../../services/api/Api';
import { useCart } from 'react-use-cart';



function Product() {

  const navigate = useNavigate()
  const [dest, setDest] = useState([])
  const [prod, setProd] = useState([])
  const parms = useParams()
  const { addItem } = useCart();


  const getProduts = async () => {
    try {
      const url = '/produtos'
      const res = await api.get(url)
      setDest(res.data.dados);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getProduts()
    return 
  }, [])

  useEffect(() => {
    dest.map((nam) => {
      if (nam.route == parms.route) {
        setProd(nam)
      }
    }
    )
  }, [dest])

  //// LÓGICA PARA TROCA DE FOCO DE PRODUTO
  const [imagemPrincipal, setImagemPrincipal] = useState([])

  useEffect(() => {
    setImagemPrincipal(prod.img_main)
  }, [prod])

  ///// LÓGICA PARA ADICIONAR MAIS UM PORODUTO
  const [qntProd, setQntProd] = useState(0)

  useEffect(() => {
    setQntProd(1)
  }, [])

  return (
    <>
      <div className='all'>
        <Topbar />

        <Container>
          <Image src={imagemPrincipal} alt={prod.alt_img} className='imagem1' />
          <Row xs={5}>
            <Col><Image src={prod.img_main} alt={prod.alt_img} className='abaixo' onClick={() => { setImagemPrincipal(prod.img_main) }} /></Col>
            <Col><Image src={prod.img_front} alt={prod.alt_img} className='abaixo' onClick={() => { setImagemPrincipal(prod.img_front) }} /></Col>
            <Col><Image src={prod.img_right} alt={prod.alt_img} className='abaixo' onClick={() => { setImagemPrincipal(prod.img_left) }} /></Col>
            <Col><Image src={prod.img_left} alt={prod.alt_img} className='abaixo' onClick={() => { setImagemPrincipal(prod.img_right) }} /></Col>
            <Col><Image src={prod.img_back} alt={prod.alt_img} className='abaixo' onClick={() => { setImagemPrincipal(prod.img_back) }} /></Col>
          </Row>
        </Container>

        <Container>
          <h2 className='name'>{prod.name}</h2>
          <div className='divisor cinza'></div>
          <div className='prices'>
            <span className='tamanho price text-cinza'>R$ {prod.price}</span>
            <span className='tamanho desc_price' >R$ {prod.desc_price}</span>
          </div>

          <p className='text-cinza description'>Ultimas únidades desse modelo aproveite!</p>
        </Container>
        <div>
          <div className='buy-area'>
            <div className='mais-e-menos'>
              <button className='branco text-cinza' onClick={() => { 

               if (qntProd == 1) {
                  setQntProd(1)
                } else {
                  let sub = qntProd - 1
                setQntProd(sub)
                }


                 }} >-</button>

                <span>{qntProd}</span>
              <button className='branco text-cinza'onClick={() => {

                if (qntProd == 10) {
                  setQntProd(10)
                } else {
                  let sum = qntProd + 1
                setQntProd(sum)

                }

                 }}>+</button>


            </div>
            <button className='buy-btn' onClick={() => {
              addItem(prod)
              navigate("/carrinho")
            }
          }>COMPRAR</button>
          </div>
        </div>
        <br />
        <Container>
          <strong>CALCULE O VALOR DO FRETE</strong>
        </Container>
        <div>
          <div className='cep-area'> 
              <div className='cep-value text-cinza'>
                <span>00000-000</span>
              </div>
              <button className='calc-btn'>CALCULAR</button>
            </div>
        </div>
        <Container>
          <p className='sub-description text-cinza'>SKU: {prod.sku}</p>
          <p className='sub-description text-cinza'>Categoria: {prod.category}</p>
          <p className='sub-description text-cinza'>TAG: Lançamentos</p>

        </Container>
        <br />
        <Footer />

      </div>


    </>



  )

}

export default Product;
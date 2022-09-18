import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Topbar from '../../components/NavBar/NavBar';
import Image from 'react-bootstrap/Image'

import './styles.css'
import axios from 'axios';

import camiseta from '../../images/products/camisetao-laranja.webp'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';




function Product() {
  const [dest, setDest] = useState([])
  const [prod, setProd] = useState([])

  const getProduts = async () => {
    try {
      const url = 'http://127.0.0.1:5000/produtos'
      const res = await axios.get(url)
      setDest(res.data.dados);
      console.log(res.data.dados);
      //  console.log(res.data.dados);
      //  console.log(res.data.dados);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduts()
    console.log('componetne construido');
    return () => {
      console.log('destruido');
    }
  }, [])

  const parms = useParams()
  dest.find((p) => p.rota === parms.id)

  useEffect(() => {
    dest.map((nam) => {
      if (nam.rota == parms.id) {
        console.log(nam)

        setProd(nam)
      }
    }
    )
  }, [dest])
  // console.log(prod)


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
          <Image src={imagemPrincipal} alt="homerm" className='imagem1' />
          <Row xs={5}>
            <Col><Image src={prod.img_main} alt="homerm" className='abaixo' onClick={() => { setImagemPrincipal(prod.img_main) }} /></Col>
            <Col><Image src={prod.img_front} alt="homerm" className='abaixo' onClick={() => { setImagemPrincipal(prod.img_front) }} /></Col>
            <Col><Image src={prod.img_left} alt="homerm" className='abaixo' onClick={() => { setImagemPrincipal(prod.img_right) }} /></Col>
            <Col><Image src={prod.img_right} alt="homerm" className='abaixo' onClick={() => { setImagemPrincipal(prod.img_left) }} /></Col>
            <Col><Image src={prod.img_back} alt="homerm" className='abaixo' onClick={() => { setImagemPrincipal(prod.img_back) }} /></Col>
          </Row>
        </Container>

        <Container>
          <h2 className='name'>{prod.nome}</h2>
          <div className='divisor cinza'></div>
          <div className='prices'>
            <span className='tamanho desc_price text-cinza'>R$ {prod.desc_preco}</span>
            <span className='tamanho price' >R$ {prod.preco}</span>
          </div>

          <p className='text-cinza description'>Ultimas únidades desse modelo aproveite!</p>
        </Container>
        <div>
          <div className='buy-area'>
            <div className='mais-e-menos'>
              <button className='branco text-cinza' onClick={() => { 
                let sub = qntProd - 1
                setQntProd(sub) }} >-</button>

                <span>{qntProd}</span>
              <button className='branco text-cinza'onClick={() => {
                let sum = qntProd + 1
                setQntProd(sum) }}>+</button>
            </div><button className='buy-btn'>COMPRAR</button>
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
          <p className='sub-description text-cinza'>SKU: 2938472874-AZUL</p>
          <p className='sub-description text-cinza'>Categoria: {prod.categoria}</p>
          <p className='sub-description text-cinza'>TAG: Lançamentos</p>

        </Container>
        <br />
        <Footer />

      </div>


    </>



  )

}

export default Product;
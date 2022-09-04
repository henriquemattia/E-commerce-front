import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Topbar from '../../components/NavBar/NavBar';
import Image from 'react-bootstrap/Image'

import './styles.css'

import camiseta from '../../images/products/camisetao-laranja.webp'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';


function Product() {

  const [ produtos, setProdutos ] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data))
      }, [])

  const parms = useParams()
      console.log(parms.id);

  const producttt = produtos.find((p)=> p.rota === parms.id)
  console.log(producttt);


  return (
    <>
    <Topbar />
    <Container>
    <Image src={camiseta} alt="homerm" className='imagem1'/>
    <Row>
      <Col><Image src={camiseta} alt="homerm" className='abaixo'/></Col>
      <Col><Image src={camiseta} alt="homerm" className='abaixo'/></Col>
      <Col><Image src={camiseta} alt="homerm" className='abaixo'/></Col>
      <Col><Image src={camiseta} alt="homerm" className='abaixo'/></Col>
    </Row>
    </Container>

    <Container>
      <h2 className='name'>{producttt?.name}</h2>
      <span className='tamanho desc_price'>R$ 369</span> 
      <span className='tamanho price ' > R$ 184,50</span>
      <p>Ultimas unidades desse modelo aproveite</p>
    </Container>
    <Container>
      <span><button> - 1 + </button> <button>COMPRAR</button></span>
    </Container>
    <br />
    <Container>
      <p>CALCULE O VALOR DO FRETE</p>
      <span><button>00000-000</button> <button>CALCULAR</button></span>
    </Container>
    <br />
    <Footer />
    
    </>
  )
}
export default Product;
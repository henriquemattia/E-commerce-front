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

  const [produtos, setProdutos] = useState([])
  const [prodMascu, setProdMascu] = useState([])
  const [prodfemi, setProdfemi] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data))
  }, [])

  const parms = useParams()

  produtos.find((p) => p.rota === parms.id)
  useEffect(() => {
    produtos.map((nam) => {
      if (nam.masculino.rota == parms.id) {
        setProdMascu(nam.masculino)
      }
      else if (nam.feminino.rota == parms.id) {
        setProdfemi(nam.feminino)
      }
      else return console.log('erro aqui')
    }
    )
  }, [produtos])
  // console.log(prodMascu, "masculino");
  // console.log(prodfemi, "feminino");


  return (
    <>
      <Topbar />
      <Container>
        <Image src={camiseta} alt="homerm" className='imagem1' />
        <Row>
          <Col><Image src={camiseta} alt="homerm" className='abaixo' /></Col>
          <Col><Image src={camiseta} alt="homerm" className='abaixo' /></Col>
          <Col><Image src={camiseta} alt="homerm" className='abaixo' /></Col>
          <Col><Image src={camiseta} alt="homerm" className='abaixo' /></Col>
        </Row>
      </Container>

      <Container>
        <h2 className='name'>{prodMascu.name || prodfemi.name}</h2>
        <span className='tamanho desc_price'>{prodMascu.valorDesc || prodfemi.valorDesc}</span>
        <span className='tamanho price ' >{prodMascu.valor || prodfemi.valor}</span>
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
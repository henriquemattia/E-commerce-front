import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Topbar from '../../../components/NavBar/NavBar';
import Image from 'react-bootstrap/Image'

// import './styles.css'

import camiseta from '../../../images/products/camisetao-laranja.webp'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from '../../../components/Footer/Footer';
import { useParams } from 'react-router-dom';


function ProdMascu() {

  const [all, setAll] = useState([])
  const [prodMasculi, setProdMasculi] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/masculino')
      .then(res => res.json())
      .then(data => setAll(data))
  }, [])

  const parms = useParams()

  all.find((p) => p.rota === parms.id)
  useEffect(() => {
    all.map((nam) => {
        setProdMasculi(nam)
      }
    )
  }, [all])


  return (
    <div className='all'>
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
        <h2 className='name'>{prodMasculi.name}</h2>
        <div className='divisor cinza'></div>
        <div className='prices'>
          <span className='tamanho desc_price text-cinza'>{prodMasculi.valorDesc}</span>
          <span className='tamanho price' >{prodMasculi.valor}</span>
        </div>
        
        <p className='text-cinza description'>Ultimas únidades desse modelo aproveite!</p>
      </Container>
      <div>
        <div className='buy-area'> <div className='mais-e-menos'><button className='branco text-cinza'>-</button><span>1</span><button className='branco text-cinza'>+</button> </div><button className='buy-btn'>COMPRAR</button></div>
      </div>
      <br />
      <Container>
        <strong>CALCULE O VALOR DO FRETE</strong>
      </Container>
      <div>
        <div className='cep-area'> <div className='cep-value text-cinza'><span>00000-000</span></div><button className='calc-btn'>CALCULAR</button></div>
      </div>
      <Container>
        <p className='sub-description text-cinza'>SKU: 2938472874-AZUL</p>
        <p className='sub-description text-cinza'>Categoria: Roupas</p>
        <p className='sub-description text-cinza'>TAG: Lançamentos</p>
        
      </Container>
      <br />
      <Footer />

    </div>
  )
}
export default ProdMascu;
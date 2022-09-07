import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../images/products/camisetao-laranja.webp'
import Molde from './Molde/Molde'

import Topbar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

import './styles.css'


//colcoar tudo dentro de uma vide para tentar alinhar tudo confome vai almentando a tela
//ver soibre RATIO opara as imagens respoeotarem um tanmanho


 function AllProducts() {

  const [ produtos, setProdutos ] = useState([])
  // const [ prodM, setProdM] = useState([])
  // const [ prodF, setProdF] = useState([])

  



   useEffect (()=>{
    async function fetchData(){
    await fetch('http://127.0.0.1:5000/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data))}
      fetchData()
      }, [])//deixando vazio o componente será atualizado somente uma vez "quando a pagina for carregada", entao nao importa qunatas vezs nossa variavel for alterada ele nao vai usar o useEffect! 

      //       },[produtos])
  
    return(
    <>
      <Topbar />
      <br />
      <br />
      <br />
        <Container>
        <Row>
        {produtos.map((prod) => {
            return (
              <Molde 
              key={prod.masculino}
              image={camisa}
              name={prod.masculino.name}
              valor={prod.masculino.valor}
              route={<Link className='tag-a'to={`/produtos/${prod.masculino.rota}`}>COMPRAR</Link>}
              />
            )  
          })}
          
        {produtos.map((prod) => {
            return (
              <Molde 
              key={prod.feminino}
              image={camisa}
              name={prod.feminino.name}
              valor={prod.feminino.valor}
              route={<Link className='tag-a'to={`/produtos/${prod.feminino.rota}`}>COMPRAR</Link>}
              />
            )  
          })}
          </Row>
      </Container>

    </>
  )
}


export default AllProducts;
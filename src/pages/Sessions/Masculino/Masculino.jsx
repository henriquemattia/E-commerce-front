import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../../images/products/camisetao-laranja.webp'
import Molde from '../../AllProducts/Molde/Molde'

import Topbar from '../../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

// import './styles.css'


//colcoar tudo dentro de uma vide para tentar alinhar tudo confome vai almentando a tela
//ver soibre RATIO opara as imagens respoeotarem um tanmanho


 function Masculino() {

  const [ masculino, setMasculino ] = useState([])
  // const [ prodM, setProdM] = useState([])
  // const [ prodF, setProdF] = useState([])

  



   useEffect (()=>{
    async function fetchData(){
    await fetch('http://127.0.0.1:5000/masculino')
      .then(res => res.json())
      .then(data => setMasculino(data))}
      fetchData()
      }, [])//deixando vazio o componente será atualizado somente uma vez "quando a pagina for carregada", entao nao importa qunatas vezs nossa variavel for alterada ele nao vai usar o useEffect! 

  
    return(
    <>
      <Topbar />
      <br />
      <br />
      <br />
        <Container>
        <Row>
        {masculino.map((prod, index) => {
            return (
              <Molde 
              key={index}
              image={camisa}
              name={prod.name}
              valor={prod.valor}
              route={<Link className='tag-a'to={`/masculino/${prod.rota}`}>COMPRAR</Link>}
              />
            )  
          })}
          </Row>
      </Container>

    </>
  )
}


export default Masculino;
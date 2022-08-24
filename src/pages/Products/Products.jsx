

import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../images/products/camisetao-laranja.webp'
import Produt from './Produt/Produt'

import './styles.css'

// const produtos = [
//   {
//     image: camisa,
//     valor: 344,
//     name: "moletom"
//   },
//   {
//     image: camisa,
//     valor: 777,
//     name: "calça"
//   },
//   {
//     image: camisa,
//     valor: 25.99,
//     name: "camiseta"
//   },
//   {
//     image: camisa,
//     valor: "35,99 R$",
//     name: "bermudas"
//   }
// ]



// const produtos = [
//   { masculino: {
//       image: camisa,
//       valor: 344,
//       name: "moletom"
//   },
//   feminino: {
//     image: camisa,
//     valor: 224,
//     name: "calça"
// }
//   }
// ]

//colcoar tudo dentro de uma vide para tentar alinhar tudo confome vai almentando a tela
//ver soibre RATIO opara as imagens respoeotarem um tanmanho


function Products() {

  const [ produtos, setProdutos ] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data))
      }, []) //deixando vazio o componente será atualizado somente uma vez "quando a pagina for carregada", entao nao importa qunatas vezs nossa variavel for alterada ele nao vai usar o useEffect! 

  return (
    <>
      <Container>
        <Row>
          {produtos.map((prod) => {
            return (
              <Produt 
              key={prod.masculino}
              image={camisa}
              valor={prod.masculino.valor}
              name={prod.masculino.name}
              />
            )  
          })}
          {produtos.map((prod) => {
            return (
              <Produt 
              key={prod.feminino}
              image={camisa}
              valor={prod.feminino.valor}
              name={prod.feminino.name}
              />
            )  
          })}
          
        </Row>
      </Container>

    </>
  )
}


export default Products;
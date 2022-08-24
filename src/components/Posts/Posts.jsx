import React from 'react';

import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../images/products/camisetao-laranja.webp'
import Post from './Post/Post'

import './styles.css'
import { Link } from 'react-router-dom';

const produtos = [
  {
    image: camisa,
    valor: 344,
    name: "moletom"
  },
  {
    image: camisa,
    valor: 777,
    name: "calça"
  },
  {
    image: camisa,
    valor: 25.99,
    name: "camiseta"
  },
  {
    image: camisa,
    valor: "35,99 R$",
    name: "bermudas"
  }
]
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


function Posts() {
  return (
    <>
      <Container>
        <Link to='/produtos/prod' className='tag-a'>
        <Row>
          {produtos.map((prod, index) => {
            return (
              <Post 
              key={index}
              image={prod.image}
              valor={prod.valor}
              name={prod.name}
              />
            )  
          })}
        </Row>
        </Link>
      </Container>

    </>
  )
}


export default Posts;
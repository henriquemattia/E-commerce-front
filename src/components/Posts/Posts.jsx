import React, { useState, useEffect } from 'react';

import axios from 'axios'

import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../images/products/camisetao-laranja.webp'
import Post from './Post/Post'

import './styles.css'
import { Link } from 'react-router-dom';

import { api } from '../../services/api/Api';

function Posts() {

  const [dest, setDest] = useState([])

  const getProduts = async () => {
    try {
      const url = '/destaque'
      const res = await api.get(url)
       setDest(res.data.dados);
       console.log(res.data.dados);
      //  console.log(res.data.dados);
    } catch (err) {
      console.log(err);
    }
  }
  



    useEffect(()=>{
      getProduts()
       return 
       //()=>{
    //     console.log('destruido');
    // }
    },[])
    //ver soibre RATIO opara as imagens respoeotarem um tanmanho
  return (
    <>
      <Container>
        <Row>
          {dest.map((prod) => {
            const price = prod.price
            const price_correct = price.toString().replace(".", ",")

            const desc_price = prod.desc_price
            const desc_price_correct = desc_price.toString().replace(".", ",")



            return (
              <Post 
              key={prod.id}
              category={prod.category}
              name={prod.name}
              price={price_correct}
              desc_price={desc_price_correct}
              image={prod.img_main}
              route={prod.route}
              />
            )  
          })}
        </Row>
      </Container>

    </>
  )
}


export default Posts;
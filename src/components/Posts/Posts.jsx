import React, { useState, useEffect } from 'react';

import axios from 'axios'

import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../images/products/camisetao-laranja.webp'
import Post from './Post/Post'

import './styles.css'
import { Link } from 'react-router-dom';


function Posts() {

  const [dest, setDest] = useState([])

  const getProduts = async () => {
    try {
      const url = 'http://127.0.0.1:5000/destaque'
      const res = await axios.get(url)
       setDest(res.data.dados);
      //  console.log(res.data.dados);
    } catch (err) {
      console.log(err);
    }
  }


    useEffect(()=>{
      getProduts()
      console.log('componetne construido'); 
      return ()=>{
        console.log('destruido');
    }
    },[])
    //ver soibre RATIO opara as imagens respoeotarem um tanmanho
  return (
    <>
      <Container>
        <Link to='/produtos/camisa1' className='tag-a'>
        <Row>
          {dest.map((prod, index) => {
            return (
              <Post 
              key={index}
              name={prod.nome}
              valor={prod.price}
              image={camisa}
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
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import camisa from '../../../images/products/camisetao-laranja.webp'

import Topbar from '../../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import Post from '../../../components/Posts/Post/Post';

import axios from 'axios';
import { api } from '../../../services/api/Api';

// import './styles.css'


//colcoar tudo dentro de uma vide para tentar alinhar tudo confome vai almentando a tela
//ver soibre RATIO opara as imagens respoeotarem um tanmanho


 function Masculino() {

  const [masculino, setMasculino] = useState([])

  const getProduts = async () => {
    try {
      const url = '/masculino'
      const res = await api.get(url)
      // console.log(res);
       setMasculino(res.data.dados);
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
              <Post 
              key={index}
              category={prod.category}
              name={prod.name}
              price={prod.price}
              desc_price={prod.desc_price}
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


export default Masculino;
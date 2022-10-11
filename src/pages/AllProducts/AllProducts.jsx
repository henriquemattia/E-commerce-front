import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';



// import Molde from './Molde/Molde'

import Topbar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

import Post from '../../components/Posts/Post/Post';
import './styles.css'
import { api } from '../../services/api/Api';


//colcoar tudo dentro de uma vide para tentar alinhar tudo confome vai almentando a tela
//ver soibre RATIO opara as imagens respoeotarem um tanmanho


 function AllProducts() {

  const [dest, setDest] = useState([])

  const getProduts = async () => {
    try {
      const url = '/produtos'
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
        {dest.map((prod, index) => {
            return (
              <Post 
              key={index}
              categoria={prod.categoria}
              name={prod.nome}
              valor={prod.preco}
              desc_valor={prod.desc_preco}
              image={prod.img_main}
              rota={prod.rota}
              />
            )  
          })}
          </Row>
      </Container>

    </>
  )
}


export default AllProducts;
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import Topbar from '../../../components/NavBar/NavBar';
import Post from '../../../components/Posts/Post/Post';
import Footer from '../../../components/Footer/Footer';

import { api } from '../../../services/api/Api';

//colcoar tudo dentro de uma vide para tentar alinhar tudo confome vai almentando a tela
//ver soibre RATIO opara as imagens respoeotarem um tanmanho


function Feminino() {

  const [feminino, setFeminino] = useState([])

  const getProduts = async () => {
    try {
      const url = '/feminino'
      const res = await api.get(url)
      // console.log(res);
      setFeminino(res.data.dados);
      //  console.log(res.data.dados);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getProduts()
    console.log('componetne construido');
    return () => {
      console.log('destruido');
    }
  }, [])
  return (
    <>
      <Topbar />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          {feminino.map((prod, index) => {
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
      <Footer />
    </>
  )
}


export default Feminino;
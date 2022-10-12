import React, { useState, useEffect } from 'react';

//Styles
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

//Components
import Topbar from '../../components/NavBar/NavBar';
import Post from '../../components/Posts/Post/Post';
import Footer from '../../components/Footer/Footer';

//API
import { api } from '../../services/api/Api';


function AllProducts() {

  const [produtos, setprodutos] = useState([])

  const getProduts = async () => {
    try {
      const url = '/produtos'
      const res = await api.get(url)
      setprodutos(res.data.dados);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getProduts()
    return
  }, [])
  return (
    <>
      <Topbar />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          {produtos.map((prod, index) => {
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


export default AllProducts;
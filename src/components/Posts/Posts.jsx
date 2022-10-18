import React, { useState, useEffect } from 'react';

//Styles
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

//Sub-componente
import Post from './Post/Post'

//Api
import { api } from '../../services/api/Api';

function Posts() {

  const [dest, setDest] = useState([])

  const getProduts = async () => {
    try {
      const url = '/destaque'
      const res = await api.get(url)
       setDest(res.data);
    } catch (err) {
      console.log(err);
    }
  }

    useEffect(()=>{
      getProduts()
       return 
    },[])
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
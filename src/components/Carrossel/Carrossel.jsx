import Carousel from 'react-bootstrap/Carousel';

import criancas from '../../images/carrossel/criancas-1.jpeg'
import homens from '../../images/carrossel/homen-1.jpeg'
import mulher from '../../images/carrossel/mulher-1.jpeg'


import './styles.css'


function Carrossel () {
    return (
        <Carousel className='mt'>

          <Carousel.Item className='gg'>
            <img
              className="d-block w-100"
              src={mulher}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='titulo-1'>Promoção Moda Feminina</h3>
              <p>Toda a moda Inverno/Verão Femenina você encontra aqui!</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item className='gg'>
            <img
              className="d-block w-100"
              src={homens}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Moda Masculina</h3>
              <p>De moda esportiva a moda EXECUTIVA</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item className='gg'>
            <img
              className="d-block w-100"
              src={criancas}
              alt="Third slide"
            />
    

            <Carousel.Caption>
              <h3>Moda infantil 2022</h3>
              <p>
                As melhores roupas para seu filho se divertir!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default Carrossel;
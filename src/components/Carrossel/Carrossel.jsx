import Carousel from 'react-bootstrap/Carousel';

import Masculino from '../../images/carrossel/masculino-carrossel.jpg'
import Feminino from '../../images/carrossel/feminino-carrossel.jpg'
import Acessorios from '../../images/carrossel/acessorios-carrossel.jpg'


import './styles.css'


function Carrossel () {
    return (
        <Carousel className='mt'>

          <Carousel.Item className='gg'>
            <img
              className="d-block w-100"
              src={Feminino}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 className='titulo-1'>MODA FEMININA</h5>
              <p>Novidades na moda Inverno/Verão</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item className='gg'>
            <img
              className="d-block w-100"
                src={Masculino}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>MODA MASCULINA</h5>
              <p>Estilo e classe, você só encontra aqui!</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item className='gg'>
            <img
              className="d-block w-100"
              src={Acessorios}
              alt="Third slide"
            />
    

            <Carousel.Caption>
              <h5>ACESSÓRIOS E CALÇADOS</h5>
              <p>Tecnoligia e conforto</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default Carrossel;
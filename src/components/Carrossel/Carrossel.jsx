// Styles
import Carousel from 'react-bootstrap/Carousel';
import './styles.css'


//Imagens do carrossel
import Masculino from '../../images/carrossel/masculino-carrossel.webp'
import Feminino from '../../images/carrossel/feminino-carrossel.webp'
import Acessorios from '../../images/carrossel/acessorios-carrossel.webp'

function Carrossel() {
  return (
    <Carousel className='margin-top'>
      <Carousel.Item className='gg'>
        <img
          className="d-block w-100"
          src={Feminino}
          alt="Mulher com um vestido preto seguranco uma bolsa preta, andando pelas ruas"
        />

        <Carousel.Caption>
          <h5>MODA FEMININA</h5>
          <p>Novidades na moda Inverno/Verão</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='gg'>
        <img
          className="d-block w-100"
          src={Masculino}
          alt="Homem com barba comprida e camiseta preta, tomando coca-cola em um bar"
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
          alt="Sapato marrom, relogio redondo, e escovas de canelo sobre uma mesa de madeira"
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
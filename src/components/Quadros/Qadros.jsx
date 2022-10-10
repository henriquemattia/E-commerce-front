import Quadro from "./Quadro/Quadro";

import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import './styles.css'

import Sporting from '../../images/quadros/tenis-1.png'
import Feminino from '../../images/quadros/roupa-social-feminina-capa.jpg'
import Infantil from '../../images/quadros/crianca.jpg'
import Masculino from '../../images/quadros/homen.jpeg'

const quadros = [
  {
    titulo: "MASCULINO",
    image: 'https://i.imgur.com/hZQEDE2.jpeg',
    link: '/masculino',
  },
  {
    titulo: "FEMININO",
    image: 'https://i.imgur.com/w9PmbmI.jpeg',
    link: '/feminino',
  },
  {
    titulo: "ACESSÓRIOS",
    image: 'https://i.imgur.com/XO8MOWc.jpeg',
    link: '/acessorios',
  },
  {
    titulo: "CALÇADOS",
    image: 'https://i.imgur.com/vw06NX1.jpeg',
    link: '/calcados',
  },

]


function Quadros() {
  return (
    <Container >
      <Row>
        {quadros.map((quad, index) => {
          return (
            <Quadro
              key={index}
              titulo={quad.titulo}
              image={quad.image}
              link={quad.link}
            />
          )
        })}
      </Row>

      <span className="risco" ></span>
      <h2 className="destaque">DESTAQUES</h2>
    </Container>

  );
}

export default Quadros;
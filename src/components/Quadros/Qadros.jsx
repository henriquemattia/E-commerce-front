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
    image: Masculino,
    link: '/masculino',
  },
  {
    titulo: "FEMINIO",
    image: Feminino,
    link: '/feminino',
  },
  {
    titulo: "ESPORTES",
    image: Sporting,
    link: '/login',
  },
  {
    titulo: "INFANTIL",
    image: Infantil,
    link: '/produtos',
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
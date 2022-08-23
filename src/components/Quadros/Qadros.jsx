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
    titulo: "ESPORTES",
    image: Sporting,
  },
  {
    titulo: "FEMINIO",
    image: Feminino,
  },
  {
    titulo: "MASCULINO",
    image: Masculino,
  },
  {
    titulo: "INFANTIL",
    image: Infantil,
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
            />
          )
        })}
      </Row>
      <hr />
    </Container>

  );
}

export default Quadros;
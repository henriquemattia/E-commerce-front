//Styles
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import './styles.css'

import Quadro from "./Quadro/Quadro";

//Imagens dos quadros
import Masculino from '../../images/quadros/masculino-quadro.webp'
import Feminino from '../../images/quadros/feminino-quadro.webp'
import Calcados from '../../images/quadros/calcados-quadro.webp'
import Acessorios from '../../images/quadros/acessorio-quadro.webp'

const quadros = [
  {
    titulo: "MASCULINO",
    image: Masculino,
    link: '/masculino',
  },
  {
    titulo: "FEMININO",
    image: Feminino,
    link: '/feminino',
  },
  {
    titulo: "ACESSÓRIOS",
    image: Acessorios,
    link: '/acessorios',
  },
  {
    titulo: "CALÇADOS",
    image: Calcados,
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
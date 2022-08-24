import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import './styles.css'
import { Link } from 'react-router-dom';

function Quadro(props) {
  return (
    <Col xxl={12} md={6}>
      <Card className="bg-ligth text-white mt-4 border-0 ">
        <Card.Img src={props.image} alt="Card image" className='rounded-0'/>
        <Card.ImgOverlay className='center'>
          <h2 className='font'>{props.titulo}</h2>
          <Link to={props.link} className='botao cursor'><Button className="rounded-0 " variant="outline-light" >CONHECER</Button></Link>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default Quadro;
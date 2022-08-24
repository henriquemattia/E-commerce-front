import React from 'react';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';

import './styles.css'


function Produt(props) {
  return (
  <>
        <Col className='col-6'> 
            <Card className='pbt'>
                <Card.Img variant="top"  src={props.image}/>
                    <Card.Body>
                        <Card.Text>
                        {props.name}
                        </Card.Text>
                        <Card.Text>
                        {props.valor}
                        </Card.Text>
                </Card.Body>
            </Card>
         </Col>
  </>
  );
}

export default Produt;
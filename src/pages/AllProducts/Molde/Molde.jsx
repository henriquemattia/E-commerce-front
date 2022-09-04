import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';


import './styles.css'


function Molde(props) {
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
                        <Button className="rounded-0" variant="outline-dark"  >{props.route}</Button>
                </Card.Body>
            </Card>
         </Col>
  </>
  );
}

export default Molde;
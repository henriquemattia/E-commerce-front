import React from 'react';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';

import './styles.css'


function Post(props) {
  return (
  <>
        <Col className='col-6'> 
            <Card className='pbt '>
           
                <Card.Img className="imgg"variant="top"  src={props.image}/>
                    <Card.Body>
                        <div className='post-name'>
                        {props.name}
                        </div>
                        <div className='post-price'>
                        {props.valor}
                        </div>
                </Card.Body>
            </Card>
         </Col>
  </>
  );
}

export default Post;
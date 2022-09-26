import React from 'react';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

import './styles.css'


function Post(props) {
    return (
        <>
            <Col className='col-6'>
                <Link to={`/${props.categoria}/${props.rota}`} className='tag-a'>
                    <Card className='pbt tag-a'>

                        <Card.Img className="imgg" variant="top" src={props.image} />
                        <Card.Body className="ajj">
                            <div className='post-name'>
                                {props.name}
                            </div>
                            <div className='post-price'>
                                <p>DE: R$: {props.desc_valor}</p>
                                <p>POR: R$: {props.valor}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    );
}

export default Post;
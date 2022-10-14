import React, { useState } from 'react';

//styles
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

//Imagens
import Passo1 from '../../images/modal/passo-1.webp'
import Passo2 from '../../images/modal/passo-2.webp'
import Passo3 from '../../images/modal/passo-3.webp'



function Modelo(props) {
  const [show, setShow] = useState(props.value);

  const handleClose = () => {
    setShow(false)
    localStorage.setItem('modal', 'visualized');
};
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title variant="primary"><h2 style={{color: "red"}}>ATENÇÃO!</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Site desenvolvido em "Mobile first"</h4>
          <strong>Caso você estiver utilizando um celular pode ignorar essa mensagem e seguir em frente.</strong>
          <br />
          <br />
          <p>Caso você estiver em um <strong>computador/notbook</strong> siga o passo a passo abaixo...</p>
          <br />
          <p><strong>Passo-1:</strong> Clique com o botão direito do seu mouse na tela e depois clique em "inspecionar".</p>
          <br />
          <Image src={Passo1} alt="" fluid="true"/>
          <br />
          <br />
        <p><strong>Passo-2:</strong> Clique no pequeno ícone de representação mobile, como indicado na imagem abaixo.</p>
            <br />
          <Image src={Passo2} alt="" fluid="true"/>
          <br />
          <br />
          <p><strong>Passo-3: Primeiro</strong> clique no local em que a <span style={{color: "red" }}>seta vermelha</span> está apontando, depois clique em "Iphone 12 pro" aonde a<span style={{color: "green"}}> seta verde</span> está apontando e <strong>Pronto!</strong></p>
          <br />
          <Image src={Passo3} alt="" fluid="true"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} >Feito!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modelo




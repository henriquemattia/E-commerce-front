import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modelo() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title variant="primary">ATENÇÃO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Página toda desenvolvida em "Mobile first"</h6>
          <p>Se voê estiver em um computador siga o passo a passo a baixo</p>
          <h6>Primeiro clique com o botão direito do seu mouse na tela e va em "inspecionar"</h6>
          <img src="" alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} >Entendido</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modelo
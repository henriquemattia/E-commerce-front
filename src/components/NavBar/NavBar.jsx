// REACT-BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';

// REACT-ICONS
import { BsHandbag } from "react-icons/bs";

import './styles.css'


function LogOut() {

  if (localStorage.getItem("token")) {
    return (
      <>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3" href='/logout'>Sair</NavDropdown.Item>
      </>
    )
  } else {
    null
  }
}
function Topbar() {

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className='fixed-top transp'>
          <Container fluid >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href='/'>HFM</Navbar.Brand>
            <Navbar.Brand href='/carrinho'><BsHandbag /></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="mj"
            >
              <Offcanvas.Header className="blac" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h2>HFM</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="blac mj">

                <Nav className="justify-content-end flex-grow-1 pe-3 blac">
                  <Nav.Link href="/produtos"><h5>TODOS OS PORDUTOS</h5></Nav.Link>
                  <Nav.Link href="/masculino">MASCULINO</Nav.Link>
                  <Nav.Link href="/feminino">FEMININO</Nav.Link>
                  <Nav.Link href="/acessorios">ACESSÓRIOS</Nav.Link>
                  <Nav.Link href="/calcados">CALÇADOS</Nav.Link>

                  <NavDropdown title='Mais opcões'>
                      <NavDropdown.Item eventKey="4.1" href='/login' >Login</NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2" href='register'>Cadastre-se</NavDropdown.Item>
                    <LogOut />
                  </NavDropdown>
                </Nav>
                
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Pesquisar</Button>
                </Form>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Topbar;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { BsHandbag } from "react-icons/bs";

function Topbar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar  key={expand} bg="light" expand={expand} className='fixed-top'>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href='/'>HFM</Navbar.Brand>
            <BsHandbag></BsHandbag>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HFM
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
             

                <Nav className="justify-content-end flex-grow-1 pe-3">

                <Nav.Link href="/masculino">Masculino</Nav.Link>
                  <Nav.Link href="feminino">Feminino</Nav.Link>
                  <Nav.Link href="infantil">Infantil</Nav.Link>
                  <Nav.Link href="esportes">Esportes</Nav.Link>


                <NavDropdown title='Mais opcões'>
                  <NavDropdown.Item eventKey="4.1" >Login</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4" href='/login' >Login / Cadastre-se</NavDropdown.Item>
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
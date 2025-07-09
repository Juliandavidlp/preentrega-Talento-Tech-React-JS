import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <div >
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">Compumundo Hr</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                <Nav.Link as={Link} to="/Carrito">Carrito</Nav.Link>

                <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Iniciar-sesión">Iniciar Sesión</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Registrarse">Registrarse</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/Cerrar-sesión">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
}

export default AppNavbar;
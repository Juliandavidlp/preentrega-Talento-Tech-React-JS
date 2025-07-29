import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AppNavbar() {
  const { token, usuario, cerrarSesión } = useAuth();
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleCerrarSesión = () => {
    cerrarSesión();
    navigate('/Iniciar-sesión');
  }


  return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <Navbar.Brand as={Link} to="/">Compumundo Hr</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/Carrito">Carrito</Nav.Link>

                <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                  {/* Un operador ternario */}
                  {token ? (
                    <>
                      <NavDropdown.Item as={Link} to={`/Perfil/${usuario}`}>Perfil</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/Administración">Administración</NavDropdown.Item>
                      <NavDropdown.Divider/>
                      <NavDropdown.Item onClick={handleCerrarSesión}>Cerrar Sesión</NavDropdown.Item>
                    </>
                    ) : (
                      <>
                        <NavDropdown.Item as={Link} to="/Iniciar-sesión">Iniciar Sesión</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Registrarse">Registrarse</NavDropdown.Item>
                      </>
                    )
                  }
                </NavDropdown> 
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default AppNavbar;
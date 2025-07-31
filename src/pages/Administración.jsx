import React from 'react';
import { Container } from 'react-bootstrap';

function Administración({ children }) {
  return (
    <Container className="my-4">
      {/* Ahora la página de Administración es responsable de su propio layout,
          incluyendo el contenedor principal. */}
      {children}
    </Container>
  );
}

export default Administración;
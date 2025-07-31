import React from 'react';
import { Container } from 'react-bootstrap';

function Administración({ children }) {
  return (
    <Container className="my-4">
      {/* La página de Administración del back-office es responsable de su propio layout */}
      {children}
    </Container>
  );
}

export default Administración;
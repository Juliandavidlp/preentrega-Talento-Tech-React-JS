import React from "react";
import { Container } from "react-bootstrap";
import { Formulario } from '../components/Formulario.jsx';

function Contacto(){
    return(
        <div>
            <Container className="mt-4">
                <Formulario/>
            </Container>
        </div>
    );
}
export default Contacto;
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Perfil(){
    // Capturo el parámetro de la URL
    const { id } = useParams();

    // Forma larga
    // const parametros = useParams(); // parametros sería { id: '123' }
    // const id = parametros.id;    //  Extrae la propiedad 'id' del objeto del useParams()
    return(
        <div>
            <Container className="mt-4">
                <h2>Perfil del Usuario</h2>
                <p>Bienvenido, {id}</p>
            </Container>
        </div>
    );
}
export default Perfil;
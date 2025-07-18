import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Perfil(){
    // Capturo el parámetro de la URL, desestructuro y extraigo la propiedad 'id' del objeto
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

// useParams(): es un hook de React Router que te devuelve un objeto con los parámetros de la URL.
// Por ejemplo, si tu ruta es /usuarios/:id y la URL es /usuarios/123, useParams() devolverá el objeto { id: '123' }.

// const { id } = ...: Esta es la parte de la desestructuración de objetos. 
// En lugar de asignar el objeto completo a una variable y luego acceder a sus propiedades
// (como const params = useParams(); const id = params.id;), 
// la desestructuración te permite extraer directamente una o más propiedades de un objeto 
// y asignarlas a variables con el mismo nombre de la propiedad.
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

function IniciarSesión(){
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    
    const handleLogin = (e) => {
        // Prevengo que el formulario recargue la página
        e.preventDefault();
        // Acá iría la lógica para validar el usuario y contraseña contra una API...

        // 1. Guardo en el navegador que el usuario está autenticado.
        localStorage.setItem('auth', 'true'); 
        // 2. Redirijo al usuario a su página de perfil.
        navigate(`/Perfil/${usuario || 'invitado'}`); // Uso el nombre de usuario en la URL
    }; 


    return(
        <div>
            <Container className="mt-4" style={{ maxWidth: 400 }}>
                <h2>Iniciar Sesión</h2>
                <p>Pagina para Iniciar Sesión</p>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Escribe tu nombre de usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Entrar</Button>
                </Form>
            </Container>
        </div>
    );
}
export default IniciarSesión; 
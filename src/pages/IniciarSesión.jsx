import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '..context/AuthContext.jsx';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';

export default function IniciarSesión()
{
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const { iniciarSesión } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        // Prevengo que el formulario recargue la página
        e.preventDefault();

        // Acá iría la lógica para validar el usuario y contraseña contra una API...
        if (iniciarSesión(usuario, contraseña)){
            navigate(`/Perfil/${usuario}`)
        }
        else {
            setError('Usuario o contraseña inválidos');
        }
    }; 

    return(
        
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <h2>Iniciar Sesión</h2>
            <p>Pagina para Iniciar Sesión</p>

            <Card style={{ width: "24rem" }}>
                <Card.Body>
                <Card.Title className="mb-4 text-center">Login</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe tu nombre de usuario"
                        value={usuario}
                        onChange={(e) => {
                        setUser(e.target.value);
                        if (error) setError("");
                        }}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={pass}
                        onChange={(e) => {
                        setPass(e.target.value);
                        if (error) setError("");
                        }}
                    />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                    Ingresar
                    </Button>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
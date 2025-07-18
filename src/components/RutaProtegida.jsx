import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children })
{
    const auth = localStorage.getItem('auth') === 'true';
    return auth ? children : <Navigate to="/Iniciar-sesión"/>

}

// LÓGICA DEL OPERADOR TERNARIO: "Al renderizar, compruebo si el usuario está autenticado (auth). 
// Si lo está (?), muestro el contenido protegido (children). De lo contrario (:), redirijo al usuario a la página de login (<Navigate to="/login" />)."
// Es una manera elegante y declarativa de manejar la lógica de rutas protegidas directamente en el JSX.
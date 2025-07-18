import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children })
{
    const auth = localStorage.getItem('auth') === 'true';
    return auth ? children : <Navigate to="/Iniciar-sesión" replace/>

}

// LÓGICA DEL OPERADOR TERNARIO: "Al renderizar, compruebo si el usuario está autenticado (auth). 
// Si lo está (?), muestro el contenido protegido (children). De lo contrario (:), redirijo al usuario a la página de login (<Navigate to="/login" />)."
// Es una manera elegante y declarativa de manejar la lógica de rutas protegidas directamente en el JSX.

// Uso de replace:Al usar <Navigate to="/Iniciar-sesión" replace/>, la ruta /Perfil (que el usuario nunca debió poder ver) es eliminada del historial. Si presiona "Atrás" en la página de login, 
// volverá a la página que visitó antes de intentar entrar al perfil, lo cual es la experiencia de usuario que se espera.
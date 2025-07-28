import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function RutaProtegida({ children }){
    const { token } = useAuthContext();
    return token ? children : <Navigate to="/Iniciar-sesión" replace/>;
}

// LÓGICA DEL OPERADOR TERNARIO: "Al renderizar, compruebo si el token del usuario existe, si este esta autentificado. 
// Si lo está (?), muestro el contenido protegido del componente hijo. De lo contrario (:), redirijo al usuario a la página de login (<Navigate to="/login" />)."
// Es una manera elegante y declarativa de manejar la lógica de rutas protegidas directamente en el JSX.

// Uso de replace: al usar <Navigate to="/Iniciar-sesión" replace/>, la ruta /Perfil (que el usuario nunca debió poder ver) es eliminada del historial. Si presiona "Atrás" en la página de login, 
// volverá a la página que visitó antes de intentar entrar al perfil, lo cual es la experiencia de usuario que se espera.

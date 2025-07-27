import { createContext, useContext, useEffect, useState } from 'react';

// Creo el contexto
const AuthContext = createContext();

// Creo el proveedor del contexto
export function AuthProvider({ children }){

    const [token, setToken] = useState(null);
    const [usuario, setUsuario] = useState(null);

    useEffect(()=>{
        const tokenGuardado = localStorage.getItem('token');
        const usuarioGuardado = localStorage.getItem('usuario');
        if ( tokenGuardado && usuarioGuardado) {
            setToken(tokenGuardado);
            setUsuario(usuarioGuardado);
        }
    }, []);

    // Guardo un token falso en el almacenamiento local
    const iniciarSesión = (usuario, contraseña) =>{
        if (usuario === 'admin' && contraseña === '1234'){
            const tokenFalso = 'dG9rZW5GYWxzbzEyMzQ=';
            setToken(tokenFalso);
            setUsuario(usuario);
            localStorage.setItem('token', tokenFalso);
            localStorage.setItem('usuario', usuario);
            return true;
        }
        return false;
    };

    // Elimino el token del almacenamiento local y limpio el estado del usuario
    const cerrarSesión = () => {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    };

    return  (
        <AuthContext.Provider value={{ token, usuario, iniciarSesión, cerrarSesión }}>
            {children}
        </AuthContext.Provider>
    );
}

// Creo un custom hook (o hook personalizado)
// useAuthContext es un hook personalizdo que permite acceder al estado de autentificación 
export const useAuthContext = () => useContext(AuthContext);
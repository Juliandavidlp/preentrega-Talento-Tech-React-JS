import { useState } from "react";
import Swal from 'sweetalert2';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Valido el email con una expresión regular
    const emailEsValido = (email)=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Manejo el envío del formulario en el evento de envío
    const handleSumbit = (e)=>{
        e.preventDefault();

        // Valido que los campos estén completos
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            Swal.fire({
                title: 'Hay campos incompletos',
                text: 'Por favor, complete todos los campos',
                icon: 'error',
            });
            return;
        }

        // Valido el formato del email
        if (!emailEsValido(email)) {
            Swal.fire({
                title: 'El email no es válido',
                text: 'Por favor, ingresá un email con un formato válido',
                icon: 'error',
            });
            return; 
        }

        // Si todo está OK y no hay ningún return
        Swal.fire({
                title: 'El formulario ha sido enviado',
                text: `Gracias, ${nombre}. Te responderemos pronto.`,
                icon: 'success',
            });
        
        setNombre('');
        setEmail('');
        setMensaje('');

    };


    return (
        <form action="" onSubmit={handleSumbit} style={{ maxWidth: '400px', margin: 'auto'}}>
            <h2>Formulario de Contacto</h2>

            <div style={{ marginBottom: '10px' }}>
                <label>Nombre:</label>
                <input autocomplete="off" autofocus class="" name="name" placeholder="Tu nombre" type="text" 
                value={nombre} onChange={(e)=> setNombre(e.target.value)}
                style={{ width: '100%', padding: '8px' }}/>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Email:</label>
                <input autocomplete="off" autofocus class="" name="email" placeholder="Tu email" type="text" 
                value={email} onChange={(e)=> setEmail(e.target.value)}
                style={{ width: '100%', padding: '8px' }}/>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Mensaje:</label>
                <textarea name="textarea" placeholder="Tu nombre" rows="4"
                value={mensaje} onChange={(e)=> setMensaje(e.target.value)}
                style={{ width: '100%', padding: '8px' }}/>
            </div>

            <button type="submit" style={{ padding: '10px 20px' }}>Enviar</button>
        </form>
    );
}

export default Formulario;
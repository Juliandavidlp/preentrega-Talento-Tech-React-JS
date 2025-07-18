import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';

// Importo los componentes básicos y de navegación
import Head from './components/Head.jsx';
import AppNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Importo las páginas
import Inicio from './pages/Inicio.jsx';
import Productos from './pages/Productos.jsx';
import Contacto from './pages/Contacto.jsx';
import Carrito from './pages/Carrito.jsx';
import Registrarse from './pages/Registrarse.jsx';
import IniciarSesión from './pages/IniciarSesión.jsx';
import CerrarSesión from './pages/CerrarSesión.jsx';
import Perfil from './pages/Perfil.jsx';


function App() {
    // Estados para almacenar los productos de la API y para indicar si los mismos se cargan o almacenar errores
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    // Utilizo el hook useEffect() para realizar la llamada a la API
    useEffect(() => {
    // Hago el pedido a la API
      fetch('https://fakestoreapi.in/api/products?limit=6')
        .then(res => res.json()) // Parseo la respuesta JSON
        .then(data => {
          console.log("Respuesta completa de la API (objeto 'data'):", data);
          setProducts(data.products);
          setLoading(false); //La carga terminó
        })
        .catch(err => {
          // Capturo cualquier error de red o de procesamiento
          console.err("Hubo un error al obtener los datos:", err);
          setError(err); // Guardo el error en el estado para mostrárselo al usuario
          setLoading(false); //La carga terminó, incluso si hubo un error
        });
    }, []); // El array de dependencias vacío [] asegura que el useEffect se ejecute una vez sola.

  return (
    <div>
      <Router>
        <div>
          <Head/>
          <AppNavbar/>
          <Routes>
              <Route path='/' element={<Inicio/>} />
              <Route path='/Contacto' element={<Contacto/>} />
              <Route path='/Productos' element={<Productos products={ products }/>} />
              <Route path='/Carrito' element={<Carrito/>} />
              <Route path='/Iniciar-sesión' element={<IniciarSesión/>} />
              <Route path='/Registrarse' element={<Registrarse/>} />
              <Route path='/Cerrar-sesión' element={<CerrarSesión/>} />
              <Route path='/Perfil/:id' element={<Perfil />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>

    // <div>
    //   <Router>
    //     <div>
    //       <NavBar/>
    //       <Routes>
    //           <Route path='/' element={<Home/>}  />
    //           <Route path='/about' element={<About/>}  />
    //           <Route path='/contact' element={<Contact/>}  />
    //       </Routes>
    //     </div>
    //   </Router>
    // </div>
  )
}

export default App;
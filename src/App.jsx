import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importo los componentes
import Head from './components/Head.jsx';
import HeaderNavbar from './components/Header-Navbar.jsx';
import Footer from './components/Footer.jsx';
import LandingMain from './components/LandingMain.jsx';
import Cards from './components/Cards.jsx';

function App() {
    // Estados para almacenar los productos de la API y para indicar si los mismos se cargan o almacenar errores
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    // useEffect para realizar la llamada a la API
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
    }, []); // El array de dependencias vacío [] asegura que el useEffect se ejecute solo una vez.

  return (
    <div>
      <Head/>
      <HeaderNavbar/>
      <LandingMain/>
      <Cards products={products}/>
      <Footer/>
    </div>
  )
}

export default App

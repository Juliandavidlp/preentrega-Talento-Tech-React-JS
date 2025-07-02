import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Importo los componentes
import Head from './components/Head.jsx';
import Navbar from './components/Navbar.jsx';
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
      <Router>
        <div>
          <Head/>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
          </Routes>
          <LandingMain/>
          <Cards products={products}/>
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
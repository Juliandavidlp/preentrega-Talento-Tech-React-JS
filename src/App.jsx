import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';

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
import Perfil from './pages/Perfil.jsx';
import Administración from './pages/Administración.jsx';


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
          console.error("Hubo un error al obtener los datos:", err);
          setError(err); // Guardo el error en el estado para mostrárselo al usuario
          setLoading(false); //La carga terminó, incluso si hubo un error
        });
    }, []); // El array de dependencias vacío [] asegura que el useEffect se ejecute una vez sola.


    // Lógica del CRUD de productos para el administrador
    const [productos, setProductos] = useState([]);
    const [productoaEditar, setProductoaEditar] = useState(null);
    const [contadorId, setContadorId] = useState(1);

    const agregarProducto = (producto) => {
      const nuevoProducto = { ...producto, id: contadorId };
      setProductos([...productos, nuevoProducto]);
      setContadorId(contadorId + 1);
    };

    const actualizarProducto = (productoActualizado) => {
      setProductos(productos.map(p => (p.id === productoActualizado.id ? productoActualizado : p)));
      setProductoaEditar(null);
    };

    const eliminarProducto = (id) => {
      setProductos(productos.filter(p => p.id !== id));
    };

    const editarProducto = (producto) => {
      setProductoaEditar(producto);
    };


    return (
      <>
        <AuthProvider>
          <Router>
              <Head/>
              <AppNavbar/>
              <Routes>
                  <Route path='/' element={<Inicio/>}/>
                  <Route path='/Contacto' element={<Contacto/>}/>
                  <Route path='/Productos' element={<Productos products={ products }/>}/>
                  <Route path='/Carrito' element={<Carrito/>}/>
                  <Route path='/Iniciar-sesión' element={<IniciarSesión/>}/>
                  <Route path='/Registrarse' element={<Registrarse/>}/>
                  <Route path='/Perfil/:usuario' element={
                    <RutaProtegida>
                      <Perfil/>
                    </RutaProtegida>
                    }
                  />
                  <Route path='/Administración' element={
                    <RutaProtegida>
                      <Administración>
                        <Container className="my-4">
                          <h2>Gestion de Productos</h2>
                          <ProductoForm
                            onSubmit={productoAEditar ? actualizarProducto : agregarProducto}
                            productoAEditar={productoAEditar}
                            onCancel={() => setProductoAEditar(null)}
                          />
                          <hr/>
                          <ListaProductos
                            productos={productos}
                            onEdit={editarProducto}
                            onDelete={eliminarProducto}
                          />
                        </Container>
                      </Administración>
                    </RutaProtegida>
                    }
                  />
              </Routes>
              <Footer/>
          </Router>
        </AuthProvider>
      </>
    )
  }

export default App;
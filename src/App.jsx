import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import { Container } from 'react-bootstrap';

// Importo los componentes básicos y de navegación
import Head from './components/Head.jsx';
import AppNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AdminListaDeProductos from './components/ListadeProductos.jsx';
import ProductoForm from './components/ProductoForm.jsx';

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
    // Lógica del CRUD de productos para el administrador
    const [productos, setProductos] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    // Utilizo el hook useEffect() para realizar la llamada a la API
    useEffect(() => {
    // Hago el pedido a la API
      fetch('https://fakestoreapi.in/api/products?limit=6')
        .then(res => res.json()) // Parseo la respuesta JSON
        .then(data => {
          console.log("Respuesta completa de la API (objeto 'data'):", data);
          setProductos(data.products); // Usamos el estado unificado 'productos'
          setLoading(false); //La carga terminó
        })
        .catch(err => {
          // Capturo cualquier error de red o de procesamiento
          console.error("Hubo un error al obtener los datos:", err);
          setError(err); // Guardo el error en el estado para mostrárselo al usuario
          setLoading(false); //La carga terminó, incluso si hubo un error
        });
    }, []); // El array de dependencias vacío [] asegura que el useEffect se ejecute una vez sola.


    const [productoaEditar, setProductoaEditar] = useState(null);

    const agregarProducto = (producto) => {
      // Generamos un nuevo ID seguro, encontrando el máximo ID actual y sumándole 1
      const maxId = productos.reduce((max, p) => (p.id > max ? p.id : max), 0);
      const nuevoProducto = { ...producto, id: maxId + 1 };

      setProductos([...productos, nuevoProducto]);
    };

    const actualizarProducto = (productoActualizado) => {
      setProductos(productos.map(p => (p.id === productoActualizado.id ? productoActualizado : p)));
      setProductoaEditar(null);
    };

    const eliminarProducto = (id) => {
      // El método objet.filter() de JS filtra o excluye un elemento de un objeto iterable 
      // y a partir de una comparación genera un nuevo array.
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
                  <Route path='/Productos' element={<Productos products={ productos }/>}/>
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
                        <h2>Gestion de Productos</h2>
                        <ProductoForm
                          onSubmit={productoaEditar ? actualizarProducto : agregarProducto}
                          productoAEditar={productoaEditar}
                          onCancel={() => setProductoaEditar(null)}
                        />
                        <hr/>
                        <AdminListaDeProductos
                          productosAdm={productos}
                          onEdit={editarProducto}
                          onDelete={eliminarProducto}
                        />
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
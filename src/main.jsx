import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoProvider } from './context/CarritoContext.jsx';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envuelvo la aplicación en el proveedor de contexto*/}
    <CarritoProvider> 
      <App/>
    </CarritoProvider>
  </StrictMode>,
)

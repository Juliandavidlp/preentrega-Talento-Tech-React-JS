import React, { useContext } from "react";
import { CarritoContext } from '../context/CarritoContext.jsx';
import { Container} from "react-bootstrap";

function Carrito() {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    return(
        <Container className="mt-4">
            <h1>Carrito de Compras</h1>
            {/* Lógica para mostrar los productos a través de un operador ternario */}
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((product, index) => (
                        <li key={index}>{product.name} - ${product.price}</li>
                        ))
                    }
                </ul>
                ) : (
                        <p>No hay productos en el carrito.</p>
                )
            }
            {carrito.length > 0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button>}
        </Container>
    );
}
export default Carrito;
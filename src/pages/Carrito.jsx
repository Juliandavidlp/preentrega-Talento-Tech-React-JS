import React, { useContext } from "react";
import { CarritoContext } from '../context/CarritoContext.jsx';
import { Container, Button } from "react-bootstrap";

function Carrito() {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const calcularTotal = () => {
        return carrito.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    }

    return(
        <Container className="mt-4">
            <h1>Carrito de Compras</h1>
            {/* Lógica para mostrar los productos del carrito con un operador ternario */}
            {carrito.length > 0 ? (
                <>
                    <ul>
                        {carrito.map((product) => (
                            <li key={product.id}>
                                {product.title} - ${product.price} - Cantidad: {product.quantity}
                            </li>
                            ))
                        }
                    </ul>
                    <h3>Total: ${calcularTotal()}</h3>
                    <Button onClick={vaciarCarrito}>Vaciar Carrito</Button>
                </>
                ) : (
                        <p>No hay productos en el carrito.</p>
                )
            }
        </Container>
    );
}
export default Carrito;
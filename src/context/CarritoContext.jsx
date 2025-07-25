import { createContext, useState } from 'react';


// Crear el contexto
export const CarritoContext = createContext();

// Proveedor del contexto (genero el componente contenedor o Wrapper)
export function CarritoProvider({ children }) {
    // Estado del carrito (un array de objetos donde cada objeto contiene información del producto)
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto, cantidad) => {
        const productoEnElCarrito = carrito.find((item) => item.id === producto.id);

        if (productoEnElCarrito) {
            // Si el producto ya está en el carrito, actualizo su cantidad
            const carritoActualizado = carrito.map((item) => 
                item.id === producto.id
                // Uso sintaxis de propagación (Spread Syntax)
                ? { ...item, quantity: item.quantity + cantidad }
                : item
            );
            setCarrito(carritoActualizado);
            } 
            else {
                // Si el producto no está, lo agrego al carrrito con la cantidad especificada
                setCarrito([...carrito, { ...producto, quantity: cantidad}]);
            }
        };
    
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return(  
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
            {/*=> Object property shorthand */}
            {children}
        </CarritoContext.Provider>
    );
    
}

// La sintaxis de propagación (Spread Syntax) 
// Crea un nuevo array u objeto a partir de los elementos que ya existen
// y los "esparce", los "desempaqueta" y los agrega a la variable o clave que le agrego.
// ¿Por qué se hace esto? Porque no es una práctica recomendada modificar el estado de la aplicación directamente. 

// En el segundo caso hago dos cosas para mantener la inmutabilidad:
// Primero creo un nuevo array para el estado del carrito. Después creo un nuevo objeto dentro del array.


// ¿Qué hace carritoContext()?
// La función createContext() de React no solo crea el objeto CarritoContext, 
// sino que este objeto viene con dos componentes "adjuntos" de forma automática:

// CarritoContext.Provider:
//  Un componente que se usa para "envolver" a otros componentes.
//  Su trabajo es proveer (hacer disponible) un valor a todos los componentes hijos que estén dentro de él,
//  por lo que hay que pasarle la información que queremos compartir a través de la prop value.

// CarritoContext.Consumer: 
// Un componente (aunque hoy en día es más común usar el hook useContext) 
// que permite a los componentes hijos consumir (leer) el valor que el Provider está proveyendo.
// Entonces, CarritoContext.Provider no es algo que se importa de una librería, 
// sino una propiedad del objeto CarritoContext que yo mismo creo.


// *** Object property shorthand ***

// Sintaxis de propiedad abreviada: 
// Crea un objeto a partir de variables. Por ej: const obj = { a, b };
// Desestructuración: 
// Extrae valores de un objeto a variables. Por ej: const { a, b } = obj;

// Las llaves interiores {}: Estas son las que crean el objeto de JavaScript. 
// La expresión { carrito, agregarAlCarrito, vaciarCarrito } es la sintaxis de propiedad abreviada que mencioné.

//  Es un atajo moderno para escribir en JS: {
//   carrito: carrito,
//   agregarAlCarrito: agregarAlCarrito,
//   vaciarCarrito: vaciarCarrito
// }

// Como los nombres de las claves (a la izquierda de los dos puntos) son iguales a los nombres de las variables (a la derecha), 
// JavaScript permite acortarlo.

// Entonces, en síntesis, estoy creando un único objeto que contiene todo lo que quiero compartir
//  y se lo paso como un único valor permitido a la prop value.
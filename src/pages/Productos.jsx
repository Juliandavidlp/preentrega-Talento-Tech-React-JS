import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function Productos({ products }){

    const [contador, setContador]=useState(0);
    const [product, setProduct]=useState([]);

    return(
        <div>
            <div>
                {/* El contenido principal. 
                Generé cuatro secciones dentro del contenido de la página:  */}
                <section id="banner">
                {/* Divido el contenido principal en secciones. A la primera sección la identifico con un atributo id para después trabajar con ella por medio de JS o CSS.  */}
                    <div class="banner-card container"> {/* Nomenclatura tipo BEM  */}
                        <h1>Compumundo Hr </h1> <br/> {/* Las etiquetas h1 a h6 son etiquetas para hacer títulos y subtítulos. */}
                        <h2>Portátiles, celulares y mucho más.</h2>
                    </div>
                </section> 
            </div>
            <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}} class="cards">
                {
                    products.map((product) =>(
                    <Card style={{ width: '15rem'}} key={product.id}>
                        <Card.Img variant="top" src={product.image} alt={product.id}/>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>Model: {product.model}</Card.Text>
                            <Card.Text>Price: ${product.price}</Card.Text>
                            <Button variant="primary" onClick={()=>{setContador(contador+1), setProduct(product.id)}}>Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                    ))
                }
            </div>
        </div>  
    );
}

export default Productos;
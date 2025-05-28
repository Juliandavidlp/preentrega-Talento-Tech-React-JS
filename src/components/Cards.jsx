import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productos({ products }){

    const [contador,setContador]=useState(0);
    const [product,setProduct]=useState([]);

    return(

        <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}} class="cards">
            {
                products.map((product) =>(
                <Card style={{ width: '18rem'}} key={product.id}>
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
    );
}

export default Productos;
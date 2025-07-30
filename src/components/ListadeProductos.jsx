import { Table, Button } from 'react-bootstrap';

function AdminListaDeProductos({ productosAdm, onEdit, onDelete}){

    if (productosAdm.length === 0){
        return <p>No hay productos en la lista.</p>
    }
   
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th style={{ width: '150px' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productosAdm.map(({ id, nombre, precio }) =>(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{nombre}</td>
                        <td>{precio.toFixed(2)}</td>
                        <td>
                            <Button variant="warning" size="sm" className="me-2" 
                                onClick={() => onEdit({ id, nombre, precio })}>
                                Editar
                            </Button>
                            <Button variant="danger" size="sm"
                                onClick={() => onDelete(id)}>
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default AdminListaDeProductos;
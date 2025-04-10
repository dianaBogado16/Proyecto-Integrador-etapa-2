import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import './ListadoCarrito.scss';

const ListadoCarrito = () => {
    const { 
        carrito, 
        eliminarProductoDelCarritoContext, 
        limpiarCarritoContext, 
        guardarCarritoBackendContext 
    } = useContext(CarritoContext);

    const handleComprar = () => {
        console.log('Comprando...');
        guardarCarritoBackendContext();
    };

    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...');
        limpiarCarritoContext(); // Vacía todo el carrito
    };

    const calcularSubtotal = (producto) => {
        const precio = typeof producto.precio === "number" ? producto.precio : 0;
        return producto.cantidad * precio;
    };

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + calcularSubtotal(producto), 0);
    };

    const calcularTotalItems = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    };

    const handleEliminar = (id) => {
        console.log(`Eliminando producto con ID: ${id}`);
        eliminarProductoDelCarritoContext(id); // Llamada correcta al contexto para eliminar por ID
    };

    return (
        <>
            <h3 className="total-items">Total de ítems: {calcularTotalItems()}</h3>
            
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center' }}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <img src={producto.foto} alt={producto.nombre} style={{ width: '40px' }} />
                                    </td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>${typeof producto.precio === "number" ? producto.precio.toFixed(2) : "0.00"}</td>
                                    <td>${calcularSubtotal(producto).toFixed(2)}</td>
                                    <td>
                                        <button 
                                            className="btn-eliminar" 
                                            onClick={() => handleEliminar(producto.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                    {
                        carrito.length > 0 && (
                            <tr>
                                <td colSpan={4} style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                                <td style={{ fontWeight: 'bold' }}>${calcularTotal().toFixed(2)}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
            { carrito.length > 0 && (
                <>
                    <button className="btn-vaciar" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="btn-comprar" onClick={handleComprar}>Comprar</button>
                </>
            )}
        </>
    );
};

export default ListadoCarrito;

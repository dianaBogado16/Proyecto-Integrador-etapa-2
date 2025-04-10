import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import ItemCarrito from "./ItemCarrito";
import './ListadoCarrito.scss';

const ListadoCarrito = () => {
    const { 
        carrito, 
        limpiarCarritoContext, 
        guardarCarritoBackendContext 
    } = useContext(CarritoContext);

    console.log(carrito);

    const handleComprar = () => {
        console.log('Comprando...');
        guardarCarritoBackendContext();
    };

    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...');
        limpiarCarritoContext();
    };

    // Función para calcular el total de ítems
    const calcularTotalItems = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    };

    return (
        <>
           
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center' }}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }
                </tbody>
            </table>
             <h3 className="total-items">Total de ítems: {calcularTotalItems()}</h3>
            
            
            { !carrito.length <= 0 && (
                <>
                    <button className="btn-vaciar" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="btn-comprar" onClick={handleComprar}>Comprar</button>
                </>
            )}
        </>
    );
};

export default ListadoCarrito;

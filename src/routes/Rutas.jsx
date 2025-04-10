import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Alta from "../pages/Alta"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Carrito from "../pages/Carrito"
import NoEncontrado from "../pages/NoEncontrado"
import DetallesDelProducto from '../pages/DetallesDelProducto'

const Rutas = () => {
    const hookRutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/alta',
                element: <Alta />
            },
            {
                path: '/alta/detalle/:id',
                element: <DetallesDelProducto />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/carrito',
                element: <Carrito />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }

        ]

    )



    return hookRutas
}

export default Rutas
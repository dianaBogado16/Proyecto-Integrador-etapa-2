import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'
const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <h1 className="titulo" >Productos en el carrito</h1>
      
      <ListadoCarrito />
    </>
  )
}

export default Carrito
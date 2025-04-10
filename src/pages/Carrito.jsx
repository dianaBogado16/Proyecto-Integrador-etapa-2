import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <h1>Productos en el carrito</h1>
      
      <ListadoCarrito />
    </>
  )
}

export default Carrito
import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import './Alta.scss'

const Alta = () => {

  useTitulo('Alta')

  return (
    <>
      <h1 className="titulo-formulario">Formulario de alta de productos</h1>
      
      <Formulario />
      <Tabla />
    </>
  )
}

export default Alta
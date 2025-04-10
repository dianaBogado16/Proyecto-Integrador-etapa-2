import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'
const Contacto = () => {

  useTitulo('Contacto')

  return (
    <>
      <h1 className="titulo-contacto">Contactanos</h1>

      <fieldset className="formulario">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="comentario">Comentarios:</label>
          <input type="text" id="comentario" name="comentario" autoComplete="off" />
        </div>

        <div>
          <button className="button-enviar" type="submit">Enviar</button>
        </div>
      </fieldset>
    </>
  )
}

export default Contacto
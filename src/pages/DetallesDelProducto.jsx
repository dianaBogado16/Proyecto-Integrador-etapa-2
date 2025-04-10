
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'
import './DetallesDelProducto.scss'

const ProductoDetalle = () => {

  const { id } = useParams()


  const [productoDetalle, setProductoDetalle] = useState(null)

  useEffect(() => {

    obtener(id)

  }, [])

  const obtener = async (id) => {


    const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id

    try {
      const res = await fetch(urlGetOne)

      if (!res.ok) {
        throw new Error('No se pudo obtener el producto')
      }

      const data = await res.json()
      setProductoDetalle(data)

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <section className="section-detalle">
        <header className="section-detalle__header">
          <h1 className='titulo'>Detalles del producto</h1>
        </header>
      </section>

      {
        productoDetalle ?
          (

            <section className='section-detalle__producto-Detalle'>
              <h2 className='nombre-producto' >{productoDetalle.nombre}</h2>
              <img className='foto-producto' src={`/${productoDetalle.foto}`} alt={productoDetalle.nombre} />
              <p> <strong  className='info' >Marca:</strong>{productoDetalle.marca}</p>
              <p> <strong className='info' >Categoria:</strong>  {productoDetalle.categoria}</p>
              <p> <strong className='info' >Detalles:</strong>  {productoDetalle.detalles}</p>
              
              <p><strong className='info' >Precio</strong> {productoDetalle.precio}</p>
            </section>

          ) :
          (
            <Spinner />
          )
      }
    </>
  )
}

export default ProductoDetalle
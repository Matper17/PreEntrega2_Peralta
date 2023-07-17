import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src= {producto.imagen} alt="Imagen no encontrada"/>
        <div>
            <h4>{producto.categoria}</h4>
            <p>Marca: {producto.marca}</p>
            <p>Modelo: {producto.modelo}</p>
            <p>Precio: ${producto.precio}</p>
            <Link className='ver-mas' to={`/Item/${producto.id}`}> Ver más </Link>
        </div>
    </div>
  )
}


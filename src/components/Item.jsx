import React from 'react'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src= {producto.imagen} alt="Imagen no encontrada"/>
        <div>
            <h4>{producto.nombre}</h4>
            <p>Marca: {producto.marca}</p>
            <p>Precio: ${producto.precio}</p>
            <a className='ver-mas' href={`/Item/${producto.id}`}> Ver más </a>
        </div>
    </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'
//import { toCapital } from '../helpers/toCapital'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src= {producto.imagen} alt="Imagen no encontrada"/>
        <div>
            <h4>{producto.tipo}</h4>
            <p>Marca: {producto.marca}</p>
            <p>Modelo: {producto.modelo}</p>
            <p>Precio: ${producto.precio}</p>
            {/*<p>Categoria: {toCapital(producto.categoria)}</p>*/}
            <Link className='ver-mas' to={`/item/${producto.id}`}> Ver más </Link>
        </div>
    </div>
  )
}


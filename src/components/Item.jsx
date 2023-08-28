import React from 'react'
import { Link } from 'react-router-dom'
//import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
      <div className="producto">
      <img src={producto.imagen} class="card-img-top" alt={producto.marca}/>
      <div class="card-body">
        <h5 class="card-title">{producto.marca}</h5>
        <p class="card-text">{producto.modelo}</p>
        <p class="card-text"> ${producto.precio}</p>
        <Link to={`/item/${producto.id}`} className="ver-mas">Ver más</Link>
      </div>
    </div>
  )
}

export default Item


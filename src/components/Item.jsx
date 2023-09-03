import React from 'react'
import { Link } from 'react-router-dom'
//import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
      <div className="producto">
      <img src={producto.imagen} className="card-img-top" alt={producto.marca}/>
      <div className="card-body">
        <h5 className="card-title">{producto.marca}</h5>
        <p className="card-text">{producto.modelo}</p>
        <p className="card-text"> US${producto.precio}</p>
        <Link to={`/item/${producto.id}`} className="ver-mas">Ver más</Link>
      </div>
    </div>
  )
}

export default Item


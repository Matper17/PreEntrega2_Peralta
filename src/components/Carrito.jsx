import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <img className='imagen-carrito' src={prod.imagen} alt=""/>
                    <p className='precio'>{prod.marca}</p>
                    <p className='precio'>{prod.modelo}</p>
                    <p className='precio'>Precio unitario US${prod.precio}</p>
                    <p className='precio'>Precio total US${prod.precio * prod.cantidad}</p>
                    <p className='precio'>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: US${precioTotal()}</h2>
                <button className="btn btn-secondary" onClick={handleVaciar}>Vaciar</button>
                <br/>
                <br/>
                <Link className="btn btn-secondary" to="/checkout">Finalizar compra</Link>
            </> :
            
            <h2>El carrito está vacío <i class="bi bi-cart-x"></i> </h2>
        }
        
    </div>
  )
}

export default Carrito
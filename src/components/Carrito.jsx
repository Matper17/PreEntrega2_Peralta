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
        {/*<h1 className="main-title">Carrito</h1>*/}
        <br/>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <img src= {prod.imagen} alt="Imagen no encontrada"/>
                    <br />
                    <br />
                    <h3>{prod.marca}</h3>
                    <p>Precio: ${prod.precio}</p>
                    {/*<p>Precio total: ${prod.precio * prod.cantidad}</p>*/}
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <br/>
                <button className='btn btn-secondary' onClick={handleVaciar}>Vaciar</button>
                <br/>
                <br/>
                <Link className='btn btn-secondary' to="/checkout">Finalizar compra</Link>
                <br/>
            </> :
            <h2>El carrito está vacío <i className="bi bi-cart-x-fill"></i></h2>
        }
        
    </div>
    
  )
}

export default Carrito; 
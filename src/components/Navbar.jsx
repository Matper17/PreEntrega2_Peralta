import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h4>MightyRides</h4></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/Autos">Autos</Link></li>
            <li><Link className="menu-link" to="/productos/Motos">Motos</Link></li>

            {/*<li><CartWidget /></li>*/}
        </ul>
        <CartWidget/>
    </nav>
  )
}  

export default Navbar; 

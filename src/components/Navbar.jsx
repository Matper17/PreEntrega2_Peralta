import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>MightyRides</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/Autos">Autos</Link></li>
            <li><Link className="menu-link" to="/productos/Motos">Motos</Link></li>

            {/*<li><CartWidget /></li>*/}
        </ul>
    </nav>
  )
}  

export default Navbar; 

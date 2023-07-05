import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/" className="logo"><h1>MightyRides</h1></a>
        <ul className="menu">
            <li><a className="menu-link" href="/">Inicio</a></li>
            <li><a className="menu-link" href="/productos">Productos</a></li>
            <li><a className="menu-link" href="/nosotros">Nosotros</a></li>
            <li><a className="menu-link" href="/contacto">Contacto</a></li>
            {/*<li><CartWidget /></li>*/}
        </ul>
    </nav>
  )
}

export default Navbar; 

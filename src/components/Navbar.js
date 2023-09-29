import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
                <h1 className="navbar-title">Tienda</h1>
            </Link>

            <Link to="/carrito">
                <button className="carrito-button">
                    Carrito 
                </button>
            </Link>

        </div>
    )
}

export default Navbar
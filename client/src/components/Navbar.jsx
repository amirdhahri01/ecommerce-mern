import React from 'react'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light px-3">
            <a className="navbar-brand" href="#!">Amir Shop</a>
s            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
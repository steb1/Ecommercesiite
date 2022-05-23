import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 fixed-top">
    <div className="container">
        <a className="navbar-brand" href="#"><img src="/images/MarkupTag-white-logo.png" alt="Logo" className="img-fluid" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
                <Link to="/">
                <li className="nav-item">
                    <a className="nav-link text-white" href="Accueil">Accueil</a>
                </li>
                </Link>
                <Link to="/Panier">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Panier</a>
                </li>
                </Link>
                <Link to="/Produits">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Articles
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Chaussures</a></li>
                        <li><a className="dropdown-item" href="#">Qiba</a></li>
                        <li><a className="dropdown-item" href="#">Costumes</a></li>
                        <li><a className="dropdown-item" href="#">Chemises</a></li>
                        <li><a className="dropdown-item" href="#">Sarenes</a></li>
                    </ul>
                </li>
                </Link>bbbbbbbbbb                               
                <Link to="/contact">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                </li>
                </Link>
            </ul>
            <div className="d-flex">
                <Link to="/inscription">
            <button className="btn btn-info ms-3 text-white "><a class='log' href="#">S'inscrire</a></button>
            </Link>
            <Link to="/connection">
                <button className="btn btn-info ms-3 text-white"><a href="#" class='log'> Se connecter</a></button>
            </Link>
                <button className="btn btn-warning ms-3"><a href="#" class='log'>Panier</a></button>
            </div>
        </div>
    </div>
</nav>
    </div>
    )
  }
}
 
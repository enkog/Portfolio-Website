import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="mx-5 mb-5">
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand"><img src={logo} alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">{'</Intro>'}</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link" aria-current="page">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './navbar.css';

function Navbar1() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                    <a href="##" className="navbar-brand text-light">
                        <span className="text-info">PRe</span> Space
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="##" className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="##" className="nav-link">Technology</a>
                            </li>
                            <li className="nav-item">
                                <a href="##" className="nav-link">Galaxy</a>
                            </li>
                            <li className="nav-item">
                                <a href="##" className="nav-link">Satellite</a>
                            </li>
                            <li className="nav-item">
                                <a href="##" className="nav-link">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="##" className="nav-link">Contact</a>
                            </li>
                            <li>
                                <button className="btn btn-outline-dark" type="submit">Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar1;

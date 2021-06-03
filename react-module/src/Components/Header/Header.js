import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {    
    const change = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        navbarLinks.classList.toggle('active')
    }
    return(
        <div className="container">
            <nav className="navbar">
                <div className="brand-title">
                    <Link to="./">
                        <div>LOGO</div>
                    </Link>
                </div>
                <a href="#" className="toggle-button" onClick={() => {change()}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <Link to="./register">
                                <div>Register</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="./login">
                                <div>Login</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="./profile">
                                <div>Profile</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="./seed">
                                <div>Seed</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="./search">
                                <div>Search</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>    
    )
}

export default Header;
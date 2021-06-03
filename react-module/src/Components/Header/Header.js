import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {    

    return(
        <div className="container">
            <Link to="./">
                <div>LOGO</div>
            </Link>
            <Link to="./login">
                <div>Login</div>
            </Link>
            <Link to="./register">
                <div>Register</div>
            </Link>
            <Link to="./search">
                <div>Search</div>
            </Link>
            <Link to="./profile">
                <div>Profile</div>
            </Link>
            <Link to="./seed">
                <div>Seed</div>
            </Link>
        </div>    
    )
}

export default Header;
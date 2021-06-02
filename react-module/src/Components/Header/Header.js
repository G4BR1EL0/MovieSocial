import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {    

    return(
        <div className="container">
            <Link className="navbar-brand" to="./">
                <div>LOGO</div>
            </Link>
            
            <div>Login</div>
            <div>Register</div>
            <div>Search</div>
        </div>    
    )
}

export default Header;
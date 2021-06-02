import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import { useDispatch } from "react-redux";
import { searchAction } from "../../Store/Actions/searchActions";

const Header = () => {    

    return(
        <div className="container">
            <Link className="navbar-brand" to="./home">
                <div>LOGO</div>
            </Link>
            
            <div>Login</div>
            <div>Register</div>
            <div>Search</div>
        </div>    
    )
}

export default Header;
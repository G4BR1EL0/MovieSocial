import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Header.scss';
import {getUserAction} from "../../Store/Actions/loginActions.js";

const Header = () => {   
    const dispatch = useDispatch();
    const user = useSelector(state => state.user); 
    let [logged, setLogged] = useState(user.name? true : false);
    let [admin, setAdmin] = useState(user.admin? true : false);

    useEffect(() => {
        if(user.name) setLogged(true);
        if(user.admin) setAdmin(true);
    }, [user]);

    const change = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        navbarLinks.classList.toggle('active')
    }
    const logout = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        navbarLinks.classList.toggle('active');
        dispatch(getUserAction({}));
        window.location.reload();
    }

    return(
        <div className="container">
            <nav className="navbar">
                <div className="brand-title">
                    <Link to="./">
                        <div>Movie Social</div>
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
                            <Link to="./search" onClick={() => {change()}}>
                                <div>Search</div>
                            </Link>
                        </li>
                        {!logged && 
                        <>
                            <li>
                                <Link to="./register" onClick={() => {change()}}>
                                    <div>Register</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="./login" onClick={() => {change()}}>
                                    <div>Login</div>
                                </Link>
                            </li>
                        </>
                        }
                        {logged && 
                        <>
                            <li>
                                <Link to="./profile" onClick={() => {change()}}>
                                    <div>Profile</div>
                                </Link>
                            </li>
                        </>
                        }
                        {admin &&
                            <> 
                            <li>
                                <Link to="./seed" onClick={() => {change()}}>
                                    <div>Seed</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="./moviesCrud" onClick={() => {change()}}>
                                    <div>MovieCrud</div>
                                </Link>
                            </li>
                            </>
                        }
                        {logged && 
                        <>
                            <li>
                                <Link to="./" onClick={() => {logout()}}>
                                    <div>Logout</div>
                                </Link>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </nav>
        </div>    
    )
}

export default Header;
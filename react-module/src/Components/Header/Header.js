import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {   
    const user = useSelector(state => state.user); 
    let [logged, setLogged] = useState(user.name? true : false);
    let [admin, setAdmin] = useState(user.admin? true : false);

    console.log(user);

    useEffect(() => {
        if(user.name) setLogged(true);
        if(user.admin) setAdmin(true);
    }, [user]);

    
    console.log(logged);
    const change = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        navbarLinks.classList.toggle('active')
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
                            <li>
                                <Link to="./profile" onClick={() => {change()}}>
                                    <div>Profile</div>
                                </Link>
                            </li>
                        }
                        {admin && 
                            <li>
                                <Link to="./seed" onClick={() => {change()}}>
                                    <div>Seed</div>
                                </Link>
                            </li>
                        }
                        <li>
                            <Link to="./search" onClick={() => {change()}}>
                                <div>Search</div>
                            </Link>
                            
                        </li>
                        <li>
                            <input type="text"></input>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>    
    )
}

export default Header;
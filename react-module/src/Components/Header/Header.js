import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import { useDispatch } from "react-redux";
import { searchAction } from "../../Store/Actions/searchActions";


export function Header(){
    const dispatch = useDispatch();
    const setSeaarchCriteria = (criterio) => {
        dispatch(searchAction(criterio));
    };

    return(
        <div className="container">
            <div>LOGO</div>
            <div>Login</div>
            <div>Register</div>
            <div>Search</div>
        </div>    
    )
}
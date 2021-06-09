import React from "react";
import './Button.scss';

const MovieCrudPage = (props) => {
    return(
        <button onClick={props.action} className="main-button">
            {props.text}
        </button>
    )
}

export default MovieCrudPage;
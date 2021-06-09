import React from "react";
import './BoxMovie.scss';

function BoxMovie(props){

    return(
        <div className="boxMF">
            <div className="cntPoster" onClick={() =>props.funcion(props.peli)}>
                <img src={ props.ruta } className="imgMF" alt=""></img>
                <div className="box-shadow"></div>
            </div>
        </div>
    )
}

export default BoxMovie;
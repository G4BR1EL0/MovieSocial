import React from "react";
import './ValorationCard.scss'

const ValorationCard = (props) => {
    
    return(
        <div className="valoration_container">
            <div className="valoration_image">
                <img 
                    src={`https://image.tmdb.org/t/p/original/${props.ruta}`} 
                    alt="fondo" 
                    className="img-valoration"/>
            </div>
            <div className="valoration_contend">
                <div className="valoration_title">{props.title}</div>
                <div><span className="cursive">by </span>"{props.user}"</div>
                <div>"{props.comment}"</div>
                <div>{props.stars}</div>                
            </div>
        </div>
           
    )
}

export default ValorationCard;
import React, { useState, useEffect } from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import './Valoration.scss'

const Valoration = () => {
    let [valorations, setValorations] = useState([]);
    let [pintar, setPintar] = useState(false);
    useEffect(() => {
        const getValoration = async() => {
            let result= await ApiConsumer.getValoration();
            console.log(result.respuesta);
            if(result.respuesta.length>0){
                console.log(result+"sfsldjnousdbn");
                setValorations(result.respuesta);
                setPintar(true);
            }
            
        }      
        getValoration();  
    }, [])
    
    return(
        <div className="valoration_body">
            {pintar && valorations.map((valoration, index) => {
                return(
                    <>
                    <br/>
                    <div className="valoration_container">
                        <div className="valoration_image">
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${valoration.movie.backdrop_path}`} 
                                alt="fondo" 
                                className="imgMD"/>
                        </div>
                        <div className="valoration_contend">
                            <h4>{valoration.movie.title.toUpperCase()} </h4>
                            by {valoration.user.name}<br/>
                            comment: {valoration.comment}<br/>
                            stars: {valoration.stars}
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    </>
                )
            })}     
        </div>
           
    )
}

export default Valoration;
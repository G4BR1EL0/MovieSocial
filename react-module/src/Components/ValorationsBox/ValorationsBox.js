import React, { useEffect, useState }  from "react";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer.js";
import ValorationCard from '../ValorationCard/ValorationCard.js';

const ValorationsBox = (props) => {
    const user = useSelector(state => state.user);
    let [valorations, setValorations] = useState([]);
    let [editable, setEditable] = useState(props.userId === user._id? true : false);

    let search;
    let data = '';
    if(props.userId){
        search = ApiConsumer.getValorationByUser;
        data = props.userId;
        //si el usuario es el logado colocar boton editar y eliminar
        //al hacer click en editar incluir valoracion en el store con los datos necesarios
        //al hacer click en eliminar borrar la valoracion y recargar las valoraciones
    }
    if(props.movie){
        search = ApiConsumer.getValorationByMovie;
        data = props.movie;
        //setData(props.movie);
    }
    if(props.recent){
        search = ApiConsumer.getValorations;
    }

    useEffect(() => {
        const getValoration = async() => {
            let result= await search(data);
            if(result.respuesta.length>0){
                setValorations(result.respuesta);
            }
        }      
        getValoration();  
    }, [])

    return(
        <div className="box-container">            
            {valorations.map((valoration, index) => {
                if(editable){
                    return(
                        <ValorationCard 
                        key={index} 
                        valoration = {valoration}
                        ruta={valoration.movie.backdrop_path} 
                        title={valoration.movie.title.toUpperCase()}
                        user={valoration.user.name} 
                        comment = {valoration.comment}
                        stars = {valoration.stars}/>
                    )
                }
                return(
                    <ValorationCard 
                    key={index} 
                    ruta={valoration.movie.backdrop_path} 
                    title={valoration.movie.title.toUpperCase()}
                    user={valoration.user.name} 
                    comment = {valoration.comment}
                    stars = {valoration.stars}/>
                )
            })}
        </div>
    )
}

export default ValorationsBox;
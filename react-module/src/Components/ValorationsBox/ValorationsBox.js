import React, { useEffect, useState }  from "react";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer.js";
import ValorationCard from '../ValorationCard/ValorationCard.js';
import './ValorationsBox.scss';

const ValorationsBox = (props) => {
    const user = useSelector(state => state.user);
    let [valorations, setValorations] = useState([]);
    let [editable, setEditable] = useState(props.userId === user._id? true : false);
    let [recharge, setRecharge] = useState(false);

    let search;
    let data = '';
    if(props.userId){
        search = ApiConsumer.getValorationByUser;
        data = props.userId;
        //si el usuario es el logado colocar boton editar y eliminar
        //al hacer click en editar incluir valoracion en el store con los datos necesarios
        //al hacer click en eliminar borrar la valoracion y recargar las valoraciones
    }else if(props.movie){
        search = ApiConsumer.getValorationByMovie;
        data = props.movie;
        //setData(props.movie);
    } else {
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
    }, []);

    useEffect(() => {
        const getValoration = async() => {
            let result= await search(data);
            if(result.respuesta.length>0){
                setValorations(result.respuesta);
            }
        }      
        getValoration();
    }, [recharge]);

    const reload = () => {
        let value = recharge;
        value = !value;
        console.log(value);
        setRecharge(value);
    }

    return(
        <div className="box-container">            
            {valorations.map((valoration, index) => {
                if(editable){
                    return(
                        <div key={index}>
                        <ValorationCard 
                        key={index} 
                        fecha={valoration.datetime}
                        recharge = {reload}
                        valoration = {valoration}
                        ruta={valoration.movie.backdrop_path} 
                        title={valoration.movie.title.toUpperCase()}
                        user={valoration.user.name} 
                        comment = {valoration.comment}
                        stars = {valoration.stars}/>
                        <br/>
                        </div>
                    )
                }
                return(
                    <div key={index}>
                    <ValorationCard 
                    key={index} 
                    fecha={valoration.datetime}
                    ruta={valoration.movie.backdrop_path} 
                    title={valoration.movie.title.toUpperCase()}
                    user={valoration.user.name} 
                    comment = {valoration.comment}
                    stars = {valoration.stars}/>
                    <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default ValorationsBox;
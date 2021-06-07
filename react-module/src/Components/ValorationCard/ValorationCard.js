import React, { useState } from "react";
import './ValorationCard.scss';
import { valorationAction } from '../../Store/Actions/valorationAction.js';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import ApiConsumer from "../../Util/ApiConsumer";

const ValorationCard = (props) => {
    let [editable, setEditable] = useState(props.valoration? true : false);
    const dispatch = useDispatch();
    const history = useHistory();
    const editValoration = (valoration) => {
        dispatch(valorationAction(valoration));
        history.push('/editValoration');
        
    }
    const deleteValoration =  async (valoration) => {
        if(window.confirm('Are you sure want to delete Valoration?')){
            let respuesta = await ApiConsumer.deleteValoration(valoration._id);
            if(respuesta){
                console.log(respuesta);
                props.recharge();
            }
        }
    }
    
    return(
        <div className="valoration_container">
            <div className="valoration_image">
                <img 
                    src={`https://image.tmdb.org/t/p/original/${props.ruta}`} 
                    alt="fondo" 
                    className="img-valoration"/>
            </div>
            <div className="valoration_contend" >
                <div className="valoration_title">{props.title}</div>
                <div><span className="cursive">by </span>"{props.user}"</div>
                <div>"{props.comment}"</div>
                <div>{props.stars}</div>                
            </div>
            {editable && 
            <div>
                <button onClick = {() =>{editValoration(props.valoration)}}>edit</button>
                <button onClick = {() =>{deleteValoration(props.valoration)}}>delete</button>
            </div>
            }
        </div>
    )
}

export default ValorationCard;
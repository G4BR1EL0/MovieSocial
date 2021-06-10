import React, { useState } from "react";
import './ValorationCard.scss';
import { valorationAction } from '../../Store/Actions/valorationAction.js';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import ApiConsumer from "../../Util/ApiConsumer";
import LargeButton from "../LargeButton/LargeButton";
import { movieAction } from '../../Store/Actions/movieActions.js';
import StarRatingComponent from 'react-star-rating-component';

const ValorationCard = (props) => {
    let [editable, setEditable] = useState(props.valoration? true : false);
    const dispatch = useDispatch();
    const history = useHistory();
    const editValoration = (valoration) => {
        dispatch(valorationAction(valoration));
        dispatch(movieAction(valoration.movie));
        history.push('/valorationForm');
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

    //change datetime '2021-06-08T20:08:08.566Z' to '08/06/21'
    let fecha=props.fecha.substring(2,10).split("-").reverse().join("/");
    
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
                <div><span className="cursive valoration-date">{fecha}</span> <span className="cursive">by </span>"{props.user}"</div>
                <StarRatingComponent
                    name="rate1" 
                    starCount={5}
                    value={props.stars}
                    starColor='#38ef7d'
                    editing={false}
                 />
                <div>"{props.comment}"</div>
                <br/>
                {editable && 
                <div>
                    <LargeButton text="Edit" action={editValoration} param={props.valoration}/>
                    <LargeButton text="Delete" action={deleteValoration} param={props.valoration}/>
                </div>
                }                
            </div>
        </div>
    )
}

export default ValorationCard;
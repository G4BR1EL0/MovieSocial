import React, { useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";
import { useHistory } from "react-router";
import TextArea from "../TextArea/TextArea";
import LargeButton from "../LargeButton/LargeButton";
import DivisionTitle from "../DivisionTitle/DivisionTitle";
import StarRatingComponent from 'react-star-rating-component';
import './ValorationForm.scss'


const ValorationForm = () => {
    const valoration = useSelector(state => state.valoration);
    const user = useSelector(state => state.user);
    const movie = useSelector(state => state.movie);
    const token = useSelector(state => state.token);
    
    const history = useHistory();
    let [editable, setEditable] = useState(valoration.comment? true : false); 
    let [comment, setComment] = useState(valoration.comment? valoration.comment:''); 
    let [stars, setStars] = useState(valoration.stars? valoration.stars : 0); 
    if(!movie.title)
        history.push('/');
    const handleSubmit = async (e) => {
        e.preventDefault();
        let valorationAdd = {};
        valorationAdd.id = valoration._id? valoration._id : '';
        valorationAdd.movie = movie._id;
        valorationAdd.user = user._id;
        valorationAdd.comment = comment;
        valorationAdd.stars = stars;
          
        let respuesta 
        if(valoration._id)
            respuesta= await ApiConsumer.updateValoration(valorationAdd, token.jwt); 
        else
            respuesta= await ApiConsumer.insertValoration(valorationAdd, token.jwt); 

        if (respuesta){
            history.push('/profile');
        };     
    }
    const deleteValoration = async (valoration) => {
        if(window.confirm('Are you sure want to delete Movie?')){
            let respuesta = await ApiConsumer.deleteValoration(valoration._id, token.jwt);
            if(respuesta){
                history.push('/profile');
            }
        }
    }
    
    const goBack = () => {
        history.push('/profile');
    }
    const goBackDetail = () => {
        history.push('/movieDetail');
    }

    return(
        <div className="valoration-form-container">
        <form onSubmit={handleSubmit}>
            {editable && 
                <DivisionTitle text={"Edit valoration of " + valoration.movie.title} />
            }
            {!editable && 
                <DivisionTitle text={"Add valoration of " + movie.title} />
            }
            <div className="container-stars">
                <StarRatingComponent
                    className={"stars"}
                    name="rate1" 
                    starCount={5}
                    value={stars}
                    starColor='#38ef7d'
                    onStarClick={(nextValue, prevValue, nname) => { setStars(nextValue)}}
                 />
            </div>
            <div className="text-area-container">
                <TextArea
                    label="write your valoration here"
                    name="valoration"
                    value= {comment}
                    setter={setComment}
                />
             </div>
            <br/>
            <div className="valoration-form-button">
                <LargeButton typeButton="submit" text="Save"/>  
                {editable &&
                <>
                    <LargeButton action={deleteValoration} param={valoration} text="Delete" />
                    <LargeButton text="Return" action={goBack}/>
                </>
                } 
                {!editable &&
                <>
                    <LargeButton text="Return" action={goBackDetail}/>
                </>
                } 
                
            </div>
        </form>
        </div>
    )
}

export default ValorationForm;
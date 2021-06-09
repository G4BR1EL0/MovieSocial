import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";
import { useHistory } from "react-router";
import TextArea from "../TextArea/TextArea";


const ValorationForm = () => {
    const valoration = useSelector(state => state.valoration);
    const history = useHistory();
    let [comment, setComment] = useState(''); 
    let [stars, setStars] = useState(0); 
    useEffect(() => {
        setComment(valoration.comment);
        setStars(valoration.stars);
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let valorationAdd = {};
        valorationAdd.id = valoration._id;
        valorationAdd.movie = valoration.movie._id;
        valorationAdd.user = valoration.user._id;
        valorationAdd.comment = comment;
        valorationAdd.stars = stars;
          
        let respuesta = await ApiConsumer.updateValoration(valorationAdd); 
        if (respuesta){
            history.push('/profile');
            //llevar a profile y mostrar la ultima valoracion más visible que el resto 
            //mensaje exito
        };     
    }
    //texare con el contenido de la valoracion, un campo con la cantidad de estrellas
    //insertar los campos de la valoracion
    //usar el user y la movie del store
    //al incluir una valoracion, vaciar el textaera las estrellas y dar mensaje de exito

    return(
        <form onSubmit={handleSubmit}>
            <div>{valoration.movie.title} </div>
            <TextArea
                placeholder="write your valoration here"
                name="valoration"
                value= {comment}
                setter={setComment}
             />
            <div>
                <input 
                    className ="estrellas"
                    type="number"
                    name="stars"
                    value={stars}
                    onChange = {e => {setStars(e.target.value)}}
                    required
                     >
                </input>
            </div>
            <div><button type="submit">Save</button></div>
        </form>
    )
}

export default ValorationForm;
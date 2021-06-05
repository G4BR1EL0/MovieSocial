import React, { useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";

const AddValoration = () => {
    let [comment, setComment] = useState('');
    let [starts, setStars] = useState(0);
    const user = useSelector(state => state.user);
    const movie = useSelector(state => state.movie);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let valoration = {};
        valoration.movie = movie._id;
        valoration.user = user._id;
        valoration.comment = comment;
        valoration.starts = starts;
          
        let respuesta = await ApiConsumer.insertValoration(valoration); 
        if (respuesta){
            setComment('');
            setStars(0);
            //llevar a home y mostrar la ultima valoracion más visible que el resto si es la tuya
            //mensaje exito
        };     
    }
    //texare con el contenido de la valoracion, un campo con la cantidad de estrellas
    //insertar los campos de la valoracion
    //usar el user y la movie del store
    //al incluir una valoracion, vaciar el textaera las estrellas y dar mensaje de exito

    return(
        <form onSubmit={handleSubmit}>
            <div className="form__group field">
                <textarea 
                    className="form__field" 
                    placeholder="write your valoration here"
                    name="valoration"
                    onChange={e => {setComment(e.target.value)}}
                    required ></textarea>
                <label htmlFor='name' className="form__label">write your valoration here</label>
            </div>
            <div>
                <input 
                    className ="estrellas"
                    type="number"
                    name="stars"
                    onChange = {e => {setStars(e.target.value)}}
                    required
                     >
                </input>
            </div>
            <div><button type="submit">Save</button></div>
        </form>
    )
}

export default AddValoration;
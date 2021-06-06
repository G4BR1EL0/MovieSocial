import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";

const EditValoration = () => {
    const valoration = useSelector(state => state.valoration);
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
            setComment('');
            setStars(0);
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
            <div className="form__group field">
                <textarea 
                    className="form__field" 
                    placeholder="write your valoration here"
                    name="valoration"
                    value={comment}
                    onChange={e => {setComment(e.target.value)}}
                    required ></textarea>
                <label htmlFor='name' className="form__label">write your valoration here</label>
            </div>
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

export default EditValoration;
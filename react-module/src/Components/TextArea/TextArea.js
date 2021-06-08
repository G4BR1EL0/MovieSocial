import React from "react";
import './TextArea.scss';

const TextArea = ({ label, setter, name, value}) => {
    const action = (e) => {
        setter(e.target.value)
    }
    return(
        <div className="form__group field">
            <textarea 
                className ="form__field" 
                placeholder ={label} 
                name ={name}
                rows ="5" 
                cols ="100"
                maxLength ="1000"
                autoComplete="off" 
                value= {value}
                onChange={action}
                required 
            ></textarea>
            <label htmlFor='name' className="form__label">{label}</label>
        </div>
    )
}

export default TextArea;
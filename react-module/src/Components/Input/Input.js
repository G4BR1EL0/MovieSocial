import React from "react";
import './Input.scss';

const Input = ({type, label, setter, name, value}) => {
    const action = (e) => {
        setter(e.target.value)
    }
    return(
        <div className="form__group field">
            <input 
                type={type}
                className="form__field" 
                placeholder={label} 
                name={name}
                autoComplete="off" 
                value= {value}
                onChange={action}
                required 
            />
            <label htmlFor='name' className="form__label">{label}</label>
        </div>
    )
}

export default Input;
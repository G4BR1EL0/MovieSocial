import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Register.scss';
import Input from "../Input/Input";
import LargeButton from "../LargeButton/LargeButton";

const Register = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let respuesta = await ApiConsumer.register(name, email, password);
        if (respuesta) history.push('/login');
    }    
    const token = useSelector(state => state.token.jwt);

    if (token) {
        console.log("redireccionar home")
        history.push('/');
    }
    
    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <div className="register-box">
                    <div className="register-title">
                        <label>Register</label>
                    </div>
                    <Input 
                        type='text'
                        label='Name'
                        setter={setName}    
                        name='name'
                    />
                    <Input 
                        type='email'
                        label='Email'
                        setter={setEmail}    
                        name='email'
                    />
                    <Input 
                        type='password'
                        label='Password'
                        setter={setPassword}    
                        name='password'
                    />
                    <div className="register-button">
                        <LargeButton text="Send" typeButton="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register;
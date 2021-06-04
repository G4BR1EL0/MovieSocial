import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Register.scss';

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
                    <div className="row">
                        <div><label>name: </label></div>
                        <div>
                            <input type="text" 
                            placeholder="Name"
                            name="name" 
                            onChange={e => setName(e.target.value)} required></input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="row">
                        <div><label>email: </label></div>
                        <div>
                        <input  type="email" placeholder="E-mail" 
                        name="email" onChange={e => setEmail(e.target.value)} required></input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="row">
                        <div><label>password: </label></div>
                        <div>
                        <input type="password" placeholder="Password" 
                        name="password" onChange={e => setPassword(e.target.value)} required></input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="register-button">
                        <button type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register;
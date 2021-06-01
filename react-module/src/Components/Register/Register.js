import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    
    return(
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text" placeholder="Name"
                name="name" onChange={e => setName(e.target.value)} required></input>
        
            <label >email:</label>
            <input  type="email" placeholder="E-mail" 
                name="email" onChange={e => setEmail(e.target.value)} required></input>
        
            <label >password:</label>
            <input type="password" placeholder="Password" 
            name="password" onChange={e => setPassword(e.target.value)} required></input>
            
            <button type="submit">Registrar</button>
        </form>
    )
}
export default Register;
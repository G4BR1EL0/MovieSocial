import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './Profile.scss';
import Input from "../Input/Input";

const Profile = (props) => {
    let [name, setName] = useState(props.user? props.user.name : ''); 
    let [email, setEmail] = useState(props.user? props.user.email : '');
    let [password, setPassword] = useState(props.user? props.user.password : '');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        let respuesta = await ApiConsumer.updateUser(props.user._id, name, email, password);
        console.log(respuesta)
    }    

    const history = useHistory();
    const token = useSelector(state => state.token.jwt);
    if (!token) {
        history.push('/');
    }
    
    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <div className="register-box">
                    <div className="register-title">
                        <label>Profile</label>
                    </div>
                    <Input 
                        type = 'text'
                        label = 'Name'
                        value = {name}
                        setter = {setName}    
                        name = 'name'
                    />
                    <Input 
                        type = 'email'
                        label = 'Email'
                        value = {email}
                        setter = {setEmail}    
                        name = 'email'
                    />
                    <Input 
                        type ='password'
                        label ='Password'
                        value = {password}
                        setter = {setPassword}    
                        name = 'password'
                    />
                    <div className="register-button">
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Profile;
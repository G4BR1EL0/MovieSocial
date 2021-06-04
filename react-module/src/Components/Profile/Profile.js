import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.scss';

const Profile = (props) => {
    let [name, setName] = useState(props.user? props.user.name : ''); 
    let [email, setEmail] = useState(props.user? props.user.email : '');
    let [password, setPassword] = useState(props.user? props.user.password : '');
    
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        let respuesta = await ApiConsumer.updateUser(props.user._id, name, email, password);
        console.log(respuesta)
    }    
    
    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <div className="register-box">
                    <div className="register-title">
                        <label>Profile</label>
                    </div>
                    <div className="row">
                        <div><label>name: </label></div>
                        <div>
                            <input type="text" 
                            placeholder="Name"
                            name="name" 
                            value={name}
                            onChange={e => setName(e.target.value)} required></input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="row">
                        <div><label>email: </label></div>
                        <div>
                            <input  type="email" 
                            placeholder="E-mail" 
                            name="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)} required></input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="row">
                        <div><label>password: </label></div>
                        <div>
                            <input type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} required></input>
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
export default Profile;
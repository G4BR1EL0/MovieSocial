import React,{ useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import apiLogin from '../../Store/Services/apiLogin';
import './Login.scss'
import Input from '../Input/Input';

const Login = () => {        
    const dispatch = useDispatch();
    const history = useHistory();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");    

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(apiLogin(email, password));        
    }
    const token = useSelector(state => state.token.jwt);
    if (token) {
        console.log("redireccionar home")
        history.push('/');
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-box">
                    <div className="login-title">
                        <label>Login</label>
                    </div>
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
                    <div className="login-button">
                        <button type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
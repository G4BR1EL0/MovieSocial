import React,{ useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import apiLogin from '../../Store/Services/apiLogin';
import './Login.scss'
import Input from '../Input/Input';
import LargeButton from '../LargeButton/LargeButton';

const Login = () => {        
    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.token);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");  
    let [error, setError] = useState(false)  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(token.error) setError(true);
        dispatch(apiLogin(email, password));        
    }
    
    if (token.jwt) {
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
                        {error &&
                        <p className="error">Wrong credentials</p>}
                    <div className="login-button">
                        <LargeButton text="Send" typeButton="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
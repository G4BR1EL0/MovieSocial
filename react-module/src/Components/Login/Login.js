import React,{ useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import apiLogin from '../../Store/Services/apiLogin';
import './Login.scss'

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
                    <div className="row">
                        <div><label>email: </label></div>
                        <div>
                            <input type="email" 
                            placeholder="email" 
                            onChange={e => setEmail(e.target.value)}>
                                </input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="row">
                        <div><label >password: </label></div>
                        <div>
                        <input type="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}>                            
                        </input>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className="login-button">
                        <button type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
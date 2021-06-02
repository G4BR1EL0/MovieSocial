import React,{ useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import apiLogin from '../../Store/Services/apiLogin';

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
        <form onSubmit={handleSubmit}>              
            <label>email:</label>
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        
            <label >password:</label>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>

            <button type="submit">Login</button>
        
        </form>
    )
}

export default Login;
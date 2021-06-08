import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import valorationReducer from './valorationReducer';


const mainReducer = combineReducers({
    token: loginReducer,
    user: userReducer,
    movie: movieReducer,
    valoration: valorationReducer
}) 

export default mainReducer;
import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import valorationReducer from './valorationReducer';


const mainReducer = combineReducers({
    token: loginReducer,
    user: userReducer,
    movie: movieReducer,
    criteria: searchReducer,
    valoration: valorationReducer
}) 

export default mainReducer;
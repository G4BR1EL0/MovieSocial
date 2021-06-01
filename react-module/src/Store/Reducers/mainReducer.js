import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer'

const mainReducer = combineReducers({
    token: loginReducer,
    user: userReducer,
    movie: movieReducer,
    criteria: searchReducer
}) 

export default mainReducer;
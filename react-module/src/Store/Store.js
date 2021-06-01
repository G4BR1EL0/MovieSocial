import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from './Reducers/mainReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

let store = createStoreWithMiddleware(
    mainReducer,
    {}, 
    devToolsEnhancer({ trace: true}) || compose
)

export default store;
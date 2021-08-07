import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {reducerUserData} from './reducerUser';

const rootReducer = combineReducers({
    usersData:reducerUserData
})

// if(process.env.NODE_ENV === "developement"){
//     applyMiddleware.push(logger);
// }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)))

export default store


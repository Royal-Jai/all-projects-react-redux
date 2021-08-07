import { combineReducers, createStore, compose } from "redux";
import {userReducer} from '../redux/reducer/dataReducer';
import { applyMiddleware } from "redux";
import {logger} from 'redux-logger';
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
   userReducer:userReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(logger, thunk))
)

export default store
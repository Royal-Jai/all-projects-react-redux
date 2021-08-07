import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {dataReducer} from './reducer/reducerData';
const rootReducer = combineReducers({
    reducerData:dataReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
      ));
export default store
import { combineReducers, createStore } from "redux";
import {setProductReducer} from './reducer/productReducer'
const rootReducer = combineReducers({
    productData:setProductReducer,
})
const store = createStore(
    rootReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
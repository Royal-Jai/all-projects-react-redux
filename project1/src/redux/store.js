import { combineReducers, createStore } from "redux";
import {productReducer} from "./reducer/productReducer";
import { newProductReducer } from "./reducer/productReducer";
const rootReducer = combineReducers({
    productReducer :productReducer,
    newProductReducer: newProductReducer

})
const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
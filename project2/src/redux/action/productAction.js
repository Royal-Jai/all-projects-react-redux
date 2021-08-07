import {SET_PRODUCT} from '../type/productType'
export const setProduct = (formdata) => {
    return function(dispatch){
       dispatch({
        type: SET_PRODUCT,
        payload: formdata
       })
    }
}
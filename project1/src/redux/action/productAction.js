import {SET_PRODUCT, SET_INCREMENT_PRODUCT, SET_RESET, SET_NEW_PRODUCT} from '../type/productType'

 export const productAction = () =>{
    return{
        type:SET_PRODUCT
    }
}
export const incrementProductionAction = () =>{
    return{
        type:SET_INCREMENT_PRODUCT
    }
}
export const resetProductionAction = () =>{
    return{
        type:SET_RESET
    }
}
 export const newProductAction = () => {
     return{
         type:SET_NEW_PRODUCT
     }
 }

// export default (productAction, newProductAction)
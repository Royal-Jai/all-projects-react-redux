import {SET_PRODUCT,SET_INCREMENT_PRODUCT,SET_RESET, SET_NEW_PRODUCT} from '../type/productType'

const initialProduct = {
    numOfProducts:100
}

const initialNewProduct = {
     message:'Galla'
}

 export const productReducer = (state = initialProduct, action ) => {
  switch(action.type){
      case SET_PRODUCT:
          return{
            numOfProducts:state.numOfProducts - 1
          }
      case SET_INCREMENT_PRODUCT:
        return{
          numOfProducts:state.numOfProducts + 1
        }
      case SET_RESET:
        return{
          ...state,
          numOfProducts:state.numOfProducts = 100
        }
      default:
          return state
  }
}

export const newProductReducer = (state = initialNewProduct, action) => {
  switch(action.type){
    case SET_NEW_PRODUCT:
      return{
        ...state,
        message: state.message = 'Jaya'
      }
    default:
      return state;
  }
}


import {GET_DETAILS} from '../type/typeData'
const initialData = {
    productData:[]
}

export const dataReducer = (state = initialData , {type, payload}) => {
   switch(type){
       case GET_DETAILS:
           return {
               ...state,
            productData:payload
           }
        default: return state;
   }
}
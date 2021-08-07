import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "../type/dataType";

const initialUser = {
    user:[],
    error:'',
    isLoading:false
}

export const userReducer = (state = initialUser, {type, payload}) => {
   switch(type){
       case FETCH_USER_REQUEST:
           return{
              ...state,
              isLoading:true
           }
       case FETCH_USER_SUCCESS:
           return{
            isLoading:false,
            user:payload,
            error:''
           } 
        case FETCH_USER_FAIL:
            return{
                isLoading:false,
                user:[],
                error:payload
            }
       default:
           return state;
   }
}
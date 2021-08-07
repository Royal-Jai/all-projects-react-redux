import {SET_USER, DELETE_USER, ADD_USER_DATA, EDIT_USER, UPDATE_USER} from './actionUserType'
const initialUser = {
    users:[],
    user:{},
    loading:false

}

export const reducerUserData = (state = initialUser, action) => {
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case DELETE_USER:
            return{
                ...state,
                loading:false
            }
        case ADD_USER_DATA:
        case UPDATE_USER:
            return{
                ...state,
                loading:false
        }
        case EDIT_USER:
            return{
                ...state,
                user:action.payload,
                loading:false
        }

        default: return state;
    }
}
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL} from '../type/dataType';
import axios from 'axios'

export const fetchUserRequest = () => {
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (user) => {
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}

export const fetchUserFail = (error) =>{
    return{
        type:FETCH_USER_FAIL,
        payload:error
    }
}

export const fetchUserData = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res =>{
                const datares = res.data
                dispatch(fetchUserSuccess(datares))
             })
             .catch(error =>{
                 const errMes = error.message
                 dispatch(fetchUserFail(errMes)) 
             })
    }
}
import axios from 'axios'
import {SET_USER, DELETE_USER, ADD_USER_DATA, EDIT_USER, UPDATE_USER} from '../redux/actionUserType'

export const userData = (usersdata) => ({
        type:SET_USER,
        payload:usersdata,
})



export const getUserData = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API}`)
             .then(res => {
                 console.log('res', res)
                dispatch(userData(res.data))
             })
             .catch(err => {
                 console.log(err)
             })
    }
}

export const deleteData = () =>({
    type:DELETE_USER
})

export const deleteUserData = (id) => {
    return (dispatch) => {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
             .then((res) =>{
                 dispatch(deleteData());
                 dispatch(getUserData());
             })
             .catch(err =>{
                 console.log(err)
             })
    }
}

export const addUserData = () =>({
    type:ADD_USER_DATA
})

export const postUserData = (user) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_API}`, user)
             .then((res) =>{
                 dispatch(addUserData());
                 dispatch(getUserData());
             })
             .catch(err =>{
                 console.log(err)
             })
    }
}


const editdata = (user) => {
    return{
     type:EDIT_USER,
     payload:user
    }
}

export const editUserData = (id) => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
             .then((res) =>{
                 dispatch(editdata(res.data));
                //  dispatch(getUserData());
             })
             .catch(err =>{
                 console.log(err)
             })
    }
}

const updateUser = () => {
    return{
        type:UPDATE_USER
    }
}

export const updateUserData = (user,id) => {
    return (dispatch) => {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
             .then((res) =>{
                 dispatch(updateUser(res.data));
                //  dispatch(getUserData());
             })
             .catch(err =>{
                 console.log(err)
             })
    }
}

import {GET_DETAILS} from '../type/typeData'
// import axios from 'axios'
// import { useDispatch } from 'react-redux'
export const dataAction = (dataformate) => {
  return{
      type:GET_DETAILS,
      payload:dataformate
  }
}

// export const dataLoad = () => {
    
//     return (dispatch) => {
//          return (
//             axios.get('https://jsonplaceholder.typicode.com/posts')
//                 .then((res) => {
//                    dispatch(dataAction(res.data))
//             })
//          )
//     }
// }
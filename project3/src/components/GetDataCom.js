import React, { useEffect } from 'react'
import axios from 'axios'
import {dataAction} from '../redux/action/actionData'
import { useDispatch, useSelector } from 'react-redux'
const GetDataCom = () => {
    const productid = useSelector(state => state.reducerData.productData)
    const dispatch = useDispatch()
    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                 .then((res) => {
                    dispatch(dataAction(res.data))
            })
    })
    return (
        <>
           {
               productid.map(datalist => {
                   const {id, title} = datalist
                   return(
                       <div key={id}>
                          <h2>{title}</h2>
                       </div>
                   )
               })
           }
        </>
    )
}



export default GetDataCom

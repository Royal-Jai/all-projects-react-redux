import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {newProductAction} from '../redux/action/productAction';
function NewProductCom() {
    const productMessage = useSelector(state => state.newProductReducer.message);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Products {productMessage}</h2>
            <button onClick={() =>dispatch(newProductAction())}>Click</button>
        </div>
    )
}

export default NewProductCom

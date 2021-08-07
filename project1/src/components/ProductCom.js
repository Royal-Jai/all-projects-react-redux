import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import {productAction, incrementProductionAction, resetProductionAction} from '../redux/action/productAction'
import { connect } from 'react-redux'
const ProductCom = (props) => {
    // const product = useSelector(state =>state.numOfProducts) 
    // const dispatch = useDispatch()
    return (
        <div>
            <h2>This is Product Page {props.numOfProducts}</h2>
            <button onClick={props.incrementProduct}>Increment</button>
            <button onClick={props.buyProduct}>Decrement</button>
            <button onClick={props.resetProduct}>Reset</button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        numOfProducts:state.productReducer.numOfProducts
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyProduct:() => dispatch(productAction()),
        incrementProduct: () => dispatch(incrementProductionAction()),
        resetProduct:() => dispatch(resetProductionAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ProductCom)

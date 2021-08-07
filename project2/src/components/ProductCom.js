import React from 'react'
import {useSelector } from 'react-redux'
function ProductCom() {
    const products = useSelector(state => state.productData.numOfSetProduct)
    // const dispatch = useDispatch()
    return (
        <div>
            {
               products.map(product  =>(
                   <div key={product.id}>
                       <h2>{product.name}</h2>
                       <h3>{product.title}</h3>
                   </div>
               )) 
            }
        </div>
    )
}

export default ProductCom

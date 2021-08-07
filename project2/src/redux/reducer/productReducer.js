import {SET_PRODUCT} from '../type/productType'
const initialSetProduct = {
    numOfSetProduct:[{
        id:1,
        name:'Galla',
        title:"This is Galla Brand"
    },
    {
        id:2,
        name:'JayaPrakash',
        title:'JP'
    }
]
}

export const setProductReducer = (state = initialSetProduct,action) => {
  switch(action.type){
      case SET_PRODUCT:
          return{
              ...state,
            numOfSetProduct:state.numOfSetProduct.push(action.payload)
          }
      default: return state
  }
}
import { ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "../actions/actionTypes";

let initialState = []

const cartReducer = (state = initialState, action) => {
        
        switch(action.type){
            case ADD_TO_CART: 
               if(state.filter(item => item.id ===   action.payload.id).length == 0){
                  console.log("add to cart", action.payload)
                   return  [...state, action.payload]
               }
               else{ 
                     return state
               }
            case REMOVE_FROM_CART:
                return state.filter(item => item.id !== action.payload)

            case CHECKOUT:
                return []
            default:
                return state
        }

}

export default cartReducer




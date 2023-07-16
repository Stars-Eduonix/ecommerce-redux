import { FETCH_PRODUCTS_LOAD,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE } from "../actions/actionTypes";

let initialState = {
    loading: false,
    products: [],
    error: ""
}


const productReducer = (state = initialState, action) => {
        switch(action.type){
            case FETCH_PRODUCTS_LOAD:
                return {...state, loading: true}
            case FETCH_PRODUCTS_SUCCESS:
                return {...state, loading: false, products: action.payload, error: ""}
            case FETCH_PRODUCTS_FAILURE:
                return {...state, loading: false, products: [], error: action.payload}
            default:
                return state
        }
}

export default productReducer
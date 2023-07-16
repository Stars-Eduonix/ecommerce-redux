import axios from "axios";
import { FETCH_PRODUCTS_LOAD, FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE } from "./actionTypes";

export const fetchProductsLoad = () => {
    return {
        type: FETCH_PRODUCTS_LOAD
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}


export const fetchProducts = () => {
    return  async (dispatch) => {
         dispatch(fetchProductsLoad())

         try{
              const response =  await axios.get("https://dummyjson.com/products")
              dispatch(fetchProductsSuccess(response.data.products))
         }
            catch(error){
                dispatch(fetchProductsFailure(error.message))
            }
    }
}



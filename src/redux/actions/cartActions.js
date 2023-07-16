import { ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "./actionTypes";


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product_id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product_id
    }
}


export const checkout = () => {
    return {
        type: CHECKOUT
    }
}



// let data = [
//     {id: 1, name: "Product 1", price: 100},
//     {id: 2, name: "Product 2", price: 200},
//     {id: 3, name: "Product 3", price: 300},
// ]


// {id: 2, name: "Product 2", price: 200}
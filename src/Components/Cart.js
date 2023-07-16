import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, checkout } from "../redux/actions/cartActions";

const Cart = () => {
    let  cartValues =  useSelector(state => state.cart)
    console.log(cartValues)
    const dispatch = useDispatch()


    return(
        <div>
            <h1>Cart</h1>
            <div className="products">
                {
                    cartValues.length && (
                        cartValues.map(product => (
                            <div key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h2>{product.title}</h2>
                                <h2>{product.price}</h2>
                                <h2>{product.description}</h2>
                                <button
                                    onClick={() => dispatch(removeFromCart(product.id))}
                                > Delete Product </button>
                            </div>
                        )))
                    
                }

            </div>
            <button onClick={() => dispatch(checkout())}>Checkout</button>
        </div>
    )
}

export default Cart;
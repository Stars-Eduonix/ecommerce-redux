import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
import React,{ useEffect} from "react";
import { fetchProducts } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";



const Home = () => {
     const {loading, products, error} = useSelector(state => state.product)
     const cartValues = useSelector(state => state.cart)
     console.log(loading, products, error)
     console.log(cartValues)
     const dispatch = useDispatch()

     useEffect(() => {
           dispatch(fetchProducts())
     },[])

     return(
        <div>
              {
                error ? <h2>{error}</h2> : (
                    <div className="products">

                        {  
                            products.length &&(
                            products.map(product => (
                                <div key={product.id}>
                                    <img src={product.thumbnail} alt={product.title} />
                                    <h2>{product.title}</h2>
                                    <h2>{product.price}</h2>
                                    <h2>{product.description}</h2>
                                    <button onClick={()=>dispatch(addToCart(product))}> AddToCart </button>
                                </div>
                            )))
                        }
                    
                    
                    
                     </div>)
              }
        </div>
     )
}

export default Home;
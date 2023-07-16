import React from "react";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Routes, Route  } from "react-router-dom";
import {Link} from "react-router-dom"
import "./App.css";

const App = () => {
    return(
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
        </div>
    ) 
}

export default App;
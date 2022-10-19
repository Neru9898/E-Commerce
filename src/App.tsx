import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Item from "./Pages/Item";
import Cart from "./Pages/Cart";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "./redux/ActionsTypes";
import { addToCart } from "./redux/cartAction";

function App() {
  // const state: any = useSelector((state) => state);
  // const dispatch = useDispatch();
  // console.log(state);
  return (
    <div className="App">
      <Router>
        <h1 className="text-3xl font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
        <>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/">Home</Link>
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:bookID" element={<Item />} />
          {/* <Route path="/:bookID" element={<Item />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

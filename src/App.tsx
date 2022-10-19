import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Item from "./Pages/Item";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="min-w-[950px] h-screen border-8 border-sky-500 flex flex-col overflow-scroll">
      <Router>
        <div className="w-full h-16 border">
          <div className="px-2 flex items-center w-full h-full ">
            <div className="flex items-center">
              <span className="p-6 text-2xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 ease-in-out">
                <Link to="/">Home</Link>
              </span>
              <span className="p-6 text-2xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 ease-in-out">
                <Link to="/products">Products</Link>
              </span>
              <span className="p-6 text-2xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 ease-in-out">
                <Link to="/cart">Cart</Link>
              </span>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:bookID" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

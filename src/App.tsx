import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Item from "./Pages/Item";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="min-w-[950px] h-screen flex flex-col overflow-scroll bg-ragin-beige">
      <Router>
        <div className="w-full h-24">
          <div className="px-2 flex items-center w-full h-full bg-brightly-orange">
            <div className="flex items-center">
              <span className="header-btn">
                <Link to="/">Home</Link>
              </span>
              <span className="header-btn">
                <Link to="/products">Products</Link>
              </span>
              <span className="header-btn">
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

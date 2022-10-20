import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Item from "./Pages/Item";
import Cart from "./Pages/Cart";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="min-w-[950px] h-screen flex flex-col overflow-scroll bg-ragin-beige">
      <Router>
        <Navbar />
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

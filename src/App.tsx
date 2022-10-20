import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

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

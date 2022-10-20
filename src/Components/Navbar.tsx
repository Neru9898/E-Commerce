import { Link } from "react-router-dom";

//The navbar where it lets the user to move between pages
const Navbar = () => {
  return (
    <div className="w-full h-24 bg-dark-ragin-beige">
      <div className="px-2 flex items-center w-full h-full">
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
  );
};

export default Navbar;

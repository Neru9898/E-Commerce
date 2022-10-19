import React from "react";
import { Link } from "react-router-dom";
import { bookData } from "../data/data";
const Products = () => {
  return (
    <div>
      {bookData.map((book: any) => {
        return (
          <>
            <Link to={`/products/${book.id}`}>
              <img src={book.imgURL} alt="" />{" "}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Products;

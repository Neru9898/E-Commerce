import React from "react";
import { Link } from "react-router-dom";
import { bookData } from "../data/data";
const Products = () => {
  return (
    <div className="border-8 border-sky-500 p-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookData.map((book: any) => {
          return (
            <>
              <Link to={`/products/${book.id}`}>
                <img
                  src={book.imgURL}
                  alt=""
                  className="h-96 w-64 hover:scale-105 ease-in duration-200 border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
                />{" "}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

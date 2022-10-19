import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bookData } from "../data/data";
import { addToCart } from "../redux/cartAction";
const Item = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const currentBook: any = bookData.find(
    (data: any) => data.id === params.bookID
  );

  const [quantity, setQutatity] = useState<number>(1);
  return (
    <div className="flex h-full border-8 border-sky-500">
      <div className="flex flex-col w-2/3 bg-slate-200 rounded-lg m-16 border-8 border-red-600">
        <span>Title: {currentBook.title}</span>
        <span>Author: {currentBook.author}</span>
        Description:<span> {currentBook.description}</span>
      </div>
      <div className="flex flex-col items-center gap-4 w-1/3 my-16 border-8 border-red-600">
        <img
          src={currentBook.imgURL}
          alt={currentBook.title}
          className="h-64 w-64"
        />
        <span>Price: ${currentBook.price}</span>
        <span>Quantity: {quantity}</span>
        {/* <button onClick={() => setQutatity(quantity + 1)}>+</button>
        {quantity > 1 && (
          <button onClick={() => setQutatity(quantity - 1)}>-</button>
        )} */}
        <button
          onClick={() => dispatch(addToCart(currentBook, quantity))}
          className="w-64 bg-slate-400 rounded-lg h-12 hover:bg-sky-700 transition-colors duration-100"
        >
          Add To Cart
        </button>
      </div>{" "}
    </div>
  );
};

export default Item;

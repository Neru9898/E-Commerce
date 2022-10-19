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
    <div>
      {currentBook.title}
      {currentBook.author}
      {currentBook.description}
      {currentBook.price}
      <img src={currentBook.imgURL} alt={currentBook.title} />
      QTY: {quantity}{" "}
      <button onClick={() => setQutatity(quantity + 1)}>+</button>
      {quantity > 1 && (
        <button onClick={() => setQutatity(quantity - 1)}>-</button>
      )}
      <button onClick={() => dispatch(addToCart(currentBook, quantity))}>
        temp
      </button>
    </div>
  );
};

export default Item;

{
  /* <button onClick={() => dispatch(addToCart())}>temp</button> */
}

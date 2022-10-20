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
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-2/3 m-16 gap-6 p-2 bg-dark-ragin-beige text-2xl rounded-lg ">
        <h4>
          <span className="font-bold">Title:</span> {currentBook.title}
        </h4>
        <h4>
          <span className="font-bold">Author: </span>
          {currentBook.author}
        </h4>
        <h4>
          <span className="font-bold">Description:</span>{" "}
          {currentBook.description}
        </h4>
      </div>
      <div className="flex flex-col w-1/3 m-16 gap-4 items-center justify-center">
        <img
          src={currentBook.imgURL}
          alt={currentBook.title}
          className="h-80 w-64"
        />
        <h4 className="text-2xl">Price: ${currentBook.price.toFixed(2)}</h4>
        <h4 className="text-2xl">Quantity: {quantity ? quantity : 1}</h4>
        <input
          type="number"
          inputMode="numeric"
          value={quantity ? quantity : 1}
          onChange={(e) => setQutatity(parseInt(e.target.value))}
        />
        {/* <button onClick={() => setQutatity(quantity + 1)}>+</button>
        {quantity > 1 && (
          <button onClick={() => setQutatity(quantity - 1)}>-</button>
        )} */}
        <button
          onClick={() => {
            dispatch(addToCart(currentBook, quantity));
            setShowModal(true);
          }}
          className="w-64 bg-pink-leaf rounded-lg h-12 hover:bg-coral-pink transition-colors duration-100 hover:text-white"
        >
          Add To Cart
        </button>
      </div>{" "}
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="rounded-lg flex flex-col bg-white">
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-lg leading-relaxed">
                  Producted has been added!
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white font-bold px-6 py-3 rounded "
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default Item;

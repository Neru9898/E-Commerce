import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bookData } from "../data/data";
import { addToCart } from "../redux/Actions/cartAction";
import { isOpenModal } from "../redux/Actions/modalAction";
import Modal from "./Modal";
const Item = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const currentBook: any = bookData.find(
    (data: any) => data.id === params.bookID
  );
  const modalState = useSelector((state: any) => state.modal);

  const [quantity, setQutatity] = useState<number>(1);

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
        <h4 className="text-2xl">
          Quantity:{" "}
          <input
            type="number"
            min={1}
            className="w-14 text-center"
            value={quantity ? quantity : 1}
            onChange={(e) => setQutatity(parseInt(e.target.value))}
          />
        </h4>

        <button
          onClick={() => {
            dispatch(addToCart(currentBook, quantity));
            dispatch(isOpenModal(!modalState));
          }}
          className="w-64 bg-pink-leaf rounded-lg h-12 hover:bg-coral-pink transition-colors duration-100 hover:text-white"
        >
          Add To Cart
        </button>
      </div>

      {modalState && <Modal />}
    </div>
  );
};

export default Item;

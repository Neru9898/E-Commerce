import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/cartAction";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state: any) => state);
  return (
    <div className="border-8 border-red-600">
      {cart.map((item: any) => {
        return (
          <div className="relative flex border-8 border-green-600 m-4">
            <div className="flex justify-center w-1/4 border-8 border-green-200 m-4">
              <img src={item.imgURL} alt="Temp" className="h-64 w-48 " />
            </div>
            <div className="flex flex-col w-1/2 border-8 border-green-200 m-4">
              <span>Title:{item.title}</span>
              <span className="py-4"> Description: {item.description}</span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 border-8 border-green-200 m-4">
              <span>Price: ${item.price}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
            <button
              onClick={() => dispatch(deleteFromCart(item.id))}
              className="absolute text-center top-0 right-0 text-2xl bg-red-600 "
            >
              x
            </button>
          </div>
        );
      })}
      <span className="float-right flex justify-center items-center w-1/4 text-2xl">
        <span className="p-1 rounded-xl bg-red-600 "> Total Price:</span> $
        {totalPrice}
      </span>
    </div>
  );
};

export default Cart;

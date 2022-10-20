import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromCart, updateCart } from "../redux/Actions/cartAction";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state: any) => state.cart);
  return (
    <div>
      {cart.map((item: any) => {
        return (
          <div className="relative  flex m-4 bg-dark-ragin-beige rounded-xl">
            <div className="flex justify-center w-1/4 m-4">
              <img src={item.imgURL} alt="Temp" className="h-64 w-48" />
            </div>
            <div className="flex flex-col  w-1/2 m-auto">
              <span className="text-xl font-bold">Title: {item.title}</span>
              <span className="p-2 text-md rounded-2xl w-full mt-full bg-[#D3D0C2]">
                Description: {item.description}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 m-4">
              <span className="text-2xl m-1">
                Price: ${item.price.toFixed(2)}
              </span>
              <span className="text-2xl m-1">
                Quantity:{" "}
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  value={item.quantity}
                  className="w-14 text-center"
                  onChange={(e) =>
                    dispatch(updateCart(item.id, parseInt(e.target.value)))
                  }
                />
              </span>

              <span className="text-xl m-1">
                (Total: {(item.quantity * item.price).toFixed(2)})
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteFromCart(item.id))}
              className="absolute text-center top-4 right-4 text-lg p-2 bg-coral-pink rounded-lg hover:bg-pink-leaf"
            >
              X
            </button>
          </div>
        );
      })}
      {cart.length === 0 && (
        <div className="m-8 p-8 text-base bg-dark-ragin-beige rounded-xl">
          No Products In The Cart
        </div>
      )}
      <span className="float-right flex justify-center items-center w-1/4 text-2xl">
        <span className="p-2 mx-1 rounded-xl text-xl bg-pink-leaf">
          {" "}
          Total Price:
        </span>{" "}
        ${totalPrice.toFixed(2)}
      </span>
    </div>
  );
};

export default Cart;

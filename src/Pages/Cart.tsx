import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/cartAction";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state: any) => state);
  return (
    <div>
      {cart.map((item: any) => {
        return (
          <div>
            <img src={item.imgURL} alt="Temp" />
            {item.title}
            {item.description}
            {item.price}
            {item.quantity}
            <button onClick={() => dispatch(deleteFromCart(item.id))}>x</button>
          </div>
        );
      })}

      {totalPrice}
    </div>
  );
};

export default Cart;

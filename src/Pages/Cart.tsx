import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart, totalPrice } = useSelector((state: any) => state);
  return (
    <div>
      {console.log(cart)}

      {totalPrice}
    </div>
  );
};

export default Cart;

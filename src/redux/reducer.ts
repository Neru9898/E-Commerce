import { ActionTypes } from "./ActionsTypes";
import { Actions } from "./actions";
const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartReducer = (state: any = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const findBookIndex = state.cart.findIndex(
        (currentCart: any) => currentCart.id === action.payload.id
      );

      if (findBookIndex === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[findBookIndex] = {
          ...state.cart[findBookIndex],
          quantity:
            state.cart[findBookIndex].quantity + action.payload.quantity,
        };
      }

      state.totalPrice = state.cart.reduce(
        (previousValue: any, currentValue: any) =>
          previousValue + currentValue.price * currentValue.quantity,
        0
      );

      return { ...state };
    case ActionTypes.DELETE_FROM_CART:
      return state - 1;
    default:
      return state;
  }
};

export default cartReducer;

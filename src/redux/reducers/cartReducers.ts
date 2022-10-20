import { ActionTypes } from "../ActionsTypes";
import { Actions } from "../actions";
const initialState = {
  cart: [],
  totalPrice: 0,
};

export const getBookIndex = (array: any[], id: string) =>
  array.findIndex((currentCart: any) => currentCart.id === id);
const cartReducer = (state: any = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const findBookIndex = getBookIndex(state.cart, action.payload.id);

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
      state.cart = state.cart.filter((book: any) => book.id !== action.payload);
      state.totalPrice = state.cart.reduce(
        (previousValue: any, currentValue: any) =>
          previousValue + currentValue.price * currentValue.quantity,
        0
      );

      return { ...state };
    case ActionTypes.UPDATE_CART:
      const findCurrentBook = getBookIndex(state.cart, action.payload.id);

      state.cart[findCurrentBook] = {
        ...state.cart[findCurrentBook],
        quantity: action.payload.quantity,
      };

      state.totalPrice = state.cart.reduce(
        (previousValue: any, currentValue: any) =>
          previousValue + currentValue.price * currentValue.quantity,
        0
      );

      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;

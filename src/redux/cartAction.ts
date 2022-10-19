import { ActionTypes } from "./ActionsTypes";

export const addToCart = (book: any, quantity: number) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { ...book, quantity },
  };
};

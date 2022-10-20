import { ActionTypes } from "./ActionsTypes";

export const addToCart = (book: any, quantity: number) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { ...book, quantity },
  };
};

export const deleteFromCart = (id: string) => {
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: id,
  };
};

export const updateCart = (id: string, quantity: number) => {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: { id, quantity },
  };
};

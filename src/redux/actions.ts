import { ActionTypes } from "./ActionsTypes";

interface AddAction {
  type: ActionTypes.ADD_TO_CART;
  payload: any;
}

interface RemoveAction {
  type: ActionTypes.DELETE_FROM_CART;
}

export type Actions = AddAction | RemoveAction;

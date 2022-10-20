import { ActionTypes } from "./ActionsTypes";

interface AddAction {
  type: ActionTypes.ADD_TO_CART;
  payload: any;
}

interface DeleteAction {
  type: ActionTypes.DELETE_FROM_CART;
  payload: string;
}

interface UpdateAction {
  type: ActionTypes.UPDATE_CART;
  payload: any;
}
export type Actions = AddAction | DeleteAction | UpdateAction;

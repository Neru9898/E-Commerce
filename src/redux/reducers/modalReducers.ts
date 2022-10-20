import { ActionTypes } from "../Actions/ActionsTypes";
import { ActionsInterface } from "../ActionInterfaces";

const initialState = false;

const modalReducer = (state: any = initialState, action: ActionsInterface) => {
  switch (action.type) {
    case ActionTypes.MODAL_IS_OPEN:
      return action.payload;

    default:
      return state;
  }
};

export default modalReducer;

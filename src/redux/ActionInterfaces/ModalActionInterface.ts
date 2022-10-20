import { ActionTypes } from "../Actions/ActionsTypes";

// Interfaces for modal actions

interface IsOpenAction {
  type: ActionTypes.MODAL_IS_OPEN;
  payload: boolean;
}

export type ModalActionInterface = IsOpenAction;

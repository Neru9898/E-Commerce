import { ActionTypes } from "../Actions/ActionsTypes";

interface IsOpenAction {
  type: ActionTypes.MODAL_IS_OPEN;
  payload: boolean;
}

export type ModalActionInterface = IsOpenAction;

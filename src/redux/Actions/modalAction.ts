import { ActionTypes } from "./ActionsTypes";

export const isOpenModal = (modalState: boolean) => {
  return {
    type: ActionTypes.MODAL_IS_OPEN,
    payload: modalState,
  };
};

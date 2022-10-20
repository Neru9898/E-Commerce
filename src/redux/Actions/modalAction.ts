import { ActionTypes } from "./ActionsTypes";

// Modal actions (closing and opening modal)

export const isOpenModal = (modalState: boolean) => {
  return {
    type: ActionTypes.MODAL_IS_OPEN,
    payload: modalState,
  };
};

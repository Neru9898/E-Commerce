import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import modalReducer from "./modalReducers";

const rootReducers = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducers;

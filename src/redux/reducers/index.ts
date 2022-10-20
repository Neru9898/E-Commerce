import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import modalReducer from "./modalReducers";

// combining all reducers to use for the redux store
const rootReducers = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducers;

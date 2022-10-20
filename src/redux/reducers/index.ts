import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

const rootReducers = combineReducers({ cart: cartReducer });

export default rootReducers;

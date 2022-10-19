import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducer";

export const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

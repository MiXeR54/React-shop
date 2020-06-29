import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
});

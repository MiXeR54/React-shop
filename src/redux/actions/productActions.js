import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => (dispatch) => {
  // fetch("")
  const data = [];
  dispatch({ type: FETCH_PRODUCTS, payload: data });
};

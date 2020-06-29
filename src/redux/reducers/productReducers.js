import { FETCH_PRODUCTS } from "../actions/types";

const initState = {
  items: [
    { id: 0, title: "Apple", price: 300 },
    { id: 1, title: "Samsung", price: 500 },
    { id: 2, title: "Dell", price: 1000 },
  ],
};
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

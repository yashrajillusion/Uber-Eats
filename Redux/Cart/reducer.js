import { ADD_TO_CART } from "./action";
import firebase from "../../firebase";
const db = firebase.firestore();

const initState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

let cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let newState = { ...state };
      if (payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, payload],
          restaurantName: payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== payload.title
            ),
          ],
          restaurantName: payload.restaurantName,
        };
      }
      return newState;
    default:
      return state;
  }
};

export default cartReducer;


import * as Items from "./actionTypes";

const initialstate = {
  CardData:[]
};

const CartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Items.ADD_TO_CART:
      return {
        ...state,
        students: state.students + action.payload,
      };
    case Items.REMOVE_TO_CART:
      return {
        ...state,
        students: state.students - action.payload,
      };
    case Items.INCREASE:
      return { ...state, show: true };
    case Items.DECREASE:
      return { ...state, show: false };

    default:
      return state;
  }
};

export default CartReducer;

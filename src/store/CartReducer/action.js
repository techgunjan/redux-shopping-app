import * as actionTypes from "./actionTypes";


export const ADD_TO_CART = (payload) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: payload,
  };
};
export const REMOVE_TO_CART = (payload) => {
    return {
      type: actionTypes.REMOVE_TO_CART,
      payload: payload,
    };
  };
  export const INCREASE = (payload) => {
    return {
      type: actionTypes.INCREASE,
      payload: payload,
    };
  };
  export const DECREASE = (payload) => {
    return {
      type: actionTypes.DECREASE,
      payload: payload,
    };
  };




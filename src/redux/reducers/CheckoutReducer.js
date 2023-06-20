import { ADD_CHECKOUT, DELETE_CHECKOUT } from '../type';

const initialState = {};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKOUT:
      return { ...state, ...action.payload };
    case DELETE_CHECKOUT:
      return {};
    default:
      return state;
  }
};

export default CheckoutReducer;
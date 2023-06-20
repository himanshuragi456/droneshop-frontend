import { ADD_CART, DELETE_CART } from '../type';

const initialState = {};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, ...action.payload };
    case DELETE_CART:
      return {};
    default:
      return state;
  }
};

export default CartReducer;
import { ADD_PRODUCTS_DATA } from '../type';

const initialState = {};

const ProductsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ProductsDataReducer;
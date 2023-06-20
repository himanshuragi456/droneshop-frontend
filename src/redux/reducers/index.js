import { combineReducers } from 'redux';

import ProductsReducer from './ProductsReducer';
import CartReducer from './CartReducer';
import CheckoutReducer from './CheckoutReducer';
import UserDataReducer from './UserDataReducer';

const reducers = combineReducers({
  ProductsData: ProductsReducer,
  Cart: CartReducer,
  Checkout: CheckoutReducer,
  DroneShop: UserDataReducer,
});

export default reducers;
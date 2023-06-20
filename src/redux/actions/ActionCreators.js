import { ADD_PRODUCTS_DATA, ADD_CART, DELETE_CART, ADD_CHECKOUT, DELETE_CHECKOUT, SIGN_IN, SIGN_OUT } from '../type';

export const AddProductsDataAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCTS_DATA,
    payload,
  });
};

export const AddCartAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload,
  });
};

export const DeleteCartAction = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_CART,
    payload,
  });
};

export const AddCheckoutAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_CHECKOUT,
    payload,
  });
};

export const DeleteCheckoutAction = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_CHECKOUT,
    payload,
  });
};

export const SignInAction = (payload) => (dispatch) => {
  dispatch({
    type: SIGN_IN,
    payload,
  });
};

export const SignOutAction = (payload) => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
    payload,
  });
};
import { SIGN_IN, SIGN_OUT } from '../type';

const initialState = {};

const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
};

export default UserDataReducer;

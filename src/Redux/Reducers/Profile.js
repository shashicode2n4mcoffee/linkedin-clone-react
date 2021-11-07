import { actionTypes as types } from '../actionTypes';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.REGISTER_ERROR:
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;

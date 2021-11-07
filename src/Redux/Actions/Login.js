import { actionTypes as types } from '../actionTypes.js';

export const loginRequest = (loginCred) => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

export const loginResponse = (email) => {
  return {
    type: types.LOGIN_RESPONSE,
    payload: email,
  };
};

export const loginError = (error) => {
  return {
    type: types.LOGIN_ERROR,
    payload: error,
  };
};

export const loginUserAction = ({email, password}) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    // const data = email;
    dispatch(loginResponse(email));
  } catch (error) {
    dispatch(loginError(error));
  }   
};


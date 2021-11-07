import { actionTypes as types } from '../actionTypes.js';

const registerRequest = () => {
  return {
    type: types.REGISTER_REQUEST,
  };
};

const registerResponse = (email) => {
  return {
    type: types.REGISTER_RESPONSE,
    payload: email,
  };
};

const registerError = (error) => {
  return {
    type: types.REGISTER_ERROR,
    payload: error,
  };
};

export const registerInitiate = ({email, password}) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    dispatch(registerResponse(email));
  } catch (error) {
    registerError(error);
  }
};

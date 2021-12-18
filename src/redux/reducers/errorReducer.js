import { GET_ERROR,CLEAR_ERROR } from "../constants";

const initialState = {
  authenticationError: {
    message: null,
    error:null,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return { ...state, authenticationError: { ...state.authenticationError, message: action.payload, error: action.payload } };
    default:
      return state;
  }
}
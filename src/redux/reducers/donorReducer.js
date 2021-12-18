import {
  FINDING_ALL_DONORS,
  ALL_DONORS_FOUND,
  FINDING_DONORS_FAILED
} from "../constants";

const initialState = {
  isLoading: null,
  donors:null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FINDING_ALL_DONORS:
      return { ...state, isLoading: true };
    case ALL_DONORS_FOUND:
      return { ...state, isLoading: false, donors: action.payload };
    case FINDING_DONORS_FAILED:
      return { ...state, isLoading: false }
    default:
      return state;
  };
};
import {
  LOGGING_USER,
  USER_LOGGED_IN,
  USER_LOGIN_FAILED,
  REGISTERING_USER,
  USER_REGISTERED,
  USER_REGISTRATION_FAILED,
  UPDATING_USER,
  USER_UPDATED,
  USER_UPDATION_FAILED,
  LOGGING_OUT_USER,
  LOGGED_OUT_SUCESSFULLY,
  USER_LOGOUT_FAILED,
  LOGGING_OUT_OF_ALL_DEVICES,
  LOGGED_OUT_OF_ALL_DEVICES,
  LOGOUT_FROM_ALL_FAILED,
  DELETING_USER,
  USER_DELETED,
  USER_DELETION_FAILED,
  FETCHING_USER_LOCATION,
  FETCHING_LOCATION_FAILED,
  LOCATION_FETCHED_SUCESSFULLY,
  REGISTERING_AS_DONOR,
  REGISTERED_AS_DONOR,
  FAILED_TO_REGISTER_AS_DONOR
} from "../constants";

const initialState = {
  isRegisteringDonor:null,
  isLoading:null,
  userData: {
    name: null,
    email: null,
    age: null,
    bloodGroup: null,
    role: null,
    phoneNumber: null,
  },
  address: {
    landmark: null,
    city: null,
    district: null,
    state: null,
  },
  location: {
    latitude: null,
    longitude: null,
  },
  token: null,
  location:null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_AS_DONOR:
      return { ...state, isRegisteringDonor: true };
    case REGISTERED_AS_DONOR:
      return { ...state, isRegisteringDonor: false, userData: { ...state.userData, ...action.payload } };
    case FAILED_TO_REGISTER_AS_DONOR:
      return { ...state, isRegisteringDonor: false }
    case LOGGING_OUT_USER:
    case LOGGING_OUT_OF_ALL_DEVICES:
    case FETCHING_USER_LOCATION:
    case REGISTERING_USER:
    case LOGGING_USER:
      return { ...state, isLoading: true };
    case USER_REGISTERED:
    case USER_LOGGED_IN:
      return { ...state, token: action.payload.token, isLoading: false, userData: { ...state.userData, ...action.payload.user } };
    case FETCHING_LOCATION_FAILED:
    case USER_REGISTRATION_FAILED:
    case USER_LOGIN_FAILED:
      return { ...state, isLoading: false };
    case USER_LOGOUT_FAILED:
    case LOGGED_OUT_SUCESSFULLY:
      return {...state, isLoading: false,token:null,userData: {
        name: null,
        email: null,
        age: null,
        bloodGroup: null,
        role: null,
        phoneNumber: null,
      }
      };
    case LOCATION_FETCHED_SUCESSFULLY:
      return {...state,location:{...state.location,...action.payload}}
    default:
      return state;
  }
}
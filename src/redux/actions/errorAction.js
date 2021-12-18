import { GET_ERROR, CLEAR_ERROR } from "../constants";

export const getErrors = e => dispatch => {
	dispatch({
		type: GET_ERROR,
		payload: e,
	});
};

export const clearErrors = () => dispatch => {
	dispatch({
		type: CLEAR_ERROR,
	});
};

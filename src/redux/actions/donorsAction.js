import {
	FINDING_ALL_DONORS,
	ALL_DONORS_FOUND,
	FINDING_DONORS_FAILED,
} from "../constants";
import { getErrors } from "./errorAction";
import { getAuthToken } from "./userAction";
import { findADonor } from "../../apis/findADonorApi";

export const findAllDonors = () => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: FINDING_ALL_DONORS });
		const res = await findADonor(getAuthToken(token));
		dispatch({ type: ALL_DONORS_FOUND, payload: res.data });
	} catch (e) {
		getErrors(e);
		dispatch({ type: FINDING_DONORS_FAILED });
	}
};

import {
	FINDING_ALL_DONORS,
	ALL_DONORS_FOUND,
	FINDING_DONORS_FAILED,
	FINDING_ALL_BANKS,
	ALL_BANKS_FOUND,
	FINDING_BANKS_FAILED,
} from "../constants";
import { getErrors } from "./errorAction";
import { getAuthToken } from "./userAction";
import { findADonor ,findBanks} from "../../apis/findADonorApi";

export const findAllDonors = () => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: FINDING_ALL_DONORS });
		const res = await findADonor(getAuthToken(token));
		console.log("banks",res.data);
		dispatch({ type: ALL_DONORS_FOUND, payload: res.data });
	} catch (e) {
		getErrors(e);
		dispatch({ type: FINDING_DONORS_FAILED });
	}
};

export const findAllBanks = () => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: FINDING_ALL_BANKS });
		const res = await findBanks(getAuthToken(token));
		// console.log("banks",res.data.bloodBankData);
		dispatch({ type: ALL_BANKS_FOUND, payload: res.data.bloodBankData });
	} catch (e) {
		getErrors(e);
		console.log(e);
		dispatch({ type: FINDING_BANKS_FAILED });
	}
};

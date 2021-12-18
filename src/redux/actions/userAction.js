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
	FAILED_TO_REGISTER_AS_DONOR,
} from "../constants";

import {
	loginUser,
	registerUser,
	updateUser,
	logoutUser,
	logoutAllUser,
	removeUser,
	registerAsDonor,
} from "../../apis/findADonorApi";

import * as Location from "expo-location";

import { getErrors, clearErrors } from "./errorAction";

export const getAuthToken = token => {
	return `Bearer ${token}`;
};

export const loginUserAction =
	loginCredentials => async (dispatch, getState) => {
		try {
			dispatch({ type: LOGGING_USER });
			const res = await loginUser(loginCredentials);
			console.log(res);
			clearErrors();
			dispatch({ type: USER_LOGGED_IN, payload: res.data });
			alert("User Logged In Sucessfully!");
		} catch (error) {
			dispatch({ type: USER_LOGIN_FAILED });
			console.log(error);
			dispatch(getErrors(error));
			alert("User Login Failed.Try Again!");
		}
	};

export const registerUserAction =
	registerCredentials => async (dispatch, getState) => {
		try {
			dispatch({ type: REGISTERING_USER });
			const res = await registerUser(registerCredentials);
			clearErrors();
			dispatch({ type: USER_REGISTERED, payload: res.data });
			alert("User Registered Sucessfully!");
		} catch (e) {
			dispatch({ type: USER_REGISTRATION_FAILED });
			dispatch(getErrors(e));
			console.log(e);
			alert(e.msg);
		}
	};

export const updateUserAction = updateData => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: UPDATING_USER });
		const res = await updateUser(updateData, getAuthToken(token));
		clearErrors();
		dispatch({ type: USER_UPDATED, payload: res.data });
	} catch (e) {
		dispatch({ type: USER_UPDATION_FAILED });
		dispatch(getErrors(e));
		alert(e.msg);
	}
};

export const logoutUserAction = () => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: LOGGING_OUT_USER });
		const res = await logoutUser(getAuthToken(token));
		clearErrors();
		dispatch({ type: LOGGED_OUT_SUCESSFULLY, payload: res.data });
		alert("User Logged Out");
	} catch (e) {
		dispatch({ type: USER_LOGOUT_FAILED });
		dispatch(getErrors(e));
		alert(e.msg);
	}
};

export const logoutFromAllUserAction = () => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: LOGGING_OUT_OF_ALL_DEVICES });
		const res = await logoutAllUser(getAuthToken(token));
		clearErrors();
		dispatch({ type: LOGGED_OUT_OF_ALL_DEVICES, payload: res.data });
		alert("Logged Out from all devices");
	} catch (e) {
		dispatch({ type: LOGOUT_FROM_ALL_FAILED });
		dispatch(getErrors(e));
		alert(e.msg);
	}
};

export const deleteUserAction = () => async (dispatch, getState) => {
	const token = getState().user.token;
	try {
		dispatch({ type: DELETING_USER });
		const res = await removeUser(getAuthToken(token));
		clearErrors();
		dispatch({ type: USER_DELETED, payload: res.data });
	} catch (e) {
		dispatch({ type: USER_DELETION_FAILED });
		dispatch(getErrors(e));
		alert(e.msg);
	}
};

export const fetchLocation = () => async (dispatch, getState) => {
	try {
		dispatch({ type: FETCHING_USER_LOCATION });
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			alert("Permission to access location was denied");
			return;
		}
		let location = await Location.getCurrentPositionAsync({});
		clearErrors();
		dispatch({ type: LOCATION_FETCHED_SUCESSFULLY, payload: location });
	} catch (e) {
		dispatch({ type: FETCHING_LOCATION_FAILED });
		dispatch(getErrors(e));
		alert(e.msg);
	}
};

export const registerDonor = () => async (dispatch, getState) => {
	const token = getState().user.token;
	const location = getState().user.location.coords;
	try {
		console.log("Registering as donor");
		dispatch({ type: REGISTERING_AS_DONOR });
		console.log("locatio +++++" + JSON.stringify(location));
		const res = await registerAsDonor(getAuthToken(token), {
			latitude: location.latitude,
			longitude: location.longitude,
		});
		console.log("Hello***************" + JSON.stringify(res));
		dispatch({ type: REGISTERED_AS_DONOR, payload: res.data.user });
	} catch (e) {
		dispatch(getErrors(e));
		console.log("Error***************" + JSON.stringify(e));
		dispatch({ type: FAILED_TO_REGISTER_AS_DONOR });
	}
};

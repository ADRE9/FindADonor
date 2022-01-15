import axios from "axios";

// const URL = "https://findadonor.herokuapp.com/api";https://findadonorapp.azurewebsites.net/

const URL="https://findadonorapp.azurewebsites.net/api"

export const loginUser = data => axios.post(`${URL}/auth/login`, data);

export const registerUser = data => axios.post(`${URL}/user/register`, data);

export const updateUser = (data, token) =>
	axios.patch(`${URL}/user/update`, data, {
		headers: { Authorization: token },
	});

export const logoutUser = token =>
	axios.post(`${URL}/auth/logout`, {}, { headers: { Authorization: token } });

export const logoutAllUser = token =>
	axios.post(
		`${URL}/auth/logoutall`,
		{},
		{ headers: { Authorization: token } },
	);

export const removeUser = token =>
	axios.delete(
		`${URL}/auth/removeUser`,
		{},
		{ headers: { Authorization: token } },
	);

export const registerAsDonor = (token, data) =>
	axios.patch(`${URL}/auth/registerAsDonor`, data, {
		headers: { Authorization: token },
	});

export const findADonor = token =>
	axios.get(`${URL}/auth/findADonor`, { headers: { Authorization: token } });

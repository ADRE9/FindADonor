import * as yup from "yup";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default yup.object().shape({
	landmark: yup.string().required("required"),
	city: yup.string().required("required"),
	district: yup.string().required("required"),
	state: yup.string().required("required"),
	password: yup
		.string()
		.required("Password is a required field")
		.min(7, "Password must be 8 characters long"),
});

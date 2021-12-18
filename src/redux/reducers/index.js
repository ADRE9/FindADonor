import { combineReducers } from "redux";

import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import donorReducer from "./donorReducer";

export default combineReducers({
	user: userReducer,
	errors: errorReducer,
	donors: donorReducer,
});

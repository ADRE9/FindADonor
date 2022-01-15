import {
	FINDING_ALL_DONORS,
	ALL_DONORS_FOUND,
	FINDING_DONORS_FAILED,
	FINDING_ALL_BANKS,
	ALL_BANKS_FOUND,
	FINDING_BANKS_FAILED,
} from "../constants";

const initialState = {
	isLoading: null,
	isLoadingBank: null,
	donors: null,
	banks:null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FINDING_ALL_DONORS:
			return { ...state, isLoading: true };
		case ALL_DONORS_FOUND:
			return { ...state, isLoading: false, donors: action.payload };
		case FINDING_DONORS_FAILED:
			return { ...state, isLoading: false };
			case FINDING_ALL_BANKS:
				return { ...state, isLoadingBank: true };
			case ALL_BANKS_FOUND:
				return { ...state, isLoadingBank: false, banks: action.payload };
			case FINDING_BANKS_FAILED:
				return { ...state, isLoadingBank: false };
		default:
			return state;
	}
};

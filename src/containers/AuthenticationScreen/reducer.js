import * as authTypes from './types';

const initialState = {
	fetching: false,
	auth: {},
	error: null,
	loggedIn: false,
};

export function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case authTypes.LOGIN:
			return { ...state, fetching: true, error: null };
		case authTypes.LOGIN_FAILURE:
			return { ...state, fetching: false, auth: null, error: action.error };
		case authTypes.LOGOUT_SUCCESS:
			return { ...state, fetching: false, auth: null };
		case authTypes.LOGIN_SUCCESS:
			return { ...state, loggedIn: true, fetching: false, auth: action.auth };
		default:
			return state;
	}
}

import * as authTypes from './types';

export const LOGIN = loginData => ({
	type: authTypes.LOGIN,
	loginData,
});

export const LOGIN_FAILURE = () => ({ type: authTypes.LOGIN_FAILURE });

export const logOut = () => ({ type: authTypes.LOG_OUT });

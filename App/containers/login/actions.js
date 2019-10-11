import * as loginTypes from './types';

export const login = loginData => ({
    type: loginTypes.LOGIN,
    loginData
});

export const loginSuccess = user =>({
    type: loginTypes.LOGIN_SUCCESS,
    user
});

export const loginError = () =>({
    type: loginTypes.LOGIN_ERROR
});

export const LogOut = () => ({
    type: loginTypes.LOGOUT
});

export const LogOutSuccess = () => ({
    type: loginTypes.LOGOUT_SUCCESS
});
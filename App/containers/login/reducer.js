import * as loginTypes from './types';

const initialState = {
    isLoggedIn: false,
    user: {

    },
    showLoader: false
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginTypes.LOGIN:
            return { ...state, showLoader: true };
        case loginTypes.LOGIN_SUCCESS:
            return { ...state, showLoader: false, isLoggedIn: true, user: action.user };
        case loginTypes.LOGIN_ERROR:
            return { ...state, showLoader: false, isLoggedIn: false };
        case loginTypes.LOGOUT:
            return {...state, isLoggedIn: false, showLoader: false, user: {}};
        default:
            return state;
    }
}
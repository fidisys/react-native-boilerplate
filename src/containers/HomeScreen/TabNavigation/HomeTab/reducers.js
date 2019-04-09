import * as userTypes from './types';

const initialState = {
  users: [],
  fetching: false
}

export function userReducer(state=initialState,action) {
  switch (action.type) {
    case userTypes.GET_USERS:
      return { ...state, fetching: true};
    case userTypes.SAVE_USERS:
      return { ...state, fetching: false, users: action.users};
    default:
      return { ...state}
  }
}
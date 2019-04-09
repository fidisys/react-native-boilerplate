import * as userTypes from './types';


export const  getUsers = () => ({
  type: userTypes.GET_USERS
});

export const saveUsers = (users) =>({
  type: userTypes.SAVE_USERS,
  users
})
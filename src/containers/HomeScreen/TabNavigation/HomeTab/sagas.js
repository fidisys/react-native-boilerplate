import * as userTypes from './types';
import { saveUsers } from './actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import request from '../../../../services/fetchService';

export function* watcherSaga() {
  yield all([takeLatest(userTypes.GET_USERS, getUsersSaga)]);
}
getUsers = async () => {
   try {
     const resp = await request('https://jsonplaceholder.typicode.com/users','get');
     return resp;
   } catch (error) {
     
   }
}
function* getUsersSaga() {
  try {
    const users = yield call (getUsers);
    yield put(saveUsers(users));
  } catch (error) {
    console.log(error)
  }
}
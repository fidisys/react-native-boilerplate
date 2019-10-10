import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as loginTypes from './types';
import storageService from '../../utils/storageService';
import request from '../../utils/fetchService';
import * as loginActions from './actions';
import NavigationService from '../../utils/navigationService';

export function* watcherSaga() {
  yield all([
    takeLatest(loginTypes.LOGIN, loginSagas),
  ]);
}
login = async (token) => {
  await storageService.setApiKey(token);
  NavigationService.navigate('Home');
}
function* loginSagas(data) {
  try {
    const { token } = data.loginData;
    yield call(login, token)
    yield put(loginActions.loginSuccess({ name: token }))

  } catch (error) {
    yield put(loginActions.loginError)
  }
}
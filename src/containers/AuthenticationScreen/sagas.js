import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as authTypes from './types';
import { AsyncStorage } from 'react-native';
import NavigationService from '../../services/navigationService';
import showToast from '../../services/toastService';

export function* watcherSaga() {
	yield all([takeLatest(authTypes.LOGIN, workerSaga), takeLatest(authTypes.LOG_OUT, logOutSagas)]);
}

loggin = async (email, password) => {
	try {
		console.log(email, password);
		await AsyncStorage.setItem('email', email);
		await AsyncStorage.setItem('password', password);
		await AsyncStorage.setItem('api-key', '12345');
		NavigationService.navigate('Home');
		return {
			email: email,
			password: password,
		};
	} catch (error) {
		// Error saving data
	}
};

function* workerSaga(data) {
	try {
		const { email, password } = data.loginData;
		const auth = yield call(loggin, email, password);
		yield put({
			type: authTypes.LOGIN_SUCCESS,
			auth,
		});
		showToast('Successfully Logged In ..!');
	} catch (error) {
		showToast(error.message);
		yield put({
			type: authTypes.LOGIN_FAILURE,
			error,
		});
	}
}
function* logOutSagas() {
  try {
    yield call(logOut);
    yield put({
      type: authTypes.LOGOUT_SUCCESS,
    });
    NavigationService.navigate('Authentication');
    showToast('Successfully Logged Out ..!');
  } catch { }
}

logOut = async () => {
  try {
    await AsyncStorage.clear();
    console.log(NavigationService);
  } catch (error) {
    console.log(error);
  }
};

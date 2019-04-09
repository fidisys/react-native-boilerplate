import { combineReducers } from 'redux';
import { AuthReducer } from '../containers/AuthenticationScreen/reducer';

export default function finalReducer(asyncReducers) {
	return combineReducers({
    Auth: AuthReducer,
		...asyncReducers,
	});
}

import { combineReducers } from 'redux';
import { loginReducer } from '../containers/login/reducer';

export const finalReducer = (asyncReducers)=> {
	const appReducer = combineReducers({
    Auth: loginReducer,
		...asyncReducers,
	});
	return (state, action) => {
		 if (action.type === 'RESET_APP') 
		 { state = undefined; } 
		 return appReducer(state, action); 
	}
}


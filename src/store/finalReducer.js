import { combineReducers } from 'redux'
import { AuthReducer } from '../containers/AuthenticationScreen/reducer';

export const finalReducer = combineReducers({
  Auth: AuthReducer
})
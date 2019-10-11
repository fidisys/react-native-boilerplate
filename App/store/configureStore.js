import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import {finalReducer} from './finalReducer';
import { watcherSaga } from '../containers/login/sagas';
import {createInjectSagasStore, sagaMiddleware, reloadSaga} from 'redux-sagas-injector';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createInjectSagasStore(
	{ rootSaga: watcherSaga },
	finalReducer(),
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
// sagaMiddleware.run(watcherSaga);
store.injectedReducers = {}; // Reducer registry

export default store;

export function injectAsyncReducer(name, asyncReducer) {
  store.injectedReducers[name] = asyncReducer;
  store.replaceReducer(finalReducer(store.injectedReducers));
}

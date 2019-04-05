import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import {finalReducer} from './finalReducer';
import { watcherSaga } from '../containers/AuthenticationScreen/sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(finalReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcherSaga);
export default store;

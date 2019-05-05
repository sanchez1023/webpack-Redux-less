import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'

import watchLoginuser from './reduxSaga/loginSaga';
import watchgetcard from './reduxSaga/panelSaga'
import { createBrowserHistory } from 'history';
import rootSaga from './reduxSaga/loginSaga';

export const browserHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default store;
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistReducers from './persistReducers';
import rootSaga from './root-saga';
import rootReducer, { initialState } from './root-reducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (state = initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistReducers(rootReducer),
    state,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };

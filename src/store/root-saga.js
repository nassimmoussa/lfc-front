import { all } from 'redux-saga/effects';

import auth from './modules/auth/sagas';
import students from './modules/students/sagas';

export default function* rootSaga() {
  yield all([...auth, ...students]);
}

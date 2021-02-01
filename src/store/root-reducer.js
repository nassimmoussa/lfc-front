import { combineReducers } from 'redux';

import auth, { initialState as authInitialState } from './modules/auth/reducer';
import notifications, {
  initialState as notificationsInitialState,
} from './modules/notifications/reducer';

import students, {
  initialState as studentsInitialState,
} from './modules/students/reducer';

import lEs, {
  initialState as lEsInitialState,
} from './modules/logicExpressions/reducer';

import room, { initialState as roomInitialState } from './modules/room/reducer';

export const initialState = {
  auth: authInitialState,
  notifications: notificationsInitialState,
  students: studentsInitialState,
  lEs: lEsInitialState,
  room: roomInitialState,
};

export default combineReducers({
  auth,
  notifications,
  students,
  lEs,
  room,
});

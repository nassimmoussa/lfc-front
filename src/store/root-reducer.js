import { combineReducers } from 'redux';

import auth, { initialState as authInitialState } from './modules/auth/reducer';
import notifications, {
  initialState as notificationsInitialState,
} from './modules/notifications/reducer';

import students, {
  initialState as studentsInitialState,
} from './modules/students/reducer';

export const initialState = {
  auth: authInitialState,
  notifications: notificationsInitialState,
  students: studentsInitialState,
};

export default combineReducers({
  auth,
  notifications,
  students,
});

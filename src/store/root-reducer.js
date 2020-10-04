import { combineReducers } from 'redux';

import auth, { initialState as authInitialState } from './modules/auth/reducer';
import notifications, {
  initialState as notificationsInitialState,
} from './modules/notifications/reducer';

export const initialState = {
  auth: authInitialState,
  notifications: notificationsInitialState,
};

export default combineReducers({
  auth,
  notifications,
});

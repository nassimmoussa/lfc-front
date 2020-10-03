import { combineReducers } from 'redux';

import auth, { initialState as authInitialState } from './modules/auth/reducer';

export const initialState = {
  auth: authInitialState,
};

export default combineReducers({
  auth,
});

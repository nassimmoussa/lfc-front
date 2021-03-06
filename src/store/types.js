const AUTH = '@auth';
const STUDENT = '@student';
const LE = '@logic_expression';
const ROOM = '@room';

export const NOTIFICATIONS_ERROR = 'NOTIFICATIONS_ERROR';
export const NOTIFICATIONS_SUCCESS = 'NOTIFICATIONS_SUCCESS';

export const AUTH_LOGIN_LOAD = `${AUTH}/LOGIN_LOAD`;
export const AUTH_LOGIN_SUCCESS = `${AUTH}/LOGIN_SUCCESS`;
export const AUTH_ERROR = `${AUTH}/ERROR`;
export const AUTH_IS_LOADING = `${AUTH}/IS_LOADING`;
export const AUTH_LOGOUT = `${AUTH}/LOGOUT`;

export const AUTH_SIGN_UP_LOAD = `${AUTH}/SIGN_UP_LOAD`;
export const AUTH_SIGN_UP_SUCCESS = `${AUTH}/SIGN_UP_SUCCESS`;
export const AUTH_FORGOT_PASSWORD = `${AUTH}/FORGOT_PASSWORD`;

export const AUTH_UPDATE_LOAD = `${AUTH}/UPDATE_LOAD`;
export const AUTH_UPDATE_SUCCESS = `${AUTH}/UPDATE_SUCCESS`;

export const STUDENT_INDEX_LOAD = `${STUDENT}/INDEX_LOAD`;
export const STUDENT_INDEX_SUCCESS = `${STUDENT}/INDEX_SUCCESS`;
export const STUDENT_ERROR = `${STUDENT}/ERROR`;
export const STUDENT_IS_LOADING = `${STUDENT}/IS_LOADING`;
export const STUDENT_CLEANUP = `${STUDENT}/CLEANUP`;

export const STUDENT_NEW = `${STUDENT}/NEW`;
export const STUDENT_NEW_SUCCESS = `${STUDENT}/NEW_SUCCESS`;
export const STUDENT_DELETE = `${STUDENT}/DELETE`;
export const STUDENT_DELETE_SUCCESS = `${STUDENT}/DELETE_SUCCESS`;
export const STUDENT_EDIT = `${STUDENT}/EDIT`;
export const STUDENT_EDIT_SUCCESS = `${STUDENT}/EDIT_SUCCESS`;
export const STUDENT_SELECT = `${STUDENT}/SELECT`;
export const STUDENT_CLEAR_SELECT = `${STUDENT}/CLEAR_SELECT`;

export const STUDENT_SEARCH_FILTER = `${STUDENT}/SEARCH_FILTER`;
export const STUDENT_REMOVE_SEARCH_FILTER = `${STUDENT}/REMOVE_SEARCH_FILTER`;
export const STUDENT_ADD_TO_ROOM = `${STUDENT}/ADD_TO_ROOM`;
export const STUDENT_REMOVE_FROM_ROOM = `${STUDENT}/REMOVE_FROM_ROOM`;

export const LE_INDEX_LOAD = `${LE}/INDEX_LOAD`;
export const LE_INDEX_SUCCESS = `${LE}/INDEX_SUCCESS`;
export const LE_ERROR = `${LE}/ERROR`;
export const LE_IS_LOADING = `${LE}/IS_LOADING`;
export const LE_CLEANUP = `${LE}/CLEANUP`;

export const LE_NEW = `${LE}/NEW`;
export const LE_NEW_SUCCESS = `${LE}/NEW_SUCCESS`;
export const LE_DELETE = `${LE}/DELETE`;
export const LE_DELETE_SUCCESS = `${LE}/DELETE_SUCCESS`;
export const LE_EDIT = `${LE}/EDIT`;
export const LE_EDIT_SUCCESS = `${LE}/EDIT_SUCCESS`;
export const LE_SELECT = `${LE}/SELECT`;
export const LE_CLEAR_SELECT = `${LE}/CLEAR_SELECT`;

export const ROOM_CLEANUP = `${ROOM}/CLEANUP`;
export const ROOM_UPDATE = `${ROOM}/UPDATE`;
export const ROOM_STUDENT_LOGIN_SUCCESS = `${ROOM}/STUDENT_LOGIN_SUCCESS`;
export const ROOM_STUDENT_NEW_LOGIN = `${ROOM}/STUDENT_NEW_LOGIN`;

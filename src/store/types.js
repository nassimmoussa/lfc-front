const AUTH = '@auth';
const USER = '@user';
const STUDENT = '@student';

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

export const USER_UPDATE_LOAD = `${USER}/UPDATE_LOAD`;
export const USER_UPDATE_SUCCESS = `${USER}/UPDATE_SUCCESS`;

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

import {
  LE_ERROR,
  LE_INDEX_SUCCESS,
  LE_IS_LOADING,
  LE_INDEX_LOAD,
  LE_CLEANUP,
  LE_NEW,
  LE_NEW_SUCCESS,
  LE_DELETE,
  LE_DELETE_SUCCESS,
  LE_SELECT,
  LE_CLEAR_SELECT,
  LE_EDIT,
  LE_EDIT_SUCCESS,
} from '../../types';

export const lEIsLoadingAction = () => ({
  type: LE_IS_LOADING,
});

export const lEErrorAction = (error) => ({
  type: LE_ERROR,
  data: error,
});

export const lECleanUpAction = () => ({
  type: LE_CLEANUP,
});

export const lEIndexLoadAction = () => ({
  type: LE_INDEX_LOAD,
});

export const lEIndexSuccessAction = (lEs) => ({
  type: LE_INDEX_SUCCESS,
  data: lEs,
});

export const lENewAction = (lEData) => ({
  type: LE_NEW,
  data: lEData,
});

export const lENewSuccessAction = (lE) => ({
  type: LE_NEW_SUCCESS,
  data: lE,
});

export const deleteLEAction = (lEId) => ({
  type: LE_DELETE,
  data: lEId,
});

export const deleteLESuccessAction = (lEId) => ({
  type: LE_DELETE_SUCCESS,
  data: lEId,
});

export const selectLEAction = (lE) => ({
  type: LE_SELECT,
  data: lE,
});

export const clearSelectedLEAction = (lE) => ({
  type: LE_CLEAR_SELECT,
  data: lE,
});

export const editLEAction = (lE) => ({
  type: LE_EDIT,
  data: lE,
});

export const editLESuccessAction = (lE) => ({
  type: LE_EDIT_SUCCESS,
  data: lE,
});

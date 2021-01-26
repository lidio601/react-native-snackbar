// state

export type SnackbarState = {
  message: string | undefined;
};

export type ReduxStateWithSnackbarReducer = Record<string, never> & {
  snackbar: SnackbarState;
};

// action

export const SNACKBAR_MESSAGE = 'SNACKBAR_MESSAGE';
export const SNACKBAR_CLEAR = 'SNACKBAR_CLEAR';

interface SnackbarMessageAction {
  type: typeof SNACKBAR_MESSAGE;
  payload: string;
}

interface SnackbarClearAction {
  type: typeof SNACKBAR_CLEAR;
}

export type SnackbarActionTypes = SnackbarMessageAction | SnackbarClearAction;

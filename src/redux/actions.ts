import { Dispatch } from 'react';

import { SNACKBAR_CLEAR, SNACKBAR_MESSAGE, SnackbarActionTypes } from './types';

export function setSnackbarMessage(message: string): SnackbarActionTypes {
  return {
    payload: message,
    type: SNACKBAR_MESSAGE,
  };
}

export function clearSnackbar(): SnackbarActionTypes {
  return {
    type: SNACKBAR_CLEAR,
  };
}

export function snackbarErrorCatcher(
  dispatch: Dispatch<any>,
  msg = 'Something went wrong',
) {
  return (err: Error, message = msg) => {
    console.log(err);
    dispatch(setSnackbarMessage(message));
  };
}

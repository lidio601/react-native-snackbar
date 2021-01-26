import { ReduxStateWithSnackbarReducer } from './types';

export const getSnackbarMessage = (state: ReduxStateWithSnackbarReducer) =>
  state.snackbar.message;

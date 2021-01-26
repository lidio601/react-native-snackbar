import {
  SNACKBAR_CLEAR,
  SNACKBAR_MESSAGE,
  SnackbarActionTypes,
  SnackbarState,
} from './types';

const initialState: SnackbarState = {
  message: undefined,
};

/**
 * @param state
 * @param action
 */
export function snackbarReducer(
  state = initialState,
  action: SnackbarActionTypes,
): SnackbarState {
  switch (action.type) {
  case SNACKBAR_MESSAGE:
    return {
      ...state,
      message: action.payload,
    };
  case SNACKBAR_CLEAR:
    return {
      ...initialState,
    };
  default:
    return state;
  }
}

export default snackbarReducer;

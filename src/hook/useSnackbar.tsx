import { useContext } from 'react';

import { Context } from '../hoc/withSnackbar';

export function useSnackbar() {
  return useContext(Context);
}

export default useSnackbar;

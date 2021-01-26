import _ from 'lodash';
import React, { createContext, useEffect, useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { clearSnackbar } from '../redux/actions';
import { getSnackbarMessage } from '../redux/selectors';

type SnackbarRemote = {
  show: (message: string) => void;
  hide: () => void;
};

type WithSnackbarOptions = {
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
};

export const Context = createContext<SnackbarRemote>({
  hide: _.identity,
  show: _.identity,
});

export function withSnackbar<T>(
  WrappedComponent: React.ComponentType<T>,
  options?: WithSnackbarOptions,
) {
  return (props: T) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState<string | undefined>();
    const dispatch = useDispatch();
    const MESSAGE = useSelector(getSnackbarMessage);

    const _hide = () => {
      setVisible(false);
      dispatch(clearSnackbar());
    };

    const _show = (newMessage: string) => {
      setMessage(newMessage);
      setVisible(true);
    };

    useEffect(() => {
      if (!_.isEmpty(MESSAGE)) {
        _show(MESSAGE);
      }
    }, [MESSAGE, message]);

    // Render
    // ---------------------

    const DEFAULT_DURATION = 2500; // ms
    const DEFAULT_ACTION = {
      label: 'OK',
      onPress: _hide,
    };

    const OPTIONS = options || {};
    const DURATION = OPTIONS || DEFAULT_DURATION;
    const ACTION = OPTIONS || DEFAULT_ACTION;

    return (
      <Context.Provider
        value={{
          hide: _hide,
          show: _show,
        }}
      >
        <WrappedComponent {...props} />

        {/*
         * the snackbar will appear on top of everything else
         */}
        <Snackbar
          visible={visible && !!message}
          onDismiss={_hide}
          duration={DURATION}
          action={ACTION}
        >
          {message}
        </Snackbar>
      </Context.Provider>
    );
  };
}

export default withSnackbar;

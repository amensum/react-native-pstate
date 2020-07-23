/** @format */

import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const usePermanentState = (initState) => {
  const [state, setState] = React.useState(initState);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem('@state').then((json) => {
      const state = JSON.parse(json);

      if (state) {
        setState(state);
      }

      setMounted(true);

      console.log('[PS] STORAGE ⇨ STATE');
    });
  }, []);

  React.useEffect(() => {
    if (mounted) {
      const json = JSON.stringify(state);

      AsyncStorage.setItem('@state', json).then(() => {
        console.log('[PS] STATE ⇨ STORAGE');
      });
    }
  }, [state]);

  const unsetState = () => {
    setState(initState);

    console.log('[PS] ✕ STORAGE');
  };

  return [state, setState, unsetState];
};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import * as Sentry from '@sentry/react-native';
import {store} from './stores/store';
import {theme} from './Theme';
import {RoutesContainer} from './routes';

Sentry.init({
  // dsn: '',
});

export const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <RoutesContainer />
      </PaperProvider>
    </StoreProvider>
  );
};

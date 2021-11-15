/* eslint-disable @typescript-eslint/no-unused-vars */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {compose} from 'redux';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {rootReducer} from './rootReducer';

const enhancers = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

if (process.env.NODE_ENV === 'development') {
  // enhancers.push(logger);
}
/* eslint-disable no-undef */
const composeEnhancers =
  (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(enhancers); // , reactotron.createEnhancer());

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// create the store => configureStore
// const store = createStore(reducer, enhancer, autoRehydrate());
/**
  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: enhancer,
  });

  const persistor = persistStore(store);

  export { persistor };
  * */

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

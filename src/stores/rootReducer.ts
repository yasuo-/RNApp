import {combineReducers} from '@reduxjs/toolkit';

import {IntroReadModule} from './modules/intro';
import {LoadingModule} from './modules/loading';

const appReducer = combineReducers({
  loading: LoadingModule.reducer,
  intro: IntroReadModule.reducer,
});

// type
export type RootState = ReturnType<typeof rootReducer>;

/**
 * rootReducer
 * @param {*} state
 * @param {*} action
 */
export const rootReducer = (state, action) => {
  if (action.type === 'appMode/resetAllState') {
    console.log('rootReducer All CLEAR');
    state = undefined;
    console.log(state);
  }
  return appReducer(state, action);
};

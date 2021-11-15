/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// state
export type loadTypes = {
  finishWalkIntro: boolean;
};

// init state
const InitialState: loadTypes = {
  finishWalkIntro: false,
};

export const IntroReadModule = createSlice({
  name: 'IntroReadModule',
  initialState: InitialState,
  reducers: {
    setReadIntro: (state, action) => {
      state.finishWalkIntro = true;
    },
    clearReadIntro: (state, action) => {
      state.finishWalkIntro = false;
    },
  },
});

export const {setReadIntro, clearReadIntro} = IntroReadModule.actions;

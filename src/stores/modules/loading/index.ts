/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// state
export type loadTypes = {
  loading: boolean;
  isSuccess: boolean;
  finishUploaded: boolean;
  buttonLoading: boolean;
  isError: boolean;
  successText: string;
  errorText: string;
};

// init state
const InitialState: loadTypes = {
  loading: false,
  isSuccess: false,
  finishUploaded: false, // old
  buttonLoading: false,
  isError: false,
  successText: '成功しました',
  errorText: 'エラーが発生しました',
};

export const LoadingModule = createSlice({
  name: 'LoadingModule',
  initialState: InitialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    clearLoading: (state, action) => {
      state.loading = false;

      const {isSuccess, isError, message} = action.payload;
      if (isSuccess) {
        state.isSuccess = true;
        state.successText =
          message && message === '' ? '成功しました' : message;
      }
      if (isError) {
        state.isError = true;
        state.errorText =
          message && message === '' ? 'エラーが発生しました' : message;
      }
    },
    setSuccessBar: (state, action) => {
      state.isSuccess = true;
      const {successText} = action.payload;
      state.successText =
        successText && successText === '' ? '成功しました' : successText;
    },
    clearSuccessBar: (state, action) => {
      state.isSuccess = false;
      state.successText = '成功しました';
    },
    setFinishUploaded: (state, action) => {
      state.finishUploaded = true;
    },
    clearFinishUploaded: (state, action) => {
      state.finishUploaded = false;
    },
    setButtonLoading: (state, action) => {
      state.buttonLoading = true;
    },
    clearButtonLoading: (state, action) => {
      state.buttonLoading = false;
    },
    setErrorBar: (state, action) => {
      state.isError = true;
      const {errorText} = action.payload;
      state.errorText =
        errorText && errorText === '' ? 'エラーが発生しました' : errorText;
    },
    clearErrorBar: (state, action) => {
      state.isError = false;
      state.errorText = '';
    },
  },
});

export const {
  setLoading,
  clearLoading,
  setSuccessBar,
  clearSuccessBar,
  setFinishUploaded,
  clearFinishUploaded,
  setButtonLoading,
  clearButtonLoading,
  setErrorBar,
  clearErrorBar,
} = LoadingModule.actions;

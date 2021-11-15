export const loadingSelector = state => {
  return state.loading.loading;
};

export const successSelector = state => {
  return {
    isSuccess: state.loading.isSuccess,
    message: state.loading.successText,
  };
};
export const errorSelector = state => {
  return {
    isError: state.loading.isError,
    ErrorMessage: state.loading.errorText,
  };
};

export const finishUploadedSelector = state => {
  return state.finishUploaded;
};

export const buttonLoadingSelector = state => {
  const loading = state.loading;
  return {
    buttonLoading: loading.buttonLoading,
  };
};

export const errorLoadingSelector = state => {
  const loading = state.loading;
  return {
    isError: loading,
    errorText: loading,
  };
};

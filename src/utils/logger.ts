import * as Sentry from '@sentry/react-native';
/**
 * logger
 * @param param1
 * @param param2
 */
export const logger = (param1: string = '=======', param2: string) => {
  if (__DEV__) {
    return console.log(param1, param2);
  }
};

/**
 * trackLogger
 * @param param1
 * @param param2
 */
export const trackLogger = (param1: string = '=======', param2: string) => {
  if (__DEV__) {
    return console.log(param1, param2);
  } else {
    // production
    Sentry.captureMessage(param1);
    Sentry.captureException(param2);
  }
};

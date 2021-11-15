import {DefaultTheme} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    myOwnColor: '#BADA55',
  },
  // Specify custom property
  myOwnProperty: true,
};

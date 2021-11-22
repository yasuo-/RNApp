import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {useNavigation} from '@react-navigation/native';

import {ChooseScreen} from '@/screens/Auth';
import {HomeScreen} from '@/screens/App';
import {AccountsScreen} from '@/screens/Accounts';
/**
 * createStackNavigator
 */
const Stack = createNativeStackNavigator();

/**
 * AuthRoutesStack
 */
export const AuthRoutesStack: React.FC<{routeName?: string}> = ({
  routeName = 'AUTH_CHOOSE',
}) => {
  // const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name={'AUTH_CHOOSE'}
        component={ChooseScreen}
        options={{}}
      />
      <Stack.Group>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Profile'} component={AccountsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

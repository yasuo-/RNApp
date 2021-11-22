import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {AuthRoutesStack} from './AuthRoutesStack';

export const RoutesContainer = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        // @ts-ignore
        const currentRouteName = navigationRef.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          // Change this line to use another Mobile analytics SDK
          // await Analytics.setCurrentScreen(currentRouteName);
        }
        // @ts-ignore
        routeNameRef.current = currentRouteName;
      }}>
      <AuthRoutesStack />
    </NavigationContainer>
  );
};

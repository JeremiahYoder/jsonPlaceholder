import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { RootStackParamList } from './types'
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import SplashScreen from '../screens/Splash';

// import AppHeader from '../components/AppHeader';

import {
  SPLASH, HOME, PROFILE
} from '../constants/screens'

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SPLASH} 
        // screenOptions={{
        //   header: AppHeader
        // }}
      >
      <Stack.Screen
          name={SPLASH}
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name={PROFILE} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { RootStackParamList } from './types'

import ProfileButton from '../components/ProfileButton';

import { SPLASH, LOGIN, HOME, PROFILE } from '../constants/screens'

import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SPLASH} 
        // screenOptions={{
        //   header: () => <AppHeader />
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
          name={LOGIN}
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{
            title: 'Home', 
            headerBackVisible: false, 
            headerTitleAlign: 'center',
            headerRight: () => <ProfileButton />
          }}
        />
        <Stack.Screen 
          name={PROFILE} 
          component={ProfileScreen} 
          options={{
            title: 'Profile', 
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
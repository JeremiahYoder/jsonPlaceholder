import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootStackParamList } from './types'

import ProfileButton from '../components/ProfileButton';

import { SPLASH, LOGIN, HOME, PROFILE } from '../constants/screens'

import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import UsersScreen from '../screens/Users'
import useAppSelector from '../hooks/useAppSelector';
import { isAuthenticated } from '../selectors/session';

const Stack = createNativeStackNavigator<RootStackParamList>();

const FrontStackNavigator = () => {
  return <Stack.Navigator initialRouteName={SPLASH} screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={SPLASH}
      component={SplashScreen}
    />
    <Stack.Screen
      name={LOGIN}
      component={LoginScreen}
    />
  </Stack.Navigator>
}

// const IntersititalStackNavigator = () => {
//   return <Stack.Navigator initialRouteName={SPLASH} screenOptions={{ headerShown: false }}>
//     <Stack.Screen
//       name={SPLASH}
//       component={SplashScreen}
//     />
//     <Stack.Screen
//       name={LOGIN}
//       component={LoginScreen}
//     />
//   </Stack.Navigator>
// }

const AuthStackNavigator = () => {
  return <Stack.Navigator initialRouteName={HOME} key={'AuthStack'}>
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
}

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name='Dashboard' component={AuthStackNavigator} />
      <BottomTab.Screen name='Users' component={UsersScreen} />
    </BottomTab.Navigator>
  );
}

export const AppNavigator = () => {
  const isAuth = useAppSelector(isAuthenticated)

  const CurrentNavigator = React.useMemo(() => {
    if (isAuth) return <BottomTabNavigator />
    return <FrontStackNavigator />
  }, [isAuth])

  return (
    <NavigationContainer>
      {CurrentNavigator}
    </NavigationContainer>
  );
};




// import { getHeaderTitle } from '@react-navigation/elements';

// // ..

// header: ({ navigation, route, options, back }) => {
//   const title = getHeaderTitle(options, route.name);

//   return (
//     <MyHeader
//       title={title}
//       leftButton={
//         back ? <MyBackButton onPress={navigation.goBack} /> : undefined
//       }
//       style={options.headerStyle}
//     />
//   );
// };
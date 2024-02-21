import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootStackParamList } from './types'

import { SPLASH, LOGIN, HOME, PROFILE } from '../constants/screens'

import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import UsersScreen from '../screens/Users'
import UserScreen from '../screens/User'
import PostsScreen from '../screens/Posts'
import PostScreen from '../screens/Post'
import CommentsScreen from '../screens/Comments'
import TodosScreen from '../screens/Todos'
import AlbumsScreen from '../screens/Albums'
import AlbumScreen from '../screens/Album'
import PhotosScreen from '../screens/Photos'

import useAppSelector from '../hooks/useAppSelector';
import { isAuthenticated } from '../selectors/session';
import { Text, View } from 'react-native';

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

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator 
      key={'AuthStack'} 
      initialRouteName={HOME} 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        name={'User'}
        component={UserScreen}
      />
      <Stack.Screen
        name={'Post'}
        component={PostScreen}
      />
      <Stack.Screen
        name={'Album'}
        component={AlbumScreen}
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
  )
}

const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
      <Drawer.Screen name='Users' component={UsersScreen} />
      <Drawer.Screen name='Posts' component={PostsScreen} />
      <Drawer.Screen name='Comments' component={CommentsScreen} />
      <Drawer.Screen name='Todos' component={TodosScreen} />
      <Drawer.Screen name='Albums' component={AlbumsScreen} />
      <Drawer.Screen name='Photos' component={PhotosScreen}/>
    </Drawer.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name='Home' component={AuthStackNavigator} />
      <BottomTab.Screen name='Option1' component={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Option1</Text></View>} />
      <BottomTab.Screen name='Option2' component={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Option2</Text></View>} />
      <BottomTab.Screen name='Option3' component={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Option3</Text></View>} />
    </BottomTab.Navigator>
  );
}

export const AppNavigator = () => {
  const isAuth = useAppSelector(isAuthenticated)

  const CurrentNavigator = React.useMemo(() => {
    if (isAuth) return <MenuDrawer />
    return <FrontStackNavigator />
  }, [isAuth])

  return (
    <NavigationContainer>
      {CurrentNavigator}
    </NavigationContainer>
  );
};

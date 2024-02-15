import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Home: undefined;
    Profile: { name: string };
};

export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

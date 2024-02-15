import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    Profile: { name: string };
};

export type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
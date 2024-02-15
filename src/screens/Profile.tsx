import React from 'react'
import { View, Text } from "react-native";
import type { ProfileScreenProps } from '../navigation/types';

const ProfileScreen = ({ route }: ProfileScreenProps) => {
    console.log("ProfileScreen")
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};

export default React.memo(ProfileScreen);
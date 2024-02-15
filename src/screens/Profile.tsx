import React from 'react'
import { View, Text } from "react-native";
import type { ProfileProps } from '../navigation/types';

const ProfileScreen = ({ route }: ProfileProps) => {
    console.log("ProfileScreen")
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};

export default ProfileScreen;
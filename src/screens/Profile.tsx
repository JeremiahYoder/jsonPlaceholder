import React from 'react'
import { View, Text } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
    console.log("ProfileScreen")
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};

export default ProfileScreen;
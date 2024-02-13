import React from 'react'
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    console.log("HomeScreen")

    return (
        <View>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </View>
    );
};

export default HomeScreen;
import React from 'react'
import { View, Button } from "react-native";
import Counter from '../components/Counter'

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
            <Counter />
        </View>
    );
};

export default HomeScreen;
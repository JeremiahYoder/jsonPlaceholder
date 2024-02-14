import React from 'react'
import { View, Button } from "react-native";
import Counter from '../components/Counter'
import type { HomeProps } from '../navigation/types';

const HomeScreen = ({ navigation }: HomeProps) => {
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
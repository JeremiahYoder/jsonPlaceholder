import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import Counter from '../components/Counter'
import type { HomeScreenProps } from '../navigation/types';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    console.log("HomeScreen")

    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <Text style={styles.counterText}>Counter Comp</Text>
                <Counter />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    counterContainer: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 20
    },
    counterText: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        textAlign: 'center',
        marginBottom: 20
    }
})

export default React.memo(HomeScreen);
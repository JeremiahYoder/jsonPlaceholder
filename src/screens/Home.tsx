import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { HomeScreenProps } from '../navigation/types';
import SafeAreaView from '../components/SafeAreaView';
import Counter from '../components/Counter'

const HomeScreen = (): React.JSX.Element => {
    console.log("HomeScreen")
    return (
        <SafeAreaView style={styles.container}>
            <Text>DASHBOARD</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default HomeScreen;
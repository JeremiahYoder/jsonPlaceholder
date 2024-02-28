import React from 'react'
import { Text, StyleSheet } from "react-native";
import SafeAreaView from '../components/SafeAreaView';

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
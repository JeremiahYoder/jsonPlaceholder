import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { HomeScreenProps } from '../navigation/types';
import SafeAreaView from '../components/SafeAreaView';
import Counter from '../components/Counter'

const HomeScreen = (_props: HomeScreenProps): React.JSX.Element => {
    console.log("HomeScreen")
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.counterContainer}>
                    <Text style={styles.counterText}>Counter Comp</Text>
                    <Counter />
                </View>
            </View>
        </SafeAreaView>
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

export default HomeScreen;
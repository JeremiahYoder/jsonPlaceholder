import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { SplashProps } from '../navigation/types';
import { HOME } from '../constants/screens'

const Splash = ({ navigation }: SplashProps) => {

    useEffect(() => {
        setTimeout(() => navigation.navigate(HOME), 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Text>SLASH SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        borderColor: 'red', borderWidth: 1,

        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {

    }
})

export default Splash;
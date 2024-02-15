import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { SplashScreenProps } from '../navigation/types';
import { LOGIN } from '../constants/screens'

const Splash = ({ navigation }: SplashScreenProps) => {
    useEffect(() => {
        setTimeout(() => navigation.navigate(LOGIN), 2000)
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {

    }
})

export default React.memo(Splash);
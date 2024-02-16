import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { LOGIN } from '../constants/screens'
import { SplashScreenProps } from '../navigation/types';

const Splash = ({ navigation }: SplashScreenProps): React.JSX.Element => {
    useEffect(() => {
        setTimeout(() => navigation.replace(LOGIN), 2000)
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
    }
})

export default Splash;
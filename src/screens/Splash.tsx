import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { SplashScreenProps } from '../navigation/types';
import SafeAreaView from '../components/SafeAreaView';
import { LOGIN } from '../constants/screens'

const Splash = ({ navigation }: SplashScreenProps): React.JSX.Element => {
    useEffect(() => {
        setTimeout(() => navigation.replace(LOGIN), 2000)
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>SLASH SCREEN</Text>
            </View>
        </SafeAreaView>
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
import React, { useCallback, useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native'
import { LoginScreenProps } from '../navigation/types'
import { HOME } from '../constants/screens'

const Login = ({ navigation }: LoginScreenProps) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onPressLogin = useCallback(() => {
        if (!username.length || !password.length) {
            Alert.alert('Enter username and/or password')
            return
        }

        navigation.navigate(HOME)
    }, [username, password])

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} value={username} onChangeText={(un) => setUsername(un)} placeholder='Username' />
                <TextInput style={styles.input} value={password} onChangeText={(pw) => setPassword(pw)} placeholder='Password' />
            </View>
            <Button title='Login' onPress={onPressLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    }
})

export default React.memo(Login)
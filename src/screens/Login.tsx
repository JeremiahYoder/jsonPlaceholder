import React, { useCallback, useState } from 'react'
import { View, Button, StyleSheet, Text, Alert } from 'react-native'
import Input from '../components/Input'
import SafeAreaView from '../components/SafeAreaView'
import { LoginScreenProps } from '../navigation/types'
import useAppDispatch from '../hooks/useAppDispatch'
import { login } from '../slices/sessionSlice'
import I18n from '../translations'

const Login = (_props: LoginScreenProps): React.JSX.Element => {
    const dispatch = useAppDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onPressLogin = useCallback(() => {
        // if (!username.length || !password.length) {
        //     Alert.alert('Enter username and/or password')
        //     return
        // }

        dispatch(login())
    }, [username, password])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>{I18n.t('greeting', { name: 'Jeremiah' })}</Text>
                <View style={styles.inputContainer}>
                    <Input value={username} onChangeText={setUsername} placeholder='Username' />
                    <View style={styles.spacer}/>
                    <Input value={password} onChangeText={setPassword} placeholder='Password' />
                </View>
                <Button title='Login' onPress={onPressLogin} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    inputContainer: {
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    spacer: {
        height: 20
    },
    button: {

    }
})

export default Login
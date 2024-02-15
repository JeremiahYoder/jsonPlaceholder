import React, { useCallback } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import ProfileButton from '../ProfileButton'
import useAppNavigation from '../../hooks/useAppNavigation'

function AppHeader() {
    const navigation = useAppNavigation()

    const goBack = useCallback(() => navigation.goBack(), [navigation])

    return (
        <View style={styles.container}>
            <Button title='Back' onPress={goBack} />
            <Text>Screen Title</Text>
            <ProfileButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    }
})

export default AppHeader
import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

function AppHeader() {
    return (
        <View style={styles.container}>
            <Button title='Back' />
            <Text>Screen Title</Text>
            <Button title='Profile' />
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
import React from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'

const Input = (props: TextInputProps) => {
    return <TextInput style={styles.input} {...props} />
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    }
})

export default React.memo(Input)
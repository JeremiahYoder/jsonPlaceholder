import React from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'

const Input = (props: TextInputProps) => {
    return <TextInput {...props} style={[styles.input, props.style]} />
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 0.75,
        backgroundColor: 'white',
        borderRadius: 5
    }
})

export default React.memo(Input)
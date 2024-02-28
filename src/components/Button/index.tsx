import React from 'react'
import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from '@react-native-material/core'

type ButtonProps = MaterialButtonProps
const Button = (props: ButtonProps) => {
    return (
        <MaterialButton {...props}/>
    )
}

export default Button
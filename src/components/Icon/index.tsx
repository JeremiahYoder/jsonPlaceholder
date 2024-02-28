import React from 'react'
import { IconProps as MaterialIconProps } from '@react-native-material/core'
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconProps = any & MaterialIconProps
const Icon = (props: IconProps) => {
    return (
        <MaterialCommunityIcons {...props} />
    )
}

export default Icon
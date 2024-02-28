import React from 'react'
import { Icon as MaterialIcon, IconProps } from '@react-native-material/core'
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconProps2 = any & IconProps

const Icon = (props: IconProps2) => {
    return (
            <MaterialCommunityIcons {...props} />
    )
}

export default Icon
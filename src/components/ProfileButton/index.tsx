import React, { useCallback } from 'react'
import { Button, StyleSheet } from 'react-native'
import useAppNavigation from '../../hooks/useAppNavigation'
import { PROFILE } from '../../constants/screens'

const ProfileButton = () => {
    const navigation = useAppNavigation()

    const onPress = useCallback(() => {
        navigation.navigate(PROFILE, { name: 'Jeremiah' })
    }, [])

    return <Button title='Profile' onPress={onPress} />
}

const styles = StyleSheet.create({

})

export default React.memo(ProfileButton);
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../Input'
import Button from '../Button'
import useAppSelector from '../../hooks/useAppSelector'
import { currentUser } from '../../selectors/users'

const ProfileTab = () => {
    const User = useAppSelector(currentUser)
    console.log("[TAB][Profile][User]", User)

    return (
        <View style={styles.contentContainer}>
            <Input value={User.username} placeholder='Username' />
            <Input value={User.name} placeholder='Name' />
            <Input value={User.email} placeholder='Email' />
            <Input value={User.phone} placeholder='Phone' />
            <Input value={User.website} placeholder='Website' />
            <View style={styles.spacer} />
            <Text>Address Info</Text>
            <View style={styles.addressRow}>
                <Input value={User.address.street} placeholder='Street' style={styles.streetStyle} />
                <Input value={User.address.suite} placeholder='Suite' style={styles.suiteStyle} />
            </View>
            <View style={styles.addressRow}>
                <Input value={User.address.city} placeholder='City' style={styles.cityStyle} />
                <Input value={User.address.zipcode} placeholder='Zipcode' style={styles.zipCodeStyle} />
            </View>

            <Button title='Update' color='blue' style={styles.updateButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    spacer: {
        height: 20,
    },
    title: {
        fontWeight: 'bold'
    },
    contentContainer: {
        flex: 1,
        width: '100%',
    },
    addressRow: {
        width: '100%', flexDirection: 'row'
    },
    streetStyle: {
        flex: 0.8
    },
    suiteStyle: {
        flex: 0.2
    },
    cityStyle: {
        flex: 1
    },
    zipCodeStyle: {
        flex: 1
    },
    updateButton: {
        marginTop: 20
    }
})

export default ProfileTab
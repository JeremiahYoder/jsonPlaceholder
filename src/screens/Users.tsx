import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { users } from '../selectors/users'
import { loadUsersData } from '../thunks/users'
import { IUser } from '../api/users'

const Users = () => {
    const dispatch = useAppDispatch()
    const Users = useAppSelector(users)

    useEffect(() => {
        dispatch(loadUsersData())
    }, [])

    const renderItem = useCallback(({ item }: { item: IUser }) => {
        return (
            <View key={item.id} style={styles.row}>
                <Text>Name: {item.name}</Text>
                <Text>Username: {item.username}</Text>
                <Text>Email: {item.email}</Text>
            </View>
        )
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data={Users}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.flatlistStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainerStyle: {
        borderColor: 'blue',
        borderWidth: 1
    },
    flatlistStyle: {
        width: '100%'
    },
    row: { 
        borderColor: 'red', 
        borderWidth: 1, 
    }
})

export default Users
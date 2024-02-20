import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
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
        <SafeAreaView style={styles.container}>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={Users}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.flatlistStyle}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        // borderColor: 'yellow', borderWidth: 1
    },
    contentContainerStyle: {
        borderColor: 'blue',
        borderWidth: 1
    },
    flatlistStyle: {
        flexGrow: 1,
        // flex: 1,
        width: '100%',
        height: '100%'
    },
    row: { 
        borderColor: 'red', 
        borderWidth: 1, 
    }
})

export default Users
import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { users } from '../selectors/users'
import { loadCurrentUser, loadUsersData } from '../thunks/users'
import useAppNavigation from '../hooks/useAppNavigation'
import { IUser } from '../types/user'

const Users = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const Users = useAppSelector(users)

    useEffect(() => {
        dispatch(loadUsersData())
    }, [])

    const onPressItem = useCallback((id: number) => {
        dispatch(loadCurrentUser(id))
        navigation.navigate('User')
    }, [])

    const renderItem = useCallback(({ item }: { item: IUser }) => {
        return (
            <TouchableOpacity key={item.id} onPress={() => onPressItem(item.id)} style={styles.row}>
                <View>
                    <Text>Name: {item.name}</Text>
                    <Text>Username: {item.username}</Text>
                    <Text>Email: {item.email}</Text>
                </View>
            </TouchableOpacity>
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
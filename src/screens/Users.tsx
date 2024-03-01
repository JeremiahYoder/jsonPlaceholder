import React, { useCallback, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { users } from '../selectors/users'
import { loadCurrentUser, loadUsersData, resetUserData } from '../thunks/users'
import useAppNavigation from '../hooks/useAppNavigation'
import { IUser } from '../types/user'
import Button from '../components/Button'

const Users = () => {
    const dispatch = useAppDispatch()
    const navigation = useAppNavigation()
    navigation.setOptions({
        headerRight: () => <Button title='Clear Users' onPress={() => dispatch(resetUserData())} color='blue'/>
    })

    const Users = useAppSelector(users)
    const UserList = useMemo<IUser[]>(() => Object.values(Users), [Users])
    console.log("[Todos]UserList", UserList)

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
                data={UserList}
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
    },
    contentContainerStyle: {
        borderColor: 'blue',
        borderWidth: 1
    },
    flatlistStyle: {
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    row: { 
        borderColor: 'red', 
        borderWidth: 1, 
    }
})

export default Users
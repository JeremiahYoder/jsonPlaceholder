import React, { useCallback, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { userState } from '../selectors/users'
import { loadCurrentUser, loadUsersData, resetUserData } from '../thunks/users'
import useAppNavigation from '../hooks/useAppNavigation'
import { IUser } from '../types/user'

const Users = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    const Users = useAppSelector(userState).users
    const UserList = useMemo<IUser[]>(() => Object.values(Users), [Users])

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
                ListHeaderComponent={() => (
                    <View style={{ height: 100, width: 100 }}>
                        <TouchableOpacity onPress={() => dispatch(resetUserData())}>
                            <Text>Press Here</Text>
                        </TouchableOpacity>
                    </View>
                )}
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
import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import { unloadCurrentUser } from '../thunks/users'
import useAppSelector from '../hooks/useAppSelector'
import { currentUser } from '../selectors/users'
import { currentUsersPosts } from '../selectors/posts'
import { currentUsersAlbums } from '../selectors/albums'
import { currentUsersTodos } from '../selectors/todos'

const User = () => {
    const dispatch = useAppDispatch()
    const User = useAppSelector(currentUser)
    const Posts = useAppSelector(currentUsersPosts)
    const Albums = useAppSelector(currentUsersAlbums)
    const Todos = useAppSelector(currentUsersTodos)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>User Details</Text>
                <Text>Name: {User.name}</Text>
                <Text>Username: {User.username}</Text>
                <Text>Email: {User.email}</Text>
            </View>
            <View style={{ height: 20 }} />
            <View style={{ width: '100%', height: 100, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>User Posts: {Posts.length}</Text>
                <Text style={{ fontWeight: 'bold' }}>User Albums: {Albums.length}</Text>
                <Text style={{ fontWeight: 'bold' }}>User Todos: {Todos.length}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default User
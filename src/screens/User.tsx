import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { currentUser, userState } from '../selectors/users'
import { currentUserPosts } from '../selectors/posts'
import { currentUserAlbums } from '../selectors/albums'
import { currentUserTodos } from '../selectors/todos'
import { unloadCurrentUser } from '../thunks/users'

const User = () => {
    const dispatch = useAppDispatch()
    useEffect(() => () => { dispatch(unloadCurrentUser()) }, [])

    const testState = useAppSelector(userState)
    console.log("[User]testState", testState)

    const User = useAppSelector(currentUser)
    const Posts = useAppSelector(currentUserPosts)
    const Albums = useAppSelector(currentUserAlbums)
    const Todos = useAppSelector(currentUserTodos)

    if (!User) {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        No User Loaded
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>User Details</Text>
                <Text>Name: {User.name}</Text>
                <Text>Username: {User.username}</Text>
                <Text>Email: {User.email}</Text>
            </View>
            <View style={styles.spacer} />
            <View style={styles.relationsContainer}>
                <Text style={styles.title}>User Posts: {Posts?.length}</Text>
                <Text style={styles.title}>User Albums: {Albums?.length}</Text>
                <Text style={styles.title}>User Todos: {Todos?.length}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        height: 20
    },
    title: {
        fontWeight: 'bold'
    },
    relationsContainer: {
        width: '100%',
        height: 100,
        alignItems: 'center'
    }
})

export default User
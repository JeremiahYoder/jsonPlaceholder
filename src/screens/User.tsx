import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { currentUser } from '../selectors/users'
import { currentUsersPosts } from '../selectors/posts'
import { currentUsersAlbums } from '../selectors/albums'
import { currentUsersTodos } from '../selectors/todos'
import { unloadCurrentUser } from '../thunks/users'

const User = () => {
    const dispatch = useAppDispatch()
    const User = useAppSelector(currentUser)
    const Posts = useAppSelector(currentUsersPosts)
    const Albums = useAppSelector(currentUsersAlbums)
    const Todos = useAppSelector(currentUsersTodos)

    useEffect(() => {
        () => {
            dispatch(unloadCurrentUser())
        }
    }, [])

    if (!User) {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>
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
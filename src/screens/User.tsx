import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import Icon from '../components/Icon'
import Input from '../components/Input'
import Button from '../components/Button'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { currentUser } from '../selectors/users'
import { currentUserPosts } from '../selectors/posts'
import { currentUserAlbums } from '../selectors/albums'
import { currentUserTodos } from '../selectors/todos'
import { unloadCurrentUser } from '../thunks/users'
import TabView from '../components/TabView'

const User = () => {
    const dispatch = useAppDispatch()
    useEffect(() => () => { dispatch(unloadCurrentUser()) }, [])

    const User = useAppSelector(currentUser)
    const Posts = useAppSelector(currentUserPosts)
    const Albums = useAppSelector(currentUserAlbums)
    const Todos = useAppSelector(currentUserTodos)

    console.log("[User]User", User)

    const ProfileView = () => (
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

    const AlbumView = () => (
        <View><Text>Album View</Text></View>
    )

    const PostView = () => (
        <View><Text>Post View</Text></View>
    )

    const TodoView = () => (
        <View><Text>Todo View</Text></View>
    )

    const tabViewRoutes: { key: string, title: string }[] = [
        { key: 'profile', title: 'Profile' },
        { key: 'album', title: 'Albums' },
        { key: 'post', title: 'Posts' },
        { key: 'todo', title: 'Todos' },
    ]

    const tabViewScene = {
        profile: ProfileView,
        album: AlbumView,
        post: PostView,
        todo: TodoView
    }

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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', 
            // borderColor: 'red', borderWidth: 1 
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='head' size={64} color='black' />
                    <View style={{ 
                        // borderColor: 'red', borderWidth: 1, 
                    }}>
                        <Text style={styles.headerName}>{User.name}</Text>
                        <Text style={styles.headerUsername}>@{User.username}</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 10, 
                // borderColor: 'red', borderWidth: 1 
                }}>
                    <Text>Posts: {Posts.length}</Text>
                    <Text>Albums: {Albums.length}</Text>
                    <Text>Todos: {Todos.length}</Text>
                </View>
            </View>
            <TabView 
                routes={tabViewRoutes}
                sceneMap={tabViewScene}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'white',

        // borderColor: 'red', borderWidth: 1 
    },
    spacer: {
        height: 20,

        // borderColor: 'green', borderWidth: 1 
    },
    title: {
        fontWeight: 'bold'
    },
    headerName: {
        fontSize: 24
    },
    headerUsername: {
        fontSize: 12,
        fontStyle: 'italic'
    },
    contentContainer: {
        flex: 1,
        width: '100%',

        // borderColor: 'blue', borderWidth: 1,
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

export default User
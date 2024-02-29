import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import Icon from '../components/Icon'
import TabView, { TabViewRoute, TabViewScene } from '../components/TabView'
import { ProfileTab, AlbumTab, PostTab, TodoTab } from '../components/UserTabs'
import useAppSelector from '../hooks/useAppSelector'
import { currentUser } from '../selectors/users'
import { ActivityIndicator } from '@react-native-material/core'

const User = () => {
    const User = useAppSelector(currentUser)

    if (!User || User.id === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.emptyContainer}>
                    <ActivityIndicator />
                </View>
            </SafeAreaView>
        )
    }

    const routes: TabViewRoute[] = [
        { key: 'profile', title: 'Profile' },
        { key: 'album', title: 'Albums' },
        { key: 'post', title: 'Posts' },
        { key: 'todo', title: 'Todos' },
    ]

    const scenes: TabViewScene = {
        profile: ProfileTab,
        album: AlbumTab,
        post: PostTab,
        todo: TodoTab
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <Icon name='head' size={styles.headerUserIcon.width} color={styles.headerUserIcon.color} />
                    <View style={styles.headerUserHeader}>
                        <Text style={styles.headerName}>{User.name}</Text>
                        <Text style={styles.headerUsername}>@{User.username}</Text>
                    </View>
                </View>
            </View>
            <TabView routes={routes} sceneMap={scenes} />
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
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        // borderColor: 'red', borderWidth: 1 
    },
    headerContent: {
        flexDirection: 'row'
    },
    headerUserIcon: {
        color: 'black',
        width: 64
    },
    headerUserHeader: {
        // borderColor: 'red', borderWidth: 1, 
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
})

export default User
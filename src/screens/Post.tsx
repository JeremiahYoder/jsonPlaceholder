import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { resetPostData, unloadCurrentPost } from '../thunks/posts'
import { currentPostComments } from '../selectors/comments'
import { currentPost } from '../selectors/posts'
import useAppNavigation from '../hooks/useAppNavigation'
import Button from '../components/Button'

const Post = () => {
    const navigation = useAppNavigation()
    navigation.setOptions({
        headerRight: () => <Button title='Clear Users' onPress={() => dispatch(resetPostData())} color='blue'/>
    })

    const dispatch = useAppDispatch()
    useEffect(() => () => { dispatch(unloadCurrentPost()) }, [])

    const Post = useAppSelector(currentPost)
    const Comments = useAppSelector(currentPostComments)

    if (!Post) {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        No Post Loaded
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Post Details</Text>
                <Text>Title: {Post.title}</Text>
                <Text>{Post.body}</Text>
            </View>
            <View>
                <Text style={styles.title}>Post Comments: {Comments.length}</Text>
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

export default Post
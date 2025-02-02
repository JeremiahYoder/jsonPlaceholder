import React, { useCallback, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { currentUserPosts, posts } from '../selectors/posts'
import { loadCurrentPost, loadPostsData } from '../thunks/posts'
import { IPost } from '../types/post'
import useAppNavigation from '../hooks/useAppNavigation'
import { currentUserId } from '../selectors/users'

const Posts = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    const isUser = useAppSelector(currentUserId)
    const Posts = useAppSelector(isUser ? currentUserPosts : posts)
    const PostList = useMemo<IPost[]>(() => Object.values(Posts), [Posts])
    console.log("[Posts]PostList", PostList)

    useEffect(() => {
        if (!isUser) dispatch(loadPostsData())
    }, [isUser])

    const onPressItem = useCallback((id: number) => {
        dispatch(loadCurrentPost(id))
        navigation.navigate('Post')
    }, [])

    const renderItem = useCallback(({ item }: { item: IPost }) => {
        return (
            <TouchableOpacity key={item.id} onPress={() => onPressItem(item.id)}>
                <View style={styles.row}>
                    <Text>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            </TouchableOpacity>
        )
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                key={`POSTS_${isUser ?? 0}`}
                keyExtractor={(item) => item.id.toString()}
                data={PostList}
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

export default Posts;
import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { posts } from '../selectors/posts'
import { loadCurrentPost, loadPostsData } from '../thunks/posts'
import { IPost } from '../types/post'
import useAppNavigation from '../hooks/useAppNavigation'

const Posts = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const Posts = useAppSelector(posts)

    useEffect(() => {
        dispatch(loadPostsData())
    }, [])

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
                keyExtractor={(item) => item.id.toString()}
                data={Posts}
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
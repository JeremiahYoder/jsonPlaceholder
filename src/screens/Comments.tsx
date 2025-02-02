import React, { useCallback, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'

import { IComment } from '../types/comment'
import { comments } from '../selectors/comments'
import { loadCommentsData } from '../thunks/comments'
// import useAppNavigation from '../hooks/useAppNavigation'
// import Button from '../components/Button'

const Comments = () => {
    // const navigation = useAppNavigation()
    // navigation.setOptions({
    //     headerRight: () => <Button title='Clear Users' onPress={() => dispatch(resetCommentData())} color='blue'/>
    // })

    const dispatch = useAppDispatch()

    const Comments = useAppSelector(comments)
    const CommentList = useMemo<IComment[]>(() => Object.values(Comments), [])
    console.log("[Comments]CommentList", CommentList)

    useEffect(() => {
        dispatch(loadCommentsData())
    }, [])

    const renderItem = useCallback(({ item } : { item: IComment }) => {
        return (
            <View key={item.id} style={styles.row}>
                <Text>Name: {item.name}</Text>
                <Text>Email: {item.email}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={CommentList}
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

export default Comments
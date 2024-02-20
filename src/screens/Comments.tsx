import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'

import { IComment } from '../api/comments'
import { comments } from '../selectors/comments'
import { loadCommentsData } from '../thunks/comments'

const Comments = () => {
    const dispatch = useAppDispatch()
    const Comments = useAppSelector(comments)

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
                data={Comments}
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
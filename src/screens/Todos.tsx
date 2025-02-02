import React, { useCallback, useEffect, useMemo } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadTodosData } from '../thunks/todos'
import useAppSelector from '../hooks/useAppSelector'
import { currentUserTodos, todos } from '../selectors/todos'
import { ITodo } from '../types/todo'
import { currentUserId } from '../selectors/users'

const Todos = () => {
    const dispatch = useAppDispatch()

    const isUser = useAppSelector(currentUserId)
    const Todos = useAppSelector(isUser ? currentUserTodos : todos)
    const TodoList = useMemo<ITodo[]>(() => Object.values(Todos), [Todos])
    console.log("[Todos]TodoList", TodoList)

    useEffect(() => {
        if (!isUser) dispatch(loadTodosData())
    }, [isUser])

    const renderItem = useCallback(({ item } : { item: ITodo }) => {
        return (
            <View key={item.id} style={styles.row}>
                <Text>Todo: {item.title}</Text>
                <Text>Is Complete: {item.completed}</Text>
            </View>
        )
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={TodoList}
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

export default Todos;
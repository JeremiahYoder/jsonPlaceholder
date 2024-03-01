import React, { useEffect } from 'react'
import TodosScreen from '../../screens/Todos'
import useAppDispatch from '../../hooks/useAppDispatch'
import { loadUserTodos } from '../../thunks/users'

const TodoTab = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadUserTodos())
    }, [])

    return <TodosScreen />
}

export default TodoTab
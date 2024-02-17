import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { users } from '../selectors/users'
import { loadUserDataById } from '../thunks/users'
import { IUser } from '../api/users'

const Users = () => {
    console.log('Users.tsx')
    const dispatch = useAppDispatch()
    const Users = useAppSelector(users)

    useEffect(() => {
        dispatch(loadUserDataById())
        console.log('Users.tsx[useEffect]', 'DISPATCHING loadUserDataById')
    }, [])
    
    console.log('Users.tsx[Users]', Users)

    return (
        <View style={styles.container}>
            <FlatList 
                data={Users}
                renderItem={({ item }) => {
                    console.log("item:::", item)
                    return (
                        <View><Text>TEST</Text></View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Users
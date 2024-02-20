import React, { useCallback, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppSelector from '../hooks/useAppSelector'
import { albums } from '../selectors/albums'
import { IAlbum } from '../api/albums'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadAlbumsData } from '../thunks/albums'

const Albums = () => {
    const dispatch = useAppDispatch()
    const Albums = useAppSelector(albums)

    useEffect(() => {
        dispatch(loadAlbumsData())
    }, [])

    const renderItem = useCallback(({ item } : { item: IAlbum }) => {
        return (
            <View key={item.id} style={styles.row}>
                <Text>ID: {item.id}</Text>
                <Text>Title: {item.title}</Text>
            </View>
        )
    }, [])

    return (
        <SafeAreaView>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={Albums}
                renderItem={renderItem}
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

export default Albums
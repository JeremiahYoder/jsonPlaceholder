import React, { useCallback, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppSelector from '../hooks/useAppSelector'
import { albums } from '../selectors/albums'
import { IAlbum } from '../types/album'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadAlbumsData, loadCurrentAlbum } from '../thunks/albums'
import useAppNavigation from '../hooks/useAppNavigation'

const Albums = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const Albums = useAppSelector(albums)

    useEffect(() => {
        dispatch(loadAlbumsData())
    }, [])

    const onItemPress = useCallback((id: number) => {
        dispatch(loadCurrentAlbum(id))
        navigation.navigate('Album')
    }, [])

    const renderItem = useCallback(({ item } : { item: IAlbum }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.row} onPress={() => onItemPress(item.id)}>
                <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Title: {item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }, [])

    return (
        <SafeAreaView>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={Albums}
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

export default Albums